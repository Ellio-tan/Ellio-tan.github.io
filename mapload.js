
//var location = prompt("Please enter your location"); 

//$(function () {
function initMap() { //Create map function 
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
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


  var cur_pos = new google.maps.Marker({
        title: "You are here!",
        map: map
         });

    var infoWindow = new google.maps.InfoWindow({map: map}); // Create geolocater 
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        cur_pos.setPosition(pos); 
        map.setZoom(12);
        map.setCenter(pos);
        

     /*  $(document).ready(function() 
            {
                var queryUrlHead = 'https://www.googleapis.com/fusiontables/v2/query?sql=';
                 var queryUrlTail = '1TXhPdo6TXv6z9gFYQemCuudcXqn9_bjKOLBz15aH&key=AIzaSyArARaaB5dBdXPdgBnbb363itYB1YSqyoU';                
            });*/


      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
       
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }

}




function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                      'Error: The Geolocation service failed.' :
                      'Error: Your browser doesn\'t support geolocation.');
}



//next add in locations from fusion table