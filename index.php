<?php
session_start();
$_SESSION = [];
session_unset();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The discrete jungle parkour</title>
    <!-- page style-->
    <link rel="stylesheet" href="./styles/index.css">
    
</head>
<body id="body">
<div class="alert" hidden>
  <p class="buttons">
    <button value="0">Block</button>
    <button value="1">Allow</button>
  </p>
  <button id="btn"></button>
</div>
    <div id="PlayBox"class="PlayBox">
        <div class="box">
            <p class="Title">
                Discrete Math Project 
            </p>
            <p class="Detail">
                By: Sarband Saywan, Zhyar Farhad And Muhammad Karkhi
            </p>
        <button id="enable">Play</button>
        </div>
    </div>
    <section> 
        <div id="background" class="background">
           
            <div id="border" class="border">
                
                <div id="welcome"class="welcomeBox">
                <p>wellcome to discrete parkour</p>
                </div>
                <div id="letsplay"class="letsplay">
                <p id="text">Help me win the game, Let's play together</p>
                </div>
            <img  id="character"src="./images/idle.gif">
            </div>
            <button class="start" id="start">START</button>
         </div>
    </section>
    <script src="../libs/anime.js"></script>
    <script src="./scritps/index.js"></script>
</body>




</html>