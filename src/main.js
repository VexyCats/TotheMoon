import Boot from './states/Boot';
import GameState from './states/GameState';
import MainMenu from './states/MainMenu';
import Market from './states/Market';
import Preloader from './states/Preloader';

var TheMoon = {
	Boot:Boot,
	Preloader:Preloader,
	MainMenu:MainMenu,
	GameState:GameState,
	Market:Market,
};


var game = new Phaser.Game(720,500, Phaser.CANVAS);
game.global = {

score: 0
	};


game.state.add('Boot',  TheMoon.Boot(game) );
game.state.add('Preloader', TheMoon.Preloader(game) );
game.state.add('MainMenu',  TheMoon.MainMenu(game) );
game.state.add('GameState',  TheMoon.GameState(game) );
//game.state.add('playingConfig', TheMoon.playingConfig);
console.log("first");
console.log(game);
game.state.start('Boot');


//game.state.add('playing', GameState);

//game.state.start('playing');
