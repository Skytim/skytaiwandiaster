var all_location = new Array();
var location_center;
$(document).ready(function () {
    downloadUrl("php/map_detail.php?id=1", function (data) {
        var xml = data.responseXML;
        var markers = xml.documentElement.getElementsByTagName("marker");
        for (var i = 0; i < markers.length; i++) {
            var address = markers[i].getAttribute("address");
            var obj = { 'addr': address };
            all_location.push(obj);
        }
    });
    downloadUrl("php/map.php?id=1", function (data) {
        var xml = data.responseXML;
        var location_data = xml.documentElement.getElementsByTagName("marker");
        location_center = location_data[0].getAttribute("name");

        $('#map').tinyMap({
            zoom: 14,
            marker: all_location,
            kml:'http://fema1.swcb.gov.tw/google/QueryRefugeMap.ashx',
            center: location_center
        });
    });
    loadlocation();



    // loadlocation_detail();
});



function bindInfoWindow(marker, map, infoWindow, html) {
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
      });
    }

    function downloadUrl(url, callback) {
      var request = window.ActiveXObject ?
          new ActiveXObject('Microsoft.XMLHTTP') :
          new XMLHttpRequest;

      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          request.onreadystatechange = doNothing;
          callback(request, request.status);
        }
      };

      request.open('GET', url, true);
      request.send(null);
    }

    function doNothing() {}


     //顯示右邊欄位訊息 
    function loadlocation_detail() {
        downloadUrl("php/map_detail.php", function (data) {
            var xml = data.responseXML;
            var markers = xml.documentElement.getElementsByTagName("marker");
            for (var i = 0; i < markers.length; i++) {
                var address = markers[i].getAttribute("address");
                alert(address);
                //  $("#location_detail").append("<tr><td class='addresses' addressID=" + (i + 1) + ">" + name + "</br>" + address + "</br><a href='tel:" + tel + "'> " + tel + "</a></td></tr>")
            }
            $(".addresses").click(function () {
                var addID = $(this).attr("addressID");

                map.setZoom(14);
                map.setCenter(markers[addID].getPosition());

            });

        });
    }

    
    //顯示下面欄位訊息 
    function loadlocation() {
        downloadUrl("php/location_xml.php", function (data) {
            var xml = data.responseXML;
            var markers = xml.documentElement.getElementsByTagName("marker");
            $("#map_name").empty();

            for (var i = 0; i < markers.length; i++) {
                var name = markers[i].getAttribute("name");
                $("#map_name").append("<tr><td class='locations' locationID=" + (i + 1) + ">" + name + "</td></tr>")
            }
            //綁定點擊後 獲取點擊物件的屬性
            $(".locations").click(function () {
                var locID = $(this).attr("locationID");
                Location(locID, function () {
                    maker_point(locID);
                }, function () {
                    loadlocation();
                });
            });
        });
      }





    $('#list').on('click', 'a', function () {
    var obj = $(this),        
        id = obj.text(),
        m = {},
        marker = {},
        markers = [],
        i = 0;       
    
    // 取得 tinyMap 實例
    m = map.data('tinyMap');
    // 取得所有標記
    markers = m._markers;
        
    for (i; i < markers.length; i += 1) {
        marker = markers[i];
        // 關閉所有 infoWindow
        marker.infoWindow.close();
        console.dir(typeof marker.infoWindow.close);
        // 若標記 id 符合則開啟 infoWindow
        if (id === marker.id) {            
            marker.infoWindow.open(m.map, marker);
            // 移動地圖
            m.map.panTo(marker.position);            
        }
    }
    
});



