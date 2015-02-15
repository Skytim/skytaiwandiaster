
$(document).on("gkComponentsReady", function () {
            $("#cityweather")
               .change(function () {
                 var str = "";
                 var citystr ="";
                 var xhr = new XMLHttpRequest();
                 $("#cityweather option:selected").each(function () {
                    str= $(this).text();
                    if(str=="宜蘭縣"){
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-013.xml";
                    }
                    if(str=="基隆市"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-011.xml";            
                    }
                    if(str=="彰化縣"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-028.xml";            
                    }
                    if(str=="台中市"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-021.xml";            
                    }
                    if(str=="金門縣"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-014.xml";            
                    }
                    if(str=="屏東縣"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-025.xml";            
                    }
                    if(str=="嘉義縣"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-018.xml";            
                    }
                    if(str=="雲林縣"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-029.xml";            
                    }
                    if(str=="桃園市"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-022.xml";            
                    }
                    if(str=="澎湖縣"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-015.xml";            
                    }
                    if(str=="南投縣"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-026.xml";            
                    }
                    if(str=="嘉義市"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-019.xml";            
                    }
                    if(str=="花蓮縣"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-012.xml";            
                    }
                    if(str=="連江縣"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-030.xml";            
                    }
                    if(str=="新竹縣"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-023.xml";            
                    }
                    if(str=="台南市"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-016.xml";            
                    }
                    if(str=="台北市"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-009.xml";            
                    }
                    if(str=="台東縣"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-027.xml";            
                    }
                    if(str=="苗栗縣"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-020.xml";            
                    }
                    if(str=="新竹市"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-024.xml";            
                    }
                    if(str=="高雄市"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-017.xml";            
                    }
                    if(str=="新北市"){ 
                    citystr="http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-010.xml";            
                    }
                   
                        $.ajax({
                           type: "GET",
                           url: "http://skytaiwandb.azurewebsites.net/mobile/allow.php?url="+citystr,
                           dataType: "xml",
                           error: function (e) {
                           },
                           success: function (e) {
                             var i,
                             data = $(e).find('dataset'),
                             num = data.length,
                             time = data.eq(0).find('time').text();
                        $("#yesterdayweather").empty();   
                        $("#todayweather").empty(); 
                        $("#tomorrowweather").empty();   
                        $("#yesterdayweather").append(data.eq(0).find('parameter').eq(1).find('parameterValue').text());
                        $("#todayweather").append(data.eq(0).find('parameter').eq(2).find('parameterValue').text());
                        $("#tomorrowweather").append(data.eq(0).find('parameter').eq(3).find('parameterValue').text());

           }
        });

                 });       
             }).change();         

      });
    