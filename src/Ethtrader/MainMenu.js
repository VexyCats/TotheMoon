TheMoon.MainMenu = function(game){};




TheMoon.MainMenu.prototype = {
preload: function(){

	//loading images - this = preload function, load = load, image('name of object', 'src')
		this.load.image('background', 'assets/russia-city.jpg');

		this.load.image('titleScreen', 'assets/titleScreen.png');
		this.load.image("button", "assets/button.png");

},
create: function(){

	//this object's background = add new sprite to total game(x,y,'name of object that is sprite')
this.background = '#0000';
var playButton;
var helpButton;
 playButton = game.add.button(game.world.centerX, game.world.centerY - 130, 'button', actionOnClick, this );
 playButton.anchor.setTo(0.5,0.5);
helpButton = game.add.button(game.world.centerX, game.world.centerY, 'button', actionOnClickHelp, this );
   helpButton.anchor.setTo(0.5,0.5);
var playText = game.add.text(game.world.centerX, game.world.centerY - 130, "Play Now");
playText.anchor.setTo(0.5);
var helpText = game.add.text(game.world.centerX, game.world.centerY, "Help");
helpText.anchor.setTo(0.5);

},
update: function(){

}
};

function actionOnClick(){

	game.state.start('playing');




}
function actionOnClickHelp(){

	game.state.start('');



}
