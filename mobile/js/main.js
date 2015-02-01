$(document).ready(function () {

var map = $('#map');

// 模擬目前位置
var current = ['25.04151536540612', '121.56354904174805'];

map.tinyMap();


// yilan button
$('#yilan').on('click', function () {

 $('#map').tinyMap('panto', 'yilan ');
 $('#map').tinyMap('modify',{
    zoom:11,
    kml: 'http://skytaiwandb.azurewebsites.net/mobile/kmz/yilan.kmz'
});
      
});
    $(".abc").click(function(){
    $(this).attr("id")

    }

      )

// keelung button
$('#keelung').on('click', function () {
  
 $('#map').tinyMap('panto', 'keelung');
 $('#map').tinyMap('modify',{
    zoom:11,
    kml: 'http://skytaiwandb.azurewebsites.net/mobile/kmz/keelung.kmz'
});
          
          
});

          

});





