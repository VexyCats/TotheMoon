
var buildingMenuConfig = {
	x:150,
  y:50,
  height:350,
  width: 400,
  menuList: [
    'Wood',
    'Water',
    'Soil',
    'Metal',
    'Oxygen'
  ],
  background:{
    fillColor:'#333333',
    lineColor: '#cccccc'
  },
  content:{
    title: 'Choose Building type'
  },
  styles:{
    title:{font:'bold 14pt Arial',align:'center',fill:'#ffffff'},
    options:{font:'bold 18pt Arial',align:'center',fill:'#ffffff'},
  },
  positions:{
    title:{x:250 ,y:90},
    options:[
      {x:230,y:150},
      {x:395,y:150},
      {x:230,y:210},
      {x:395,y:210},
      {x:300,y:270},
    ]
  }

}

export  default buildingMenuConfig;
