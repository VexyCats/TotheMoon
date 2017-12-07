

/* Boot.js
* First state to load
* var TheMoon is the object for the app
*	loads assets
*
*
*
*
*/

	var game,
	Boot = function(cgame){
		this.game = game = cgame;
	};

	Boot.prototype = {



				preload:function(){


/* load fonts */
 //game.load.bitmapFont('xyz', 'assets/fonts/zyx.png', 'assets/fonts/zyx.xml');

											console.log("boot init");
			game.load.image('preloaderBar', 'assets/preloader.png');
			game.load.image('homebase','assets/tileHomeBase.jpg');
			game.load.image('homeBaseMenu', 'assets/homeBaseMenu.png');

				/* Resources */

				game.load.image('sand', 'assets/sand.png');
				game.load.image('lunarsoil', 'assets/lunar_soil.jpg');
				//game.load.image('sand', 'assets/sand.png');
				//game.load.image('sand', 'assets/sand.png');
			//	game.load.image('sand', 'assets/sand.png');
			//	game.load.image('sand', 'assets/sand.png');
			//	game.load.image('sand', 'assets/sand.png');
			//	game.load.image('sand', 'assets/sand.png');

			//game.load.spr('close_icon', 'assets/close_icon.png');
			game.load.spritesheet('close_icons', 'assets/close_icons.png', 93, 124);

				},

				create:function(){

			//this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			game.world.setBounds(0,0,2120,1300);

			this.scale.minWidth = 1068;
			this.scale.minHeight = 720;
			this.scale.pageAlignHorizontally = true;
			this.scale.pageAlignVertically = true;
			game._cursors = game.input.keyboard.createCursorKeys();//TODO Find a better location to store
			this.input.maxPointers = 1;
						this.stage.disableVisibilityChange = true;
						//this.state.start('Preloader');
						this.state.start('Playing');

				},

				update:function(){

				}

	}

	export default Boot;
