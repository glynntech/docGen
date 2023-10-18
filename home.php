<?php

// start the session
session_start();

// check if the user is not logged in, then redirect the user to login page
if (!isset($_SESSION["userid"]) || $_SESSION["userid"] !== true) {
    header("location: login.php");
    exit;
}

?>


<!DOCTYPE html>
<html land="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/logo-placeholder.png">
        <title>Home - <?php echo $_SESSION["FIRM"]; ?></title>
        <link rel="stylesheet" href="main.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    </head>

    <body>
	<noscript>This page requires JavaScript be available and enabled to function properly</noscript>
	
	<div class="sidebar">
		<span class="logoOrientation">
			<img src="https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/logo-placeholder.png", width="120" height="120">
		</span><br></br>
		<a href="home.html">Home</a> <br></br>
		<a href="adminDocs.html">Administrative</a>
		<a href="appealDocs.html">Appeals</a>
		<a href="discoveryDocs.html">Discovery</a>
		<a href="motionDocs.html">Motions</a>
		<a href="serviceDocs.html">Service</a>
		<a href="subpoenaDocs.html">Subpoenas</a> <br></br>
		<a href="faqs.html">FAQs</a>
		<a href="contact.html">Contact</a> <br></br>
        <a href="logout.php">Logout</a>
	</div>
	
	
	
	<div class="main">
		<h1>Home</h1>
		
	</div>

</body>
</html>

