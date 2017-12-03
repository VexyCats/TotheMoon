var game,
Resource = function(cgame,config){
  this.game = cgame;
  config = config || {};
  var errors=[];

  if(typeof cgame == 'undefined'){
    console.error('Game required');
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
}

Resource.prototype = {
    currentTime : 0,
}

export default Resource;
