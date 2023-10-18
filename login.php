<?php

require_once "config.php";
require_once "session.php";

$error = '';
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {

    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    // validate if email is empty
    if (empty($email)) {
        $error .= '<p class="error">Please enter email.</p>';
    }

    // validate if password is empty
    if (empty($password)) {
        $error .= '<p class="error">Please enter password.</p>';
    }

    if (empty($error)) {
        if ($query = $db->prepare("SELECT * FROM USER_INFO WHERE EMAIL = ?")) {
            $query->blind_param('s', $email);
            $query->execute();
            $row = $query->fetch();
            if ($row) {
                if (password_verify($password, $row['password'])) {
                    $_SESSION["user_id"] = $row['USERNAME'];
                    $_SESSION["user"] = $row;

                    // redirect user to home page
                    header("location: home.php");
                    exit
                } else {
                    $error .= '<p class="error">The username or password is not correct.</p>';
                }
            } else {
                $error .= '<p class="error">The username or password is not correct.</p>';
            }
        }
        $query->close();
    }
    // close connection
    mysqli_close($db);
}

?>



<!DOCTYPE html>
<html land="en">
    
    <head>
        <meta charset="UTF-8">
        <title>Login</title>
        <link rel="stylesheet" href="main.css">
    </head>

    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Login</h2>
                    <p>Please enter your email and password.</p>
                    <form action="" method="post">
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" name="password" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <input type="submit" name="submit" class="btn btn-primary" value="Submit">
                        </div>
                        <p>Don't have an account, or having trouble logging in? <a href="contact.php">Get in touch</a>.</p>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>

