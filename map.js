
//SVG Icons http://raphaeljs.com/icons/
var probe_icon = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z"

var map = AmCharts.makeChart( "map_div", {
	type: "map",
  "theme": "light",

  dataProvider: {
  	map: "worldLow",
  	//linkToObject: "Source_41.223.156.170", 
    //Link to determines zoomLevel on map initiate
  	images: [ 
  	
    {
      id:"Source_41.223.156.170",
      title:"IP_41.223.156.170",
      latitude: -8.419200, 
      longitude: 20.744699,
      type: "bubble",
      scale: 1.0,
      zoomLevel: 5.00,

       lines: [ {
          //latitude [sourceLat, destLat ]
          //longitude [sourceLong, destLong ]
          latitudes: [ -8.419200, 0.329179 ],
          longitudes: [ 20.744699, 32.570989 ]
        }, {
          latitudes: [ -8.419200, 0.339179],
          longitudes: [ 20.744699, 33.570989 ]
        } ],

    }, 

    {
  		id:"Probe_15357",
  		title: "Probe_15357",
  		latitude: 0.329179, 
  		longitude: 32.570989, 
  		svgPath: probe_icon, 
  		color: "#3dd200",
  		scale: 1.0,
  		zoomLevel: 5.00,


  	},                    

  	{
 		id:"Probe_14900",
  		title: "Probe_14900",
  		latitude: 0.339179, 
  		longitude: 33.570989, 
  		svgPath: probe_icon, 
  		color: "#3dd304",
  		scale: 1.0,
  		zoomLevel: 5.00,
 	},//End probe_14900


    {
    id:"Probe_13218",
      title: "Probe_13218",
      latitude: -1.280702, 
      longitude: 36.816352, 
      svgPath: probe_icon, 
      color: "#3dd410",
      scale: 1.0,
      zoomLevel: 5.00,
  },//End probe
  
  {
    id:"Probe_13114",
      title: "Probe_13114",
      latitude: -1.235795, 
      longitude: 37.868172, 
      svgPath: probe_icon, 
      color: "#3dd500",
      scale: 1.0,
      zoomLevel: 5.00,
  },//End probe

  {
   id:"Probe_19592",
      title: "Probe_19592",
      latitude: -18.942708, 
      longitude: 47.528323, 
      svgPath: probe_icon, 
      color: "#3dd600",
      scale: 1.0,
      zoomLevel: 5.00,
  },//End probe

  {
   id:"Probe_14712",
      title: "Probe_14712",
      latitude: -17.942708, 
      longitude: 48.528323, 
      svgPath: probe_icon, 
      color: "#3dd700",
      scale: 1.0,
      zoomLevel: 5.00,
  },//End probe

  {
   id:"Probe_4061",
      title: "Probe_4061",
      latitude: 15.609327, 
      longitude: 32.541700, 
      svgPath: probe_icon, 
      color: "#3dd800",
      scale: 1.0,
      zoomLevel: 5.00,
  },//End probe

  {
   id:"Probe_4518",
      title: "Probe_4518",
      latitude: -33.295427, 
      longitude: 26.521345
, 
      svgPath: probe_icon, 
      color: "#3dd900",
      scale: 1.0,
      zoomLevel: 5.00,
  },//End probe

  {
   id:"Probe_18169",
      title: "Probe_18169",
      latitude: -33.313596 , 
      longitude: 27.516308, 
      svgPath: probe_icon, 
      color: "#3dd110",
      scale: 1.0,
      zoomLevel: 5.00,
  }//End probe




  	], //End image
 	
 	


  },// End dataProvider


  //Settings for Map Objects
  areasSettings: {
    unlistedAreasColor: "#DDDDDD"
  },

  imagesSettings: {
    
    rollOverColor: "#CC0000",
    selectedColor: "#2DBDFC"
  },

  linesSettings: {
    color: "#000000",
    thickness: 1.5,
    rollOverColor: "#CC0000",
  },

  /*"legend": {
            "backgroundColor": "#fff",
            "backgroundAlpha": 0.7,
            "align": "center",
        "data": [{
            title: "One",
            color: "#3366CC"
        }, {
            title: "Two",
            color: "#FFCC33"
        }]
} */ //End Legend

} );

//chart.addLegend(legend, "legenddiv");
