$(document).on("pageinit","#camera_images",function(){
   // 此处是 jQuery 事件...
   
   $("#east_asia_blue_cloud").click(function(){
   		$('#camera_image').attr('src','http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=7&CCDId=2');
   		$( '#left-menu' ).panel( "close" );
   });
   $("#east_asia_infrared_imagery").click(function(){ 	
   		$("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=7&CCDId=3");
   		$( '#left-menu' ).panel( "close" );
         return false;
   });

});

