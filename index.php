<?php
require_once('Mobile_Detect.php');
// 建立Mobile_Dectect物件
$detect = new Mobile_Detect();
  // 偵測裝置是否是Mobile
  if ($detect->isMobile())
     header("Location: index123.html");
  else
     header("Location: desktop/index.html");

?>
