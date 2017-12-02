
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
				//TheMoon.playingConfig(this.game);
		},
		create: function(){

			cursors = this.game._cursors;//TODO store cursors values for use

		this.drawMap();
		this.background = "#00000";


		var city;
		city = game.add.button(0, 0, 'button', this.actionOnClick, this);
		city.scale.setTo(3,0.6);

		city.fixedToCamera = true;

		game.global.score = 1;
		console.log(cursors)




		//add home base to center of map in between four tiles
		this.homeBaseCreate();
		
		
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

							tile1 = game.rnd.integerInRange(1,3);

									if(tile1 == 1){
									game.add.sprite(x,y,'tileHills');
									}else if(tile1 == 2){
									game.add.sprite(x,y,'tileWater');
									}else if(tile1 == 3){
									game.add.sprite(x,y,'tileGrasslands');
									}
							x = x +99;

							}
							y = y +99;
						}


						},

		homeBaseCreate: function() {
		var base;
		base = game.add.sprite(game.world.centerX, game.world.centerY, 'homebase', this);

		base.inputEnabled = true;
		base.events.onInputDown.add(this.actionOnClick, this);

		}


	};

export default Playing;
