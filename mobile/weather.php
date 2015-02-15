<!DOCTYPE html>

<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <link href="http://jqmdesigner.appspot.com/gk/lib/jquery.mobile/1.4.5/flatui/jquery.mobile.flatui.css" rel="stylesheet" type="text/css" />
  <!-- Export CSS  -->
  <style>
    .time{
      font-size:12px;
    }
  </style>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script>
    $(document).on("mobileinit", function () {
      $.mobile.autoInitializePage = false;
      $.mobile.hashListeningEnabled = false;
    });

    function mobileInitPage() {
      $.mobile.hashListeningEnabled = true;
      $.mobile.initializePage();
    };
  </script>
  <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
  <!-- Uncomment the following to include cordova in your android project -->
  <!--<script src="http://jqmdesigner.appspot.com/platforms/android/cordova.js"></script>-->
  <!-- GK Loader use RequireJS to load module -->
  <script src="http://requirejs.org/docs/release/2.1.11/minified/require.js"></script>
  <!--Plug in GK-->
  <script src="http://jqmdesigner.appspot.com/components/jquery.gk/jquery.gk.min.js"></script>
  <!-- Load GK components -->
  <script components="http://jqmdesigner.appspot.com/components/gk-jquerymobile/content.html,http://jqmdesigner.appspot.com/components/gk-jquerymobile/page.html" callback="mobileInitPage" src="http://jqmdesigner.appspot.com/components/gk-loader/gk-loader.js"></script>

  <title>台灣即時氣象</title>
</head>
<script>
$.get("allow.php", function(data) {
    alert("yes");
    alert(data);
});
</script>
<body gk-app>
  <?php
   echo "string";
  ?>
  <!-- Page: home  -->
  <div id="home" data-role="page">
    <div data-role="header" data-position="fixed" data-theme="b">
      <h3>台灣即時氣象</h3>
      <a href="index.html" data-role="button" class="ui-btn-right" data-icon="grid">功能</a>
    </div>

    <div id="right-menu" data-role="panel" data-position="right" data-position-fixed="true" data-theme="a" data-display="overlay">
    <div class="ui-field-contain">
      <a href="index.html"><button>土石流溪流/逃難地點位置</button></a>
      <a href="satellite_images.html"><button>衛星雲圖</button></a> 
      <a href="camera_images.html"><button>觀測影像</button></a>
      <input type="button" id="closebuttonright" data-theme="b"  data-icon="delete" value="關閉側欄">
    </div>
  </div>
    <div role="main" class="ui-content">
            <p>選擇縣市</p>
      <select id="cityweather">
            <option >&#x5B9C;&#x862D;&#x7E23;</option>
            <option >&#x57FA;&#x9686;&#x5E02;</option>
            <option >&#x53F0;&#x5317;&#x5E02;</option>
            <option >&#x65B0;&#x5317;&#x5E02;</option>
            <option >&#x6843;&#x5712;&#x5E02;</option>
            <option >新竹市</option>
            <option >&#x65B0;&#x7AF9;&#x7E23;</option>
            <option >&#x82D7;&#x6817;&#x7E23;</option>
            <option >台中市</option>
            <option >&#x5F70;&#x5316;&#x7E23;</option>
            <option >&#x5357;&#x6295;&#x7E23;</option>
            <option >&#x96F2;&#x6797;&#x7E23;</option>
            <option >&#x5609;&#x7FA9;&#x7E23;</option>
            <option >嘉義市</option>
            <option >&#x53F0;&#x5357;&#x5E02;</option>
            <option >&#x9AD8;&#x96C4;&#x5E02;</option>
            <option >&#x5C4F;&#x6771;&#x7E23;</option>
            <option >&#x53F0;&#x6771;&#x7E23;</option>
            <option >&#x82B1;&#x84EE;&#x7E23;</option>
            <option >金門縣</option>
            <option >澎湖縣</option>
            <option >連江縣</option>
      </select>
      <h5 id="yesterdayweather"></h5>
      <h5 id="todayweather"></h5>
      <h5 id="tomorrowweather"></h5>
    </div>
  </div>
</body>
  <!-- Export JS  -->
 
  <script src="js/weather.js"></script>


</html>
