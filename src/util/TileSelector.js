import tileSelectorConfig from '../config/tileSelector.js';

var game,
TileSelector = function(cgame){
  game = cgame;
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

    console.log(box)

    this.selector = box;
  },
  hide: function(){
    this.isShown = false;
    this.selector.kill();
  }

}



export default TileSelector;
