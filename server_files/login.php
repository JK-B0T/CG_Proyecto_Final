<?php
    include "db_connection.php";

    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $clientEmail = $_POST["email"];
        $clientPassword = $_POST["password"];

        $sql = "SELECT * FROM users WHERE email = '$clientEmail'";
        $result = $connection->query($sql);

        if($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if ($clientPassword === $row["password"]) {
                session_start();

                $_SESSION["username"] = $row["name"];
                $_SESSION["userid"] = $row["user_id"];
                $_SESSION["money"] = $row["money"];
                header("Location: ../pages/main_page.html");
            } else {
                echo "Invalid password";
            }
        } else {
            echo "User not found";
        }

        $result->free();
        $connection->close();
    }
?>