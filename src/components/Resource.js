var game,
Resource = function(config){
  config = config || {};
  var errors=[];

  for(var i in this.requiredConfig){
    if( typeof config[this.requiredConfig[i]] == 'undefined' || config[this.requiredConfig[i]] == '' )
      errors.push('Required config: '+ this.requiredConfig[i]);
  }

  if(errors.length > 0){
    console.error(errors.join(', ') );
    return false
  }

  for (var i in this.members){
    if(typeof config[this.members[i]] != 'undefined')
      this[this.members[i]] = config[this.members[i]];
    }
}

Resource.prototype = {
    currentTime : 0,
    members: [ 'currentTime','resource','materials']
}

export default Resource;
