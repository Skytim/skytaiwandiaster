$(document).ready(function () {

var map = $('#map');


map.tinyMap();

// yilan button
$('#yilan').on('click', function () {
  alert("yilan");
 $('#map').tinyMap('modify',{
  
    kml: '/mobile/kmz/yilan.kmz'
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





