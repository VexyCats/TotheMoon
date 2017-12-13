
import Contract from '../components/ContractApi';
import Alert from '../util/Alert';
import HUD from '../util/Hud';
import TileSelector from '../util/TileSelector';
import BuildingMenu from '../components/BuildingMenu';
import Building from '../components/Building';
import Player from '../components/PlayerData';
import HomeBaseMenu from '../components/homeBaseMenu';

var game, cursors,homeBaseMenu;

var Playing = function(cgame){
	this.game = game = cgame;
	this.alert = new Alert(cgame);
	this.hud = new HUD(cgame);
	this.buildingMenu = new BuildingMenu(cgame);
}


Playing.prototype = {
		buildings: [],


		preload: function(){

			//loading images - this = preload function, load = load, image('name of object', 'src')

				this.load.image('minimenuBackground', 'assets/minimenu.jpg');

				this.load.image('titleScreen', 'assets/titleScreen.png');
				this.load.image("button", "assets/button.png")
				//TheMoon.playingConfig(this.game);
		},
		create: function(){

				cursors = this.game._cursors;//TODO store cursors values for use

				this.background = this.drawMap();

				/* create new player account and set resources */

				this.player = new Player(
					{screenName: 'Demo Player'}
				);

				//Loadup Contract
				this.contract = new Contract();

				//add home base to center of map in between four tiles
				this.homeBaseCreate();
				homeBaseMenu = new HomeBaseMenu(this.game,this.player);

				//Display buildings
				this.showBuildings();

				//Test alert
				//this.alert.show('success','Message','Title',4);

				//set up TileSelector
				this.tileSelector = new TileSelector(this.game);
				this.game.input.addMoveCallback(this.checkSelectorSatus,this);
				//Show HUD
				this.hud.show();
				this.hud.buildButton.events.onInputDown.add(this.showBuildOptions,this);

					//Test
				//this.contract.createPlayer();

		},
		update: function(){
			var extreme = {
				x: ( cursors.left.isDown && game.camera.atLimit.x) || ( cursors.right.isDown && game.camera.atLimit.x ),
				y: ( cursors.up.isDown && game.camera.atLimit.y) || ( cursors.down.isDown && game.camera.atLimit.y )
			}
			var move = function(playing){
				var x = (playing.background.width/game.world.width)*6.5,
				y = (playing.background.height/game.world.height)*4
				extreme.x ?x=0:'';
				extreme.y?y=0:'';
				return{x:x,y:y};
			}

		 if (cursors.up.isDown)
      {
				game.camera.y -= 4;
				this.background.y -= move(this).y
      }
      else if (cursors.down.isDown)
      {
          game.camera.y += 4;
					this.background.y += move(this).y
      }

      if (cursors.left.isDown)
      {
          game.camera.x -= 4;
					this.background.x -= move(this).x
      }
      else if (cursors.right.isDown)
      {
          game.camera.x += 4;
					this.background.x += move(this).x
      }

			//this.background.tilePosition.x = 0.5;//Rolling background



		},
			actionOnClick: function(){





		},
		render: function(){
			game.debug.cameraInfo(game.camera, 500,32);


		},

		drawMap: function() {

			var background = game.add.tileSprite(0, 0, 1024, 1024, "lunarsoil");//TODO use only one image to avoid memory loss
			//background.fixedToCamera = true;
			return background;
			/*
			var tile1, tile2;
					for( var y = 0; y <= 1300; y++){
						for( var x = 0; x <= 2100; x++){

							var sprites = game.add.sprite(x,y,'lunarsoil');
							/*

							tile1 = game.rnd.integerInRange(1,3);

									if(tile1 == 1){
									var sprites = game.add.sprite(x,y,'tileHills');
									}else if(tile1 == 2){
									var sprites = game.add.sprite(x,y,'tileWater');
									}else if(tile1 == 3){
									var sprites = game.add.sprite(x,y,'tileGrasslands');
								}
							x = x +99;

						//	x = x + 19;

							}
							y = y +99;
							//y = y + 19;
						}*/


						},

		homeBaseCreate: function() {
			var base;
			base = game.add.sprite(game.world.centerX, game.world.centerY, 'homebase', this);
			this.player.instance = base;

			base.inputEnabled = true;
			base.events.onInputOver.add(this.showMenu, this);
		},
		showMenu: function(){
			homeBaseMenu.show();
		},
		showBuildings: function(){
			this.buildings = this.buildings || {};

			var config = {
				house:{
					x : 200,
					y : 150,
					level : 2,
					resource: {resource:'wood'},
					maxStorage: 500,
				}
			}

			this.buildings.push( new Building(this.game,config.house) );
		},


		buildingsMenu: function(){

			var menu = {};
			menu = game.add.sprite(game.camera.world.centerX, game.camera.world.centerY, 'homeBaseMenu', this);
			var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" },
			position = {x: menu.x,y: menu.y};

			menu.game.add.text(position.x+20, position.y+25, this.player.playerLevel, style);
			position.y += 25;
			menu.game.add.text(position.x+20, position.y+40, this.player.screenName, style);
			menu.game.add.text(position.x+20, position.y+100, "Current Buildings", style);
			menu.game.add.text(position.x+150, position.y+150, this.player.buildings[0], style);


			this.instance = menu;

			this.instance.inputEnabled = true;

			this.instance.events.onInputOut.add(this.hide, this);

			//var playerInventory = playerData.inventory[0];

		},

		hideMenu: function(){

			//this.instance.kill();

			homeBaseMenu.hide();
		},
		placeBuilding: function(){

		},
		showBuildOptions: function(){
			this.buildingMenu.show();
			const that = this;
			this.buildingMenu.options.forEach( function(option){
				option.events.destroy();
				option.events.onInputDown.add( function(){
					that.buildingMenu.hide();
					that.pickBuildingLocation(option._text);
				});
			});

		},
		checkSelectorSatus: function(){
			if(this.tileSelector.isShown){
				let selector = this.tileSelector.selector,
				lineWidth = selector.lineWidth,
				error;
				this.buildings.forEach(function(building){
					let instance = building.instance;
					if(
						((instance.x <= selector.x-lineWidth   &&  instance.x+instance.width >= selector.x-lineWidth ) ||
				    (instance.x+instance.width >= selector.x+selector.width-(3*lineWidth) && instance.x <= selector.x+selector.width-(3*lineWidth) ) )
						&&
						((instance.y <= selector.y-lineWidth && instance.y+instance.height >= selector.y-lineWidth) ||
						(instance.y+instance.height >= selector.y+selector.height-(3*lineWidth) && instance.y <= selector.y+selector.height-(3*lineWidth) ) )
					)
							error = true;
				})
				this.tileSelector.stateChanged(error);
			}
		},
		pickBuildingLocation: function(type){
				this.tileSelector.show();
				this.selectedBuilding = type;
				this.tileSelector.selector.events.onInputDown.add(this.addNewBuilding,this)
		},
		addNewBuilding: function(box){
				if(this.tileSelector.overlapping)
					return;
				let type = this.selectedBuilding;
				this.selectedBuilding = null;
				var buildconfig = {
					x : box.x,
					y : box.y,
					level : 1,
					resource: {resource:type},
					maxStorage: 500,
				}
				let build = new Building(this.game,buildconfig);

				console.log(build)
				this.buildings.push(build);



		}




	};

export default Playing;
