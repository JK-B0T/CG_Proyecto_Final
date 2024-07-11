<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbName = "user_database";

$connection = new mysqli($servername, $username, $password, $dbName);

if ($connection->connect_error) {
    echo("connection failed".$connection->connect_error);
}
?>