function initMap() { //Create map function 
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 45.5088400, lng: -73.5878100},
      zoom: 12
    });

      

    var weeklyIcon = new google.maps.FusionTablesLayer({  //Set up layer using data from Fusion Table 
        suppressInfoWindows:false,
        query:
        {
            
            select: 'Location',
            from: '1TXhPdo6TXv6z9gFYQemCuudcXqn9_bjKOLBz15aH',
                     
        },
        styles: [{
           where: "'Tournament Type' = 'Weekly'",
            markerOptions: {
            iconName: "large_red"
            }
          }, {
           where: "'Tournament Type' = 'Major'",
            markerOptions: {
            iconName: "large_green"
            }
          },
        ],
    }); weeklyIcon.setMap(map);



   /* var monthlyIcon = new google.maps.FusionTablesLayer({  //Set up layer using data from Fusion Table 
        suppressInfoWindows:false,
        query:
        {
             select: 'Tournament Type',
            from: '1TXhPdo6TXv6z9gFYQemCuudcXqn9_bjKOLBz15aH',
            where: 'Tournament Type = Major'
        },
        styles: [{
         markerOptions: {
            iconName: "large_green"
            }
        }],
    }); monthlyIcon.setMap(map);


  var cur_pos = new google.maps.Marker({
        title: "You are here!",
        map: map
         });


    var infoWindow = new google.maps.InfoWindow({map: map}); // Create geolocater 
    // Try HTML5 geolocation.
   /* if (navigator.geolocation) {

             var geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });

      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        cur_pos.setPosition(pos); 
        map.setZoom(12.5);
        map.setCenter(pos);
        
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
       
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }*/
  }

/*

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                      'Error: The Geolocation service failed.' :
                      'Error: Your browser doesn\'t support geolocation.');
}

//var location = prompt("Please enter your location"); 

//$(function () {
var geocoder; 
function initMap() { //Create map function 
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -0, lng: 0},
      zoom: 12
    });

      

    var fsTable = new google.maps.FusionTablesLayer({  //Setup fusion table 
        suppressInfoWindows:false,
        query:
        {
            from: '1TXhPdo6TXv6z9gFYQemCuudcXqn9_bjKOLBz15aH',
            select: 'Location'
        },
        styles: [{
         markerOptions: {
            iconName: "large_green"
            }
        }],
    }); fsTable.setMap(map);


  var cur_pos = new google.maps.Marker({ //Create marker 
        title: "You are here!",
        map: map
         });


    var infoWindow = new google.maps.InfoWindow({map: map}); // Create geolocater 
    // Try HTML5 geolocation.
    if (navigator.geolocation) {

             var geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });

      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        cur_pos.setPosition(pos); 
        map.setZoom(12.5);
        map.setCenter(pos);
        
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
       
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                      'Error: The Geolocation service failed.' :
                      'Error: Your browser doesn\'t support geolocation.');
}

*/