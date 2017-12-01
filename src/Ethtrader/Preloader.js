
TheMoon.Preloader = function(game){

	this.preloaderBar = null;
	this.ready = false;

};

TheMoon.Preloader.prototype = {
	preload:function(){

	
			this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');

			this.preloadBar.anchor.setTo(0.5,0.5);
			this.load.setPreloadSprite(this.preloadBar);
			this.time.advancedTiming = true;
			this.load.setPreloadSprite(this.preloadBar);

			//load game assets


	},

	create:function(){
		this.preloadBar.cropEnabled = false;



	},

	update: function(){
		this.ready = true;
		if(TheMoon.Preloader.ready = true){
				this.state.start('MainMenu');
			}
	}
};





	


