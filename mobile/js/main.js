$(document).ready(function () {

var map = $('#map'),
    m = {};

map.tinyMap();

// taipei button
$('#taipei').on('click', function () {
    alert("taipei");
 $('#map').tinyMap('modify',{
    kml: 'http://fema1.swcb.gov.tw/google/QueryRefugeMap.ashx'
});
          
          
});
          
          

});





