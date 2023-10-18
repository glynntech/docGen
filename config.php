<?php
define('DBSERVER', 'localhost'); // database server
define('DBUSERNAME', 'root'); // database username
define('DBPASSWORD', ''); // database password
define('DBNAME', 'clientDB') // database name

/* connect to MySQL database */
$db = mysqli_connect(DBSERVER, DBUSERNAME, DBPASSWORD, DBNAME);

// check db connection
if($db === false){
    die("Error: connection error. " . mysqlo_connect_error());
}
?>