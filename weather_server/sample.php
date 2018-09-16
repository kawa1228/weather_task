<?php
use GuzzleHttp\Client;

header('Access-Control-Allow-Origin: *');

$uri = 'http://weather.livedoor.com/forecast/webservice/json/v1?city='.$_GET['city_id'];

$content = file_get_contents($uri);

echo $content;
