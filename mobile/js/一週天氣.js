$(document).on("pageinit","#satellite_images",function(){
  alert("yo");
   // 此处是 jQuery 事件...
   $("#east_asia_blue_cloud").click(function(){
   		
   		$('#cloud_image').attr('src','http://fema.swcb.gov.tw/wap/Handler/GetSatImage.ashx?imagetype=0');
   		return false;
   });
    $("#east_asia_infrared_imagery").click(function(){
   	
   		$("#cloud_image").attr('src',"http://fema.swcb.gov.tw/wap/Handler/GetSatImage.ashx?imagetype=1");
   		return false;
   });
     $("#taiwan_blue_cloud").click(function(){
   		
   		$("#cloud_image").attr('src',"http://fema.swcb.gov.tw/wap/Handler/GetSatImage.ashx?imagetype=2");
   		return false;
   });
      $("#taiwan_infrared_imagery").click(function(){
   		
   		$("#cloud_image").attr('src',"http://fema.swcb.gov.tw/wap/Handler/GetSatImage.ashx?imagetype=3");
   		return false;
   });
      $("#radar_echo_image").click(function(){
   		
   		$("#cloud_image").attr('src',"http://fema.swcb.gov.tw/wap/Handler/GetSatImage.ashx?imagetype=4");
   		return false;
   });

       $("#closebuttonleft").click(function() {
         $('#left-menu').panel( "close" );
   });

       $("#closebuttonright").click(function() {
         $('#right-menu').panel( "close" );
   });

  $("#dvContent").append("<ul></ul>");

  $.ajax({
    type: "GET",
    url: "http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-009.xml",
    dataType: "xml",
    success: function(xml){
    $(xml).find('parameter').each(function(){
      var sTitle = $(this).find('Title').text();
      var sPublisher = $(this).find('Publisher').text();
      $("<li></li>").html(sTitle + ", " + sPublisher).appendTo("#dvContent ul");
    });
  },
  error: function() {
    alert("An error occurred while processing XML file.");
  }
  });



});

