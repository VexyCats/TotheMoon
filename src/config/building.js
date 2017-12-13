const BuldingTypes = {
      wood:{
        sprite:'houses',
        frame: 4
      },
      soil:{
        sprite:'houses',
        frame: 2
      },
      water:{
        sprite:'houses',
        frame: 0
      },
      metal:{
        sprite:'houses',
        frame: 1
      },
      oxygen:{
        sprite:'houses',
        frame: 3
      }
    }

var BuildingFonts = {
  infoBox:{
    title:{font:'bold 7pt Arial',align:'center'},
    label:{font:'bold 5pt Arial',align:'left'},
    body:{font:'normal 5pt Arial',wordWrap:true,wordWrapWidth:200},
    caption:{font:'normal 3pt Arial',wordWrap:true,wordWrapWidth:200}
  }
}


export {BuldingTypes,BuildingFonts};
