<?php
require_once './level1_getdata.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LEVEL1</title>
    <link rel="stylesheet" href="../styles/level1.css">
    <script src="../libs/crypto-js.js"></script>
    <script src="../libs/jquery.min.js"></script>
</head>
<body id="body">
<div>
    <div class="game-box">
    <img id="die" class="die hide" src="../images/die.gif">
    <img class="level_background"src="../images/level-1.JPG">
    <div class="fire"></div>
    <img id="charecter"src="../images/run.gif">
    
    </div>
    
    <div class="question-box">
            <div class="timeAndDif">
                <div class="timer-box">
                    <p> Timer: </p>
                    <p id="timer-box" class="timer"></p>
                </div>
                <div class="points-box">
                    <p> Points: </p>
                    <p class="pointes" id="points"></p>
                </div>
            </div>
        <div id="question" class="question">
            
                <!--Question 1-->
            <div id="questionDisplay" class="questionDisplay">
            <p><?php print_r($question1);?></p>
            </div>

            <div id="answers" class="answers">
               <button id="1" value="1"><?php print_r($answers1[0]);?></button> 
               <button id="2" value="2"><?php print_r($answers1[1]);?></button>
               <button id="3" value="3"><?php print_r($answers1[2]);?></button>
               <button id="4" value="4"><?php print_r($answers1[3]);?></button>
            </div>

         

            <!--Question 2-->
            <div id="questionDisplay2" class="questionDisplay2 hide">
            <p><?php print_r($question2);?></p>
            </div>
            <div id="answers2" class="answers2 hide">
               <button id="21" value="1"><?php print_r($answers2[0]);?></button> 
               <button id="22" value="2"><?php print_r($answers2[1]);?></button>
               <button id="23" value="3"><?php print_r($answers2[2]);?></button>
               <button id="24" value="4"><?php print_r($answers2[3]);?></button>
            </div>
            

            <!--Question 3-->
            <div id="questionDisplay3" class="questionDisplay3 hide">
            <p><?php print_r($question3);?></p>
            </div>
            <div id="answers3" class="answers3 hide">
               <button id="31" value="1"><?php print_r($answers3[0]);?></button> 
               <button id="32" value="2"><?php print_r($answers3[1]);?></button>
               <button id="33" value="3"><?php print_r($answers3[2]);?></button>
               <button id="34" value="4"><?php print_r($answers3[3]);?></button>
            </div>
            <p>Answer1:  (<?php echo $correctanswer1?>) </br> Answer2:  (<?php echo $correctanswer2?>) </br> Answer3:  (<?php echo $correctanswer3?>)</p>
        </div>
       
    </div>
    
   

</div>
<script>
    var correctanswer1enc = <?php echo $correctanswer1encrypt?>;
    var correctanswer2enc = <?php echo $correctanswer2encrypt?>;
    var correctanswer3enc = <?php echo $correctanswer3encrypt?>;
</script>
<script src="../scritps/level1.js"></script>
</body>
</html>
