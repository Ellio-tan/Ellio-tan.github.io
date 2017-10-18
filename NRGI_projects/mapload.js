function initMap() { //Create map function 
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 0, lng: -0},
      zoom: 2
    });

      

    var projIcon = new google.maps.FusionTablesLayer({  //Set up layer using data from Fusion Table 
        suppressInfoWindows: false,
        query:
        {
            
            select: 'location',
            from: '18glfaTlK1oZQBL5zixCzCjVDBy2fif6bxFF9uLmx',
                     
        },
        styles: [{
            where: "'projectType' = 'oil & gas'",
            markerOptions: {
            iconName: "small_red"
            }
          }, {
            where: "'projectType' = oil & gas - grouping'",
            markerOptions: {
            iconName: "small_red"
            }
          },{
            where: "'projectType' = 'mining'",
            markerOptions:{
            iconName: "small_blue"
            }
          }, {
            where: "'projectType' = 'mining - grouping'",
            markerOptions: {
             iconName: "small_blue"
            }
          },{
            where: "'projectType' = 'coporate entity'", //For use later when corporate things get added in 
            markerOptions: {
              iconName: "small_green"
            }
          }
        ],
    }); projIcon.setMap(map); //end of layer setup


   //   map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legend'));

     // console.log(projIcon[1]);
  }


