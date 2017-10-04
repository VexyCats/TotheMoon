TheMoon.playing = function(game){};

TheMoon.playing.prototype = {


preload: function(){

	//loading images - this = preload function, load = load, image('name of object', 'src')
		this.load.image('background', 'assets/russia-city.jpg');
		this.load.image('minimenuBackground', 'assets/minimenu.jpg');

		this.load.image('titleScreen', 'assets/titleScreen.png');
		this.load.image("button", "assets/button.png")

},
create: function(){

	//this object's background = add new sprite to total game(x,y,'name of object that is sprite')
this.background = this.game.add.sprite(0,0, 'background');
game.add.sprite(0,350, 'minimenuBackground');
var city = game.add.button(25,350, 'button', actionOnClick, this);
city.scale.setTo(0.6,0.6)
var market = game.add.button(155,350, 'button', actionOnClick, this);
market.scale.setTo(0.6,0.6)
var land = game.add.button(285,350, 'button', actionOnClick, this);
land.scale.setTo(0.6,0.6)


},
update: function(){

	function actionOnClick(){
		game.state.start('market');

	
}
// pull players current city data
// pull current page data  (ie: viewingMarket = true;)
}



};