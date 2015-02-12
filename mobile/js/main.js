$(document).on("gkComponentsReady", function () {

  var map = $('#map');
  var Latitude="";
  var Longitude="";
  var firstlatitude="";
  var firstlongitude="";
  function onSuccess(position) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    map.tinyMap({
      'center': {
        'x': Latitude,
        'y': Longitude
      },
      zoom: 13,
       'marker': [{
         addr:[Latitude,Longitude]
      }]
    });
  }

  
  function onError(error) {
    // onError Callback receives a PositionError object  
  }
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);


    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {
      timeout: 10000
    });
  }
  function showPosition(position) {
     firstlatitude=position.coords.latitude;
     firstlongitude=position.coords.longitude;
     refugeplacefunction(firstlatitude,firstlongitude);
}
 


 function refugeplacefunction(x,y){
  var geocodingAPI = "http://maps.google.com/maps/api/geocode/json?latlng="+x+","+y+"&language=zh-TW";
  var nowplace="";
  var mykml="";
 
      $.getJSON(geocodingAPI, function (json) {
        var i=json.results[0].address_components.length;
        while(0<i){  
          if(json.results[0].address_components[i-1].types[0]=="administrative_area_level_1"){       
               nowplace=json.results[0].address_components[i-1].long_name;

                mykml="http://skytaiwandb.azurewebsites.net/mobile/kmz/refugeplace/"+nowplace+".kmz";
                $('#map').tinyMap('panto',nowplace);
                $('#map').tinyMap('clear','kml');
                $('#map').tinyMap('modify',{
                                  zoom:11,
                                  kml: mykml
                                 });
               // break;
               }
          i--;
        }
      });
    $("#refugeplace")
    .change(function () {
      var str = "";
      var locationtext ="";
      $("#refugeplace option:selected").each(function () {
        str= $(this).text();
         $('#map').tinyMap('panto',str);
         $('#map').tinyMap('clear','kml');
         $('#map').tinyMap('clear','marker');
         $('#map').tinyMap('modify',{
          zoom:11,
          kml: "http://skytaiwandb.azurewebsites.net/mobile/kmz/refugeplace/"+str+".kmz"
         });
      });
         $('#left-menu').panel( "close" );
    })
    .change();

    $("#landslidesstreams")
    .change(function () {
      var str = "";
      var locationtext ="";
      $("#landslidesstreams option:selected").each(function () {
        str= $(this).text();
         $('#map').tinyMap('panto',str);
         $('#map').tinyMap('clear','kml');
         $('#map').tinyMap('clear','marker');
         $('#map').tinyMap('modify',{
          zoom:11,
          kml: "http://skytaiwandb.azurewebsites.net/mobile/kmz/landslidesstreams/"+str+".kmz"
         });
      });
         $('#left-menu').panel( "close" );
    })
    .change();
}


});