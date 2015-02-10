
$(document).on("mobileinit", function () {     
	$.mobile.autoInitializePage = false;     
	$.mobile.hashListeningEnabled = false;   
});   
function mobileInitPage() {    
$.mobile.hashListeningEnabled = true;     
$.mobile.initializePage();   
   $("#east_asia_blue_cloud").click(function(){
   	
   		$("#bg").attr('src',"img/picture1.jpg");
   		return false;
   });
    $("#east_asia_infrared_imagery").click(function(){
   		alert("east");
   		$("#bg").attr('src',"img/picture1.jpg");
   		return false;
   });
     $("#taiwan_blue_cloud").click(function(){
   		alert("east");
   		$("#bg").attr('src',"img/picture1.jpg");
   		return false;
   });
      $("#taiwan_infrared_imagery").click(function(){
   		alert("east");
   		$("#bg").attr('src',"img/picture1.jpg");
   		return false;
   });
      $("#radar_echo_image").click(function(){
   		alert("east");
   		$("#bg").attr('src',"img/picture1.jpg");
   		return false;
   });
}
