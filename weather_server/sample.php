<?php

// 東京130010、神奈川140010

header('Access-Control-Allow-Origin: *');
$content = file_get_contents('http://weather.livedoor.com/forecast/webservice/json/v1?city=130010');

echo $content;
