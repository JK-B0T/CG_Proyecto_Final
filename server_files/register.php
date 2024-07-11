<?php
    include "db_connection.php";

    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $clientUsername = $_POST["username"];
        $clientPassword = $_POST["password"];
        $clientPasswordCheck = $_POST["passwordCheck"];
        $clientEmail = $_POST["email"];
        $clientMoney = 0;

        $sql = "SELECT * FROM users WHERE email = '$email'";
        $result = $connection->query($sql);

        if($result->num_rows > 0) {
            echo "Email already registered";
        } else if ($clientPasswordCheck == $clientPassword) {
            $sql = "INSERT INTO users (name, email, password, money) VALUES ('$clientUsername', '$clientEmail', '$clientPassword', '$clientMoney')";
            
            if($connection->query($sql) === TRUE) {
                header("Location: ../index.html");
            } else {
                echo "Failed to connect:". $connection->error;
            }
        }

        $result->free();
        $connection->close();
    }
?>