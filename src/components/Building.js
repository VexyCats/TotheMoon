import Resource from '../components/Resource';

var Building = function(cgame,config){
  this.game = cgame;
  config = config || {};
  var errors=[];

  if(typeof cgame == 'undefined'){
    console.error('Game required');
    return false;
  }

  if(typeof this.types[config.resource] == 'undefined'){
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

  config.type = config.resource;
  this.state = Object.assign({},this.state,config);
  this.resource = new Resource(config.resource);
  this.show();
}

Building.prototype = {
  state:{
    x:0,
    y:0,
    type: '',//Frame to use in building sprites
    level: 1,
    maxStorage:0,
    resource: {},
    storage:0,
    materials: {
      wood:50,
      water:0
    }

  },
  types:{
    wood:{
      sprite:'house'
    },
    soil:{},
    water:{},
    sand:{
      sprite:'house'
    }
  },
  requiredConfig:["x","y","resource","level","maxStorage"],
  show: function(){
    var buildingProp = this.types[this.state.type];
    var unit =  this.game.add.sprite(this.state.x,this.state.y,buildingProp.sprite);
    if(buildingProp.frameName) unit.frameName = buildingProp.frameName;
    this.instance = unit;
  },
  hide: function(){
    this.instance.kill();
  },



}


export default Building;
