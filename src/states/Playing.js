
import Building from '../components/Building';
import Player from '../components/PlayerData';

var game, cursors;

var Playing = function(cgame){
	this.game = game = cgame;
}


Playing.prototype = {


		preload: function(){

			//loading images - this = preload function, load = load, image('name of object', 'src')

				this.load.image('minimenuBackground', 'assets/minimenu.jpg');

				this.load.image('titleScreen', 'assets/titleScreen.png');
				this.load.image("button", "assets/button.png")
				this.load.image("house", "assets/house_top.png")
				//TheMoon.playingConfig(this.game);
		},
		create: function(){

			cursors = this.game._cursors;//TODO store cursors values for use

		this.drawMap();
		this.background = "#00000";
		this.player = new Player(
			{screenName: 'Demo Player'}
		)



		console.log(cursors)




		//add home base to center of map in between four tiles
		this.homeBaseCreate();

		//Display buildings
		this.showBuildings();


		},







		update: function(){
			 if (cursors.up.isDown)
		        {
		            game.camera.y -= 4;
		        }
		        else if (cursors.down.isDown)
		        {
		            game.camera.y += 4;
		        }

		        if (cursors.left.isDown)
		        {
		            game.camera.x -= 4;
		        }
		        else if (cursors.right.isDown)
		        {
		            game.camera.x += 4;
		        }
		},
			actionOnClick: function(sprite, event){
				game.state.start('homeBaseMenu');




		},
		render: function(){
			game.debug.cameraInfo(game.camera, 500,32);


		},

		drawMap: function() {
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
								}*/
							//x = x +99;
							sprites.scale.setTo(0.2, 0.2);
							x = x + 19;

							}
							//y = y +99;
							y = y + 19;
						}


						},

		homeBaseCreate: function() {
		var base;
		base = game.add.sprite(game.world.centerX, game.world.centerY, 'homebase', this);
		this.player.instance = base;

		base.inputEnabled = true;
		base.events.onInputDown.add(this.buildingsMenu, this);


		},
		showBuildings: function(){
			this.buildings = this.buildings || {};

			var config = {
				house:{
					x : 200,
					y : 150,
					resource: 'sand',
					maxStorage: 500,
				}
			}

			this.buildings.one = new Building(this.game,config.house);

			console.log(this.buildings)
		},


		buildingsMenu: function(){

			var menu;
			menu = game.add.sprite(game.camera.world.centerX, game.camera.world.centerY, 'homeBaseMenu', this);


			//var playerInventory = playerData.inventory[0];

			var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" },
			position = {x: menu.x,y: menu.y};
			game.add.text(position.x+20, position.y+25, "test 0000", style);
			position.y += 25;
			game.add.text(position.x+20, position.y+40, this.player.screenName, style);


		}



	};

export default Playing;
