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
    if(this.selector){
      game.world.bringToTop(this.selector);
      return this.selector.revive();
    }

    var box = game.add.graphics(15,15);

    box.inputEnabled = true;
    box.events.onInputDown.add(this.hide,this);
    //game.physics.enable(box, Phaser.Physics.ARCADE);
    //game.input.activePointer.move.add(this.update,this);
    game.input.addMoveCallback(this.update,this);

    this.selector = box;
    this.drawSelector();
  },
  hide: function(){
    this.isShown = false;
    this.selector.kill();
  },
  drawSelector: function(lineColor,fillColor){
    this.selector.beginFill(fillColor || tileSelectorConfig.color.fill,tileSelectorConfig.opacity.fill);
    this.selector.lineStyle(tileSelectorConfig.width.line,lineColor || tileSelectorConfig.color.line, tileSelectorConfig.opacity.line);
    this.selector.drawRect(0, 0, tileSelectorConfig.width.box, tileSelectorConfig.height.box);
  },
  stateChanged: function(error){
    this.overlapping = error;
    let lineColor = error?tileSelectorConfig.color.errorLine : tileSelectorConfig.color.line;
    let fillColor = error?tileSelectorConfig.color.errorFill : tileSelectorConfig.color.fill;
    this.selector.clear();
    this.drawSelector(lineColor,fillColor);
  },
  update:function(a,b,c){
      if(!this.isShown)
        return;
      const that = this;
      game.add.tween(this.selector).to({
        x:b+game.camera.x-(this.selector.width/2),
        y:c+game.camera.y-(this.selector.height/2)
      }, 20, "Linear", true);
  }

}



export default TileSelector;
