import Resource from './Resource';
import{BuldingTypes,BuildingFonts} from '../config/building';

var Building = function(cgame,config){
  this.game = cgame;
  config = config || {};
  var errors=[];

  if(typeof cgame == 'undefined'){
    console.error('Game required');
    return false;
  }

  if(typeof BuldingTypes[config.resource.resource] == 'undefined'){
    console.error('Building type '+config.type+' does not exist');
    return false;
  }

  for(var i in this.requiredConfig){
    if( typeof config[this.requiredConfig[i]] == 'undefined' || config[this.requiredConfig[i]] == '' )
      errors.push('Required config: '+ this.requiredConfig[i]);
  }

  if(errors.length > 0){
    console.error(errors.join(', ') );
    return false
  }

  this.state = Object.assign({},this.state,config);
  this.state.resource = new Resource(config.resource);

  this.show();
}

Building.prototype = {
  state:{
    x:0,
    y:0,
    level: 1,
    maxStorage:0,
    resource: {},
    storage:0,
    materials: {
      wood:50,
      water:0
    }

  },
  requiredConfig:["x","y","resource","level","maxStorage"],
  show: function(){
    var buildingProp = BuldingTypes[this.state.resource.resource];
    var unit =  this.game.add.sprite(this.state.x,this.state.y,buildingProp.sprite);
    if(buildingProp.frameName) unit.frameName = buildingProp.frameName;
    this.instance = unit;

    this.instance.inputEnabled = true;
    //this.instance.events.onInputOver.add(this.displayInfo, this);
    this.instance.events.onInputOver.add(this.displayInfo, this);
		this.instance.events.onInputOut.add(this.hideInfo, this);
  },
  hide: function(){
    this.instance.kill();
  },
  update: function(){
    console.log (true)
  },
  displayInfo: function(a,b,c,d,e){
    this.infoGroup = this.infoGroup || this.game.add.group();

    if(!this.infoBox){
      this.infoGroup.x = this.state.x,
      this.infoGroup.y = this.state.y-25;
      var box = this.game.add.graphics(0,0);
      this.infoGroup.add(box);
      // set a fill and line style
      box.beginFill(0xFFFFFF,0.7);
      box.lineStyle(2, 0xffd900, 1);
      box.drawRoundedRect(0, 0, 125, 40, 4);
      this.infoBox = box;
    }
    else
      this.infoBox.revive();

    if(!this.infoText){
      this.infoText = this.game.add.group();
      this.infoGroup.add(this.infoText);

      var title = this.game.add.text(20,1,this.state.resource.resource,BuildingFonts.infoBox.title);
      this.infoText.add(title);
      var top = this.infoText.y+this.infoText.height;
      var label = this.game.add.text(1,top - 3,'Storage: ',BuildingFonts.infoBox.label);
      this.infoText.add(label);
    }
    else
      this.infoText.resetAll();

    console.log(this.infoGroup,this.infoText)
  },
  hideInfo: function(){
    this.infoGroup.killAll();
  }

}


export default Building;
