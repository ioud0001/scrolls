<?php
// Please run this file on a PHP server 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
/*
$name = $_POST["name"];
$rank = $_POST["rank"];
$rating = $_POST["rating"];

echo json_encode($name . $rank . $rating); 
*/

   $data = $_POST['json'];

   if (json_decode($data) != null) { /* sanity check */
     $file = fopen('js/results.json','w+');
     fwrite($file, $data);
     fclose($file);
   } else {
    print "There was an error processing your request.";  
   }
?>