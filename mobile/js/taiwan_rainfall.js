$(document).on("gkComponentsReady", function () {

  var map = $('#map');
  var firstlatitude="";
  var firstlongitude="";
  
  function onError(error) {
    // onError Callback receives a PositionError object  
  }
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
  
  }
  else{
     alert("error");

  }
  function showPosition(position) {
     firstlatitude=position.coords.latitude;
     firstlongitude=position.coords.longitude;
     map.tinyMap({
      'center': {
        'x': firstlatitude,
        'y': firstlongitude
      },
      zoom: 13,
       'marker': [{
         addr:[firstlatitude,firstlongitude]
      }]
    });
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

                mykml="http://data.gov.tw/iisi/logaccess?dataUrl=https://alerts.ncdr.nat.gov.tw/DownLoadNewAssistData.ashx/5&ndctype=KML&ndcnid=6161";
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
}

   

    $("#closebuttonleft").click(function() {
      $('#left-menu').panel( "close" );
    });

    $("#closebuttonright").click(function() {
      $('#right-menu').panel( "close" );
    });




});