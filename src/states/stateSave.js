

var game, cursors;

var stateSave = function(cgame){
	this.game = game = cgame;
}


stateSave.prototype = {


		preload: function(){
    },
    create: function(){
      /* Create save button in new state */
      var saveButton;
      saveButton = game.add.button(0, 0, 'saveButton', this.saveState, this);
	  	saveButton.scale.setTo(3,0.5);
      
    },
    update: function(){
    },
  /* function called when button clicked, should have the data from the player's data as input*/
    saveState: function(sprite, event){
      
    }

}

export default stateSave;
