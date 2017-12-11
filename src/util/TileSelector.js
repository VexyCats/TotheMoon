import tileSelectorConfig from '../config/tileSelector.js';

var game,
TileSelector = function(cgame){
  game = cgame;
  this.show();
  this.hide();
}

TileSelector.prototype = {
  show: function(){
    this.isShown = true;
    if(this.selector)
      return this.selector.revive();

    var box = game.add.graphics(15,15);
    box.beginFill(tileSelectorConfig.color.fill,tileSelectorConfig.opacity.fill);
    box.lineStyle(tileSelectorConfig.width.line, tileSelectorConfig.color.line, tileSelectorConfig.opacity.line);
    box.drawRect(0, 0, tileSelectorConfig.width.box, tileSelectorConfig.height.box);
    box.inputEnabled = true;
    box.events.onInputDown.add(this.hide,this);
    //game.physics.enable(box, Phaser.Physics.ARCADE);
    //game.input.activePointer.move.add(this.update,this);
    game.input.addMoveCallback(this.update,this);

    this.selector = box;
  },
  hide: function(){
    this.isShown = false;
    this.selector.kill();
  },
  update:function(a,b,c){
      const that = this;
      game.add.tween(this.selector).to({
        x:b+game.camera.x-(this.selector.width/2),
        y:c+game.camera.y-(this.selector.height/2)
      }, 20, "Linear", true);
  }

}



export default TileSelector;
