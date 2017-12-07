import hudConfig from '../config/hud.js';

import Actions from './MouseActions';

var game,
 HUD = function(cgame){
   game = cgame;
}

HUD.prototype ={
  show: function(type, msg, title,closeVersion){
    this.getBackground();

    this.background.inputEnabled = true;
    this.background.events.onInputOver.add(this.wake,this);
    this.background.events.onInputOut.add(this.dim,this);

    var hudGroup = this.fetchGroup();
    hudGroup.fixedToCamera = true;
    this.dim();
  },
  wake: function(){
    this.hudGroup.alpha = hudConfig.opacity;
  },
  dim: function(){
    this.hudGroup.alpha = hudConfig.fadeOpacity;
  },
  fetchGroup: function(){
    this.hudGroup = this.hudGroup || game.add.group()
    return this.hudGroup;
  },
  getBackground: function(){
    var group = this.fetchGroup(),
    y = game.camera.height - hudConfig.height;

    var background = game.add.graphics(0,0);
    background.beginFill(hudConfig.fillColor,1);
    background.lineStyle(2, hudConfig.lineColor, 1);
    background.drawRect(0, y, game.camera.width, hudConfig.height);
    this.background =  background;
    this.hudGroup.add(this.background);

    return this.background;
  },

}

export default HUD;
