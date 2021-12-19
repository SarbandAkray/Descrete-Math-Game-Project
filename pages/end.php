<?php
session_start();

$point1 =$_SESSION["level1Points"];
$point2 =$_SESSION["level2Points"];
$point3 =$_SESSION["level3Points"];
$total = $point1+$point2+$point3;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Congrats winner</title>
    <link rel="stylesheet" href="../styles/end.css">
</head>
<body>
    <img class="background" src="../images/background.jpg">
    <div class="main-box">
        <div class="box">
            <div class="totalPoints-box">
                <p> CONGRATS U GOT THE WIN!!!!</p>
                </br>
                <p>Total points  <?php echo $total ?></p> 
            </div>
            <div class="levelPoints-box">
                <p>Points you got in the first level: <?php echo $point1 ?></p> 
                <p>Points you got in the second level:  <?php echo $point2 ?></p>
                <p>Points you got in the third level:  <?php echo $point3 ?></p>
            </div>
            <div class="options">
            <button class="playagain" onclick="location.href='../index.php'">Play again</button>
            <button class="playagain" onclick="location.href='/index.php'">Exit</button>
            </div>
        </div>
    </div>
</body>
</html>