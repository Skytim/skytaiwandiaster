$(document).ready(function () {

var map = $('#map');


map.tinyMap();

// yilan button
$('#yilan').on('click', function () {
 $('#map').tinyMap('panto', '宜蘭縣');
 $('#map').tinyMap('modify',{
    zoom:11,
    kml: 'http://skytaiwandb.azurewebsites.net/mobile/kmz/yilan.kmz'
});
          
          
});
    

// taipei button
$('#water').on('click', function () {
   alert("water");
 $('#map').tinyMap('modify',{
  
    kml: 'http://fema1.swcb.gov.tw/google/Debris2011.kmz'
});
          
          
});

          

});





