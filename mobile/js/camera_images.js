$(document).on("pageinit","#camera_imagehome",function(){
   // 此处是 jQuery 事件...
   //大粗坑
   //下游攝影機

   $("#large_cukeng1").click(function(){
   		$('#camera_image').attr('src','http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=7&CCDId=2');
   		$( '#left-menu' ).panel( "close" );
   });
   //上游全景式攝影機
   $("#large_cukeng2").click(function(){ 	
   		$("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=7&CCDId=3");
   		$( '#left-menu' ).panel( "close" );
         return false;
   });
   //蘇樂
   //下游高倍數攝影機
    $("#lsuyue1").click(function(){
         $('#camera_image').attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=15&CCDId=1");
         $( '#left-menu' ).panel( "close" );
   });
    //全景式攝影機
   $("#lsuyue2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=15&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
   //上游高倍數攝影機
    $("#lsuyue3").click(function(){
         $('#camera_image').attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=15&CCDId=3");
         $( '#left-menu' ).panel( "close" );
   });
    //玉峰
    //全景式攝影機
   $("#yufeng1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=16&CCDId=1");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
   //高倍數攝影機
    $("#yufeng2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=16&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
    //下田埔
    //全景式攝影機
    $("#shimodapo1").click(function(){
         $('#camera_image').attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=17&CCDId=1");
         $( '#left-menu' ).panel( "close" );
   });
    //下游高倍數攝影機
   $("#shimodapo2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=17&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
   //上游高倍數攝影機
    $("#shimodapo3").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=17&CCDId=3");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
    //白布帆
    //全景式攝影機
    $("#Whitesails1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=1&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
    //松鶴
    //下游攝影機
       $("#Songhe1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=13&CCDId=1");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
   //上游全景式攝影機
      $("#Songhe2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=13&CCDId=3");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
     //上安
     //全景式攝影機
       $("#Songhe1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=4&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
   //郡坑
   //上游攝影機
      $("#countypit1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=5&CCDId=1");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
   //下游攝影機
      $("#countypit2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=5&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });

      //神木
      //霍薩溪攝影機
      $("#shenmu1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=3&CCDId=1");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
     
     //愛玉子溪下游攝影機
       $("#shenmu2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=3&CCDId=3");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
     //出水溪上游攝影機
      $("#shenmu3").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=3&CCDId=4");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
   //愛玉子溪上游攝影機
      $("#shenmu4").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=3&CCDId=5");
         $( '#left-menu' ).panel( "close" );
         return false;
   });

    
     
     //豐丘
    //下游攝影機
       $("#qiufeng1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=6&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
     //上游全景式攝影機
      $("#qiufeng2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=6&CCDId=4");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
     //九份二山
     //中游攝影機
      $("#ninetwomountain1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=2&CCDId=1");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
         //上游攝影機
      $("#ninetwomountain2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=2&CCDId=3");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
         //下游全景式攝影機
      $("#ninetwomountain3").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=2&CCDId=6");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
         //南豐
         //中游前段攝影機
      $("#nanfung1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=24&CCDId=1");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
      
         //中游後段攝影機
      $("#nanfung2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=24&CCDId=1");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
       
         //下游攝影機
      $("#nanfung3").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=24&CCDId=1");
         $( '#left-menu' ).panel( "close" );
         return false;
   });

         //華山
         //下游攝影機1
      $("#nanfung1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=10&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
      
         //上游攝影機
      $("#nanfung2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=10&CCDId=3");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
       
         //全景式攝影機
      $("#nanfung3").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=10&CCDId=4");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
       //坪頂
       //入口處攝影機
      $("topfloor1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=14&CCDId=4");
         $( '#left-menu' ).panel( "close" );
         return false;
   });


         //豐山
         //上游攝影機
      $("#fengshan1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=12&CCDId=1");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
      
         //野溪攝影機
      $("#fengshan2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=12&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
       
         //下游攝影機
      $("#fengshan3").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=12&CCDId=3");
         $( '#left-menu' ).panel( "close" );
         return false;
   });


         //羌黃坑
         //上游攝影機
      $("#huangqiangpit1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=18&CCDId=1");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
      
         //野溪攝影機
      $("#huangqiangpit2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=18&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
       
         //下游攝影機
      $("#huangqiangpit3").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=18&CCDId=3");
         $( '#left-menu' ).panel( "close" );
         return false;
   });



         //集來
         //上游攝影機
      $("#setto1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=19&CCDId=1");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
      
         //中游攝影機
      $("#setto2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=19&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
       
         //下游攝影機
      $("#setto3").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=19&CCDId=3");
         $( '#left-menu' ).panel( "close" );
         return false;
   });

       //來義
       //匯流口攝影機
      $("#tojustice1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=20&CCDId=1");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
      
         //主流攝影機
      $("#tojustice2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=20&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
       
         //潛勢溪流攝影機
      $("#tojustice3").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=20&CCDId=3");
         $( '#left-menu' ).panel( "close" );
         return false;
   });

       //和中
       //攝影機1
      $("#andthe1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=25&CCDId=1");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
       
       //攝影機2
      $("#andthe2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=25&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });

      //大興
      //下游攝影機
      $("#daxing1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=11&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
       
       //上游全景式攝影機
      $("#daxing2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=11&CCDId=3");
         $( '#left-menu' ).panel( "close" );
         return false;
   });



      //鳳義坑
      //下游攝影機
      $("#fengyihang").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=8&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });

      //射馬干
      //上游攝影機
      $("#dryshoothorses1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=9&CCDId=1");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
       
       //上游全景式攝影機
      $("#dryshoothorses2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=9&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });

      //大鳥
      //崩塌地攝影機
      $("#bird1").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=21&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });

      
      //中游攝影機
      $("#bird2").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=21&CCDId=2");
         $( '#left-menu' ).panel( "close" );
         return false;
   });

      //沉砂池攝影機
      $("#bird3").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=21&CCDId=3");
         $( '#left-menu' ).panel( "close" );
         return false;
   });
       
       //下游攝影機
      $("#bird4").click(function(){    
         $("#camera_image").attr('src',"http://dfm.swcb.gov.tw/DebrisFinal/ShowCCDImg-FB.asp?StationID=21&CCDId=4");
         $( '#left-menu' ).panel( "close" );
         return false;
   });



});

