<?php
header("Access-Control-Allow-Origin: *");
require_once('Mobile_Detect.php');

// 建立Mobile_Dectect物件
$detect = new Mobile_Detect();
  // 偵測裝置是否是Mobile
  if ($detect->isMobile())
     header("Location: mobile/index.html");
  else
     header("Location: desktop/index.html");

?>
