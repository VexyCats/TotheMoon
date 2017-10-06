TheMoon.playing = function(game){};

TheMoon.playing.prototype = {


preload: function(){

	//loading images - this = preload function, load = load, image('name of object', 'src')
		this.load.image('background', 'assets/russia-city.jpg');
		this.load.image('minimenuBackground', 'assets/minimenu.jpg');

		this.load.image('titleScreen', 'assets/titleScreen.png');
		this.load.image("button", "assets/button.png")
		game.world.setBounds(0,0,2120,1300);
		
},
create: function(){

	//this object's background = add new sprite to total game(x,y,'name of object that is sprite')
this.background = "#00000";

game.add.sprite(0,0,'tileHills');
game.add.sprite(100,100,'tileHills');
game.add.sprite(200,200,'tileHills');
game.add.sprite(1920,1200,'tileHills');
var city;
city = game.add.button(0, 0, 'button', actionOnClick, this);
city.scale.setTo(3,0.6);

city.fixedToCamera = true;



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

	function actionOnClick(){
		game.state.start('market');

	
}
// pull players current city data
// pull current page data  (ie: viewingMarket = true;)
},
render: function(){
	game.debug.cameraInfo(game.camera, 500,32);


}
};