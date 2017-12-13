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
    //this.background.events.onInputOver.add(this.wake,this);
    //this.background.events.onInputOut.add(this.dim,this);

    this.getButton('saveButton');
    this.saveButton.inputEnabled = true;
    Actions.addHover(this.saveButton);
    Actions.addClicked(this.saveButton);

    this.getButton('buildButton');
    this.buildButton.inputEnabled = true;
    Actions.addHover(this.buildButton);
    Actions.addClicked(this.buildButton);

    this.getButton('harvestButton');
    this.harvestButton.inputEnabled = true;
    Actions.addHover(this.harvestButton);
    Actions.addClicked(this.harvestButton);


    var hudGroup = this.fetchGroup();
    hudGroup.fixedToCamera = true;
    hudGroup.onChildInputOver.add(this.wake,this);
    hudGroup.onChildInputOut.add(this.dim,this);

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

    if(this.background)
      return this.background;

    var background = game.add.graphics(0,0);
    background.beginFill(hudConfig.fillColor,1);
    background.lineStyle(2, hudConfig.lineColor, 1);
    background.drawRect(0, y, game.camera.width, hudConfig.height);
    this.background =  background;
    this.hudGroup.add(this.background);

    return this.background;
  },
  getButton: function(type){
    var group = this.fetchGroup(),
    buttonConfig = hudConfig[type];

    if(this[type])
      return this[type];

    var button = game.add.sprite(0,0,hudConfig[type].sprite,hudConfig[type].frame);
    this[type] = button;
    this.hudGroup.add(button);
    this[type].x = hudConfig[type].x,
    this[type].y = hudConfig[type].y;
    this[type].scale.x = 0.8,
    this[type].scale.y = 0.8;
    this[type].anchor.x = 0.5;
    this[type].anchor.y = 0.5;


    return this[type];
  }

}

export default HUD;
