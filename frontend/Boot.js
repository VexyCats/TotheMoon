var TheMoon = {};

 TheMoon.Boot = function(game){};

TheMoon.Boot.prototype = {



	preload:function(){

			
								console.log("boot init");
this.load.image('preloaderBar', 'assets/preloader.png');


	},

	create:function(){
		
//this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
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


