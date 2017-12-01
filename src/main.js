

var GameState = {

preload: function(){

	//loading images - this = preload function, load = load, image('name of object', 'src')
		this.load.image('background', 'assets/russia-city.jpg');

		this.load.image('titleScreen', 'assets/titleScreen.png');
		this.load.image("button", "assets/button.png");

},
create: function(){

	//this object's background = add new sprite to total game(x,y,'name of object that is sprite')
this.background = this.game.add.sprite(0,0, 'background');




},
update: function(){

}

};
game.state.add('playing', GameState);

game.state.start('playing');
