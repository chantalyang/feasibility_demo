
//SVG Icons http://raphaeljs.com/icons/
var source_icon = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z"

//container - id of a DIV or DIV object which holds the chart - config contains the whole setup for the chart
var map = AmCharts.makeChart( "map_div", {
	type: "map",
  "theme": "light",

//dataProvider for the map. It's an object which may contain an array of images, areas or lines
  dataProvider: {
  	map: "worldLow",
  	//linkToObject: "Source_41.223.156.170", 
    //^ Determines default zoom on mapInitiatte
  	images: [ 

  	//Plot ip
    {
      id:"Source_41.223.156.170",
      title:"IP_41.223.156.170",
      latitude: -8.4192, //Angola
      longitude: 20.744699,
      svgPath: source_icon,
      color: "#2DBDFC",
      scale: 1.0,
      zoomLevel: 3.00,


       lines: [ {
          latitudes: [ -8.419200, 15.5881 ], //latitude [sourceLat, destLat ]
          longitudes: [ 20.744699, 32.5342 ], //longitude [sourceLong, destLong ]
          title: "link 1",
          arrow:"end",
          arrowSize:7,
      
        }, 

        {
          title: "link 2",
          latitudes: [ 15.5881 , 15.0 ],
          longitudes: [ 32.5342, 30.0 ]
        } ,

        {
          title: "link 3",
          latitudes: [ 15.0 , 25.0 ],
          longitudes: [ 30.0 , 45.0]
        } ,

        {
          title: "link 4",
          latitudes: [ 25.0  , 15.609327 ],
          longitudes: [ 45.0 , 32.541700]
        } ,  


          ],
        //Plot hops 

    }, 

    {
      id:"Source_41.221.254.22",
      title:"IP_41.221.254.22",
      latitude: -12.5, //Angola
      longitude: 18.5,
      svgPath: source_icon,
      color: "#2DBDFC",
      scale: 1.0,
      zoomLevel: 5.00,

       lines: [ {
          //latitude [sourceLat, destLat ]
          //longitude [sourceLong, destLong ]
          latitudes: [ -12.5, 0.329179 ],
          longitudes: [ 18.500000, 32.570989 ]
        }, {
          latitudes: [ -12.500000, 0.339179],
          longitudes: [ 18.500000, 33.570989 ]
        } ], 

    },

    {
      id:"Source_168.167.8.1",
      title:"IP_168.167.8.1",
      latitude: -24.646400, //Botswana
      longitude: 25.911900,
      svgPath: source_icon,
      color: "#2DBDFC",
      scale: 1.0,
      zoomLevel: 5.00,

       lines: [ {
          //latitude [sourceLat, destLat ]
          //longitude [sourceLong, destLong ]
          latitudes: [ -24.646400, 0.329179 ],
          longitudes: [ 25.911900, 32.570989 ]
        }, {
          latitudes: [ -24.646400, 0.339179],
          longitudes: [ 25.911900, 33.570989 ]
        } ],
 
    },

    {
      id:"Source_168.167.220.2",
      title:"IP_168.167.220.2",
      latitude: -24.946400, //Botswana
      longitude: 25.111900,
      svgPath: source_icon,
      color: "#2DBDFC",
      scale: 1.0,
      zoomLevel: 5.00,

       lines: [ {
          //latitude [sourceLat, destLat ]
          //longitude [sourceLong, destLong ]
          latitudes: [ -24.946400, 0.329179 ],
          longitudes: [ 25.111900, 32.570989 ]
        }, {
          latitudes: [ -24.946400, 0.339179],
          longitudes: [ 25.111900, 33.570989 ]
        } ],

    },

     {
      id:"Source_41.242.128.134",
      title:"IP_41.242.128.134",
      color: "#2DBDFC",
      latitude: 0, //Congo 
      longitude: 25.000000,
      svgPath: source_icon,
      scale: 1.0,
      zoomLevel: 5.00,

       lines: [ {
          //latitude [sourceLat, destLat ]
          //longitude [sourceLong, destLong ]
          latitudes: [ 0, 0.329179 ],
          longitudes: [ 25.000000, 32.570989 ]
        }, {
          latitudes: [ 0, 0.339179],
          longitudes: [ 25.000000, 33.570989 ]
        } ],

    },

     

//Plot probes
    {
  		id:"Probe_15357",
  		title: "Probe_15357",
  		latitude: 0.329179, 
  		longitude: 32.570989, 
  		type: "circle", 
  		color: "#3dd200",
  		scale: 1.0,
  		zoomLevel: 5.00,


  	},                    

  	{
 		id:"Probe_14900",
  		title: "Probe_14900",
  		latitude: 0.339179, 
  		longitude: 33.570989, 
  		type: "circle", 
  		color: "#3dd304",
  		scale: 1.0,
  		zoomLevel: 5.00,
 	},//End probe_14900


    {
    id:"Probe_13218",
      title: "Probe_13218",
      latitude: -1.280702, 
      longitude: 36.816352, 
      type: "circle", 
      color: "#3dd410",
      scale: 1.0,
      zoomLevel: 5.00,
  },//End probe
  
  {
    id:"Probe_13114",
      title: "Probe_13114",
      latitude: -1.235795, 
      longitude: 37.868172, 
      type: "circle", 
      color: "#3dd500",
      scale: 1.0,
      zoomLevel: 5.00,
  },//End probe

  {
   id:"Probe_19592",
      title: "Probe_19592",
      latitude: -18.942708, 
      longitude: 47.528323, 
     type: "circle", 
      color: "#3dd600",
      scale: 1.0,
      zoomLevel: 5.00,
  },//End probe

  {
   id:"Probe_14712",
      title: "Probe_14712",
      latitude: -17.942708, 
      longitude: 48.528323, 
     type: "circle", 
      color: "#3dd700",
      scale: 1.0,
      zoomLevel: 5.00,
  },//End probe

  {
   groupId:"ASN37197 - Sudanese Research and Education Network",
   id:"Probe_4061",
      title: "Probe_4061",
      latitude: 15.609327, 
      longitude: 32.541700,
      //description: "ASN:37197", 
      type: "circle", 
      color: "#3dd800",
      scale: 1.0,
      zoomLevel: 5.00,
  },//End probe

  {
   id:"Probe_4518",
      title: "Probe_4518",
      latitude: -33.295427, 
      longitude: 26.521345, 
      type: "circle", 
      color: "#3dd900",
      scale: 1.0,
      zoomLevel: 5.00,
  },//End probe

  {
   id:"Probe_18169",
      title: "Probe_18169",
      latitude: -33.313596 , 
      longitude: 27.516308, 
      type: "circle", 
      color: "#3dd110",
      scale: 1.0,
      zoomLevel: 5.00,
  },//End probe


  //Angola 41.223.156.170 hops

    {
      id:"Hop_1",
      title: "Hop_1: ",
      //label:"Hop_1",
      latitude: 15.5881, 
      longitude: 32.5342, 
      type: "circle", 
      color: "#0000ff",
      scale: 0.5,
      zoomLevel: 5.00,


    },

    {
      id:"Hop_2, 3, 4, 5",
      title: "Hop_2, 3, 4, 5",
      latitude: 15.0, 
      longitude: 30.0, 
      type: "circle", 
      color: "#0000ff",
      scale: 0.5,
      zoomLevel: 5.00,


    },  

    {
      id:"Hop_6",
      title: "Hop_6",
      latitude: 25.0, 
      longitude: 45.0, 
      type: "circle", 
      color: "#0000ff",
      scale: 0.5,
      zoomLevel: 5.00,


    },

    {
      id:"Hop_7",
      title: "Hop_7",
      latitude: 42.8333, 
      longitude: 12.8333, 
      type: "circle", 
      color: "#0000ff",
      scale: 0.5,
      zoomLevel: 5.00,


    },      


  	], //End image
 	
 	


  },// End dataProvider


  //Settings for Map Objects
  areasSettings: {
    unlistedAreasColor: "#DDDDDD",
    rollOverOutlineColor: "#DDDDDD"
  },

  imagesSettings: {
    
    rollOverColor: "#CC0000",
    selectedColor: "#CC0000"
  },

  linesSettings: {
    color: "#000000",
    thickness: 2.0,
    rollOverColor: "#CC0000",
  },

  legend: {
    width: 240,
    marginRight:27,
        marginLeft:27,
        equalWidths:true,
        maxColumns: 1,
    backgroundAlpha: 0.5,
    backgroundColor: "#FFFFFF",
    borderColor: "#ffffff",
    borderAlpha: 1,
    right: 0,
    horizontalGap: 10,
        switchable: true,
    data: [{
      title: "Probes",
      color: "#3dd900",
      svgPath:source_icon,
            groupId: "before2004"
    }, {
      title: "Source IP Address",
      color: "#2DBDFC",
            groupId: "2004"
    }, {
      title: "Hop IPs",
      color: "#0000ff",
            groupId: "2007"
    }]
  }

 /* "legend": {
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
} End Legend */

} ); //End makeChart function

map.hiddenLegendItems = {};
map.addListener('init', function () {
    map.legend.switchable = true;
    map.legend.addListener('clickMarker', AmCharts.myHandleLegendClick);
    map.legend.addListener('clickLabel', AmCharts.myHandleLegendClick);
});

AmCharts.myHandleLegendClick = function (event) {
    var groupId = event.dataItem.groupId;
    if (undefined !== event.dataItem.hidden && event.dataItem.hidden) {
        event.dataItem.hidden = false;
        map.showGroup(groupId);
    }
    else {
        event.dataItem.hidden = true;
        map.hideGroup(groupId);
    }
    map.legend.validateNow();
}

//map.addLegend(legend, "legenddiv");
