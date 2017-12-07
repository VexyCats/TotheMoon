var Actions = {
  addHover: function(button){
    var scale = {x:button.scale.x,y:button.scale.y}
    button.events.onInputOver.add(function(btn){
      btn.scale.x = scale.x*1.06,
      btn.scale.y = scale.y*1.06;
    })
    button.events.onInputOut.add(function(btn){
      btn.scale.x = scale.x,
      btn.scale.y = scale.y;
    })
  }

}

export default Actions;
