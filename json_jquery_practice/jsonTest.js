//var url = "http://opendata.toronto.ca/transportation/tmc/rescucameraimages/Data/tmcearthcameras.json"

var jqxhr = $.get( "https://opendata.toronto.ca/transportation/tmc/rescucameraimages/Data/tmcearthcameras.json", function() {
  alert( "success" );
})
  .done(function() {
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
  });