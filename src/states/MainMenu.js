var game,
 MainMenu = function(cgame){
		this.game = game = cgame;
};




MainMenu.prototype = {
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
 playButton = game.add.button(100, 70, 'button', actionOnClick, this );
 playButton.anchor.setTo(0.5,0.5);
helpButton = game.add.button(250, 170, 'button', actionOnClickHelp, this );
   helpButton.anchor.setTo(0.5,0.5);
var playText = game.add.text(0,  130, "Play Now");
playText.anchor.setTo(0.5);
var helpText = game.add.text(0, 130, "Help");
helpText.anchor.setTo(0.5);

},
update: function(){

}
};

function actionOnClick(){

	game.state.start('playing');




}
function actionOnClickHelp(){

	game.state.start('playing');



}

export default MainMenu;
