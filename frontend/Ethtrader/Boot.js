var TheMoon = {};

 TheMoon.Boot = function(game){};

TheMoon.Boot.prototype = {



	preload:function(){

			
								console.log("boot init");
this.load.image('preloaderBar', 'assets/preloader.png');


	},

	create:function(){
this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
this.scale.minWidth = 270;
this.scale.minHeight = 480;
this.scale.pageAlignHorizontally = true;
this.scale.pageAlignVertically = true;

this.input.maxPointers = 1;
			this.stage.disableVisibilityChange = true;
			this.state.start('Preloader');
			
	},

	update:function(){
		
	}



}


