const hudConfig = {
  height: 70,
  fillColor:0x111213,
  lineColor:0x111213,
  opacity: 0.9,
  fadeOpacity: 0.5,
  saveButton:{
    x:640,
    y:465,
    sprite: 'hud_buttons',
    frame:1,
    //frame:4,
    content:'Save',
    anchor:0.5
  },
  buildButton:{
    x:485,
    //x:505,
    y:465,
    sprite: 'hud_buttons',
    frame:0,
    //frame:2,
    content:'Build',
    anchor:0.5
  },
  harvestButton:{
    x:330,
    //x:505,
    y:465,
    sprite: 'hud_buttons',
    frame:3,
    //frame:2,
    content:'Harvest',
    anchor:0.5
  }
}

export default hudConfig;
