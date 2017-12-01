

/* Boot.js 
* First state to load
* var TheMoon is the object for the app
*	loads assets
*
*
*
*
*/



var TheMoon = TheMoon || {

};
	
 TheMoon.Boot = function(game){};

TheMoon.Boot.prototype = {



	preload:function(){

			
								console.log("boot init");
this.load.image('preloaderBar', 'assets/preloader.png');
game.load.image('homeBase','assets/tileHomeBase.jpg');


	},

	create:function(){
		
//this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
game.world.setBounds(0,0,2120,1300);

this.scale.minWidth = 1068;
this.scale.minHeight = 720;
this.scale.pageAlignHorizontally = true;
this.scale.pageAlignVertically = true;
cursors = game.input.keyboard.createCursorKeys();
this.input.maxPointers = 1;
			this.stage.disableVisibilityChange = true;
			this.state.start('Preloader');
			
	},

	update:function(){

   
		
	}



}


