import Boot from './states/Boot';
import MainMenu from './states/MainMenu';
import Preloader from './states/Preloader';
import Playing from './states/Playing';
import Market from './states/Market';

var TheMoon = {
	Boot:Boot,
	Preloader:Preloader,
	MainMenu:MainMenu,
	Playing:Playing,
	Market:Market,
};


var game = new Phaser.Game(720,500, Phaser.CANVAS);
game.global = {

score: 0
	};


game.state.add('Boot', new TheMoon.Boot(game) );
game.state.add('Preloader', new TheMoon.Preloader(game) );
game.state.add('MainMenu', new TheMoon.MainMenu(game) );
game.state.add('Playing', new TheMoon.Playing(game) );
//game.state.add('playingConfig', TheMoon.playingConfig);
console.log("first");
//console.log(game);
game.state.start('Boot');


//game.state.add('playing', GameState);

//game.state.start('playing');
