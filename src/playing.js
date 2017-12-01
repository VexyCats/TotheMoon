
/*
*
*
*
*
*
*
*/



TheMoon.playing = function(game){};

TheMoon.playing.prototype = {


preload: function(){

	//loading images - this = preload function, load = load, image('name of object', 'src')
		this.load.image('background', 'assets/russia-city.jpg');
		this.load.image('minimenuBackground', 'assets/minimenu.jpg');

		this.load.image('titleScreen', 'assets/titleScreen.png');
		this.load.image("button", "assets/button.png")
		//TheMoon.playingConfig(this.game);
},
create: function(){

this.drawMap();
this.background = "#00000";


var city;
city = game.add.button(0, 0, 'button', actionOnClick, this);
city.scale.setTo(3,0.6);

city.fixedToCamera = true;

game.global.score = 1;




//add home base to center of map in between four tiles
// add onlcick to homebase
this.homeBase = new TheMoon.homeBaseClass();
this.homeBase.game.add.sprite(game.world.centerX, game.world.centerY, 'homeBase');

this.homeBase.inputEnabled = true;
  
 this.homeBase.events.onInputDown.add(this.actionOnClick, this);

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
		game.state.start('market');

	


},
render: function(){
	game.debug.cameraInfo(game.camera, 500,32);


},
 switchAnimal: function(sprite, event) {
    console.log('move animal');
  },
drawMap: function() {
	var tile1, tile2;
			for( y = 0; y <= 1300; y++){
				for( x = 0; x <= 2100; x++){
						
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


				}


};
