$(document).ready(function () {

var map = $('#map');


map.tinyMap();

// taipei button
$('#taipei').on('click', function () {
   
 $('#map').tinyMap('modify',{
  
    kml: 'http://fema1.swcb.gov.tw/google/QueryRefugeMap.ashx'
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





