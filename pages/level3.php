<?php
include_once './level3_getdata.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LEVEL3</title>
    <script src="../libs/crypto-js.js"></script>
    <script src="../libs/jquery.min.js"></script>
    <script src="../libs/anime.js"></script>
<link rel="stylesheet" href="../styles/level3.css">
</head>
<body id="body">

<svg  width="1000" height="500" style="position: absolute; z-index:-10;">
    <path id="correctanswer1"  fill="none" d="M 200 0 Q 339 -187 397 -50"></path> 
    <path id="wronganswer1"  fill="none" d="M 200 0 Q 300 -160 300 120"></path> 
    <path id="correctanswer2" fill="none" d="M 500 -50 Q 590 -205 625 -10"></path>  
    <path id="correctanswer2jump2" fill="none" d="M 750 -50 Q 858 -162 940 -75"></path>
    <path id="wronganswer2" fill="none" d="M 500 -50 Q 604 -91 574 120"></path>  
    <path id="correctanswer3" fill="none" d="M 1060 -80 Q 1145 -184 1244 -117"></path>  
    <path id="wronganswer3" fill="none" d="M 1060 -80 Q 1183 -119 1150 120"></path>  
    <path id="jumpoff" fill="none" d="M 1320 -117 Q 1412 -213 1479 0"></path>  
</svg>
    
<div>
    <div class="game-box">
    
    
    
    <img id="die" class="die hide" src="../images/die.gif">
    <img class="level_background"src="../images/level-3.jpg">
   
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
            <div id="questionDisplay" class="questionDisplay hide">
            <p><?php print_r($question1);?></p>
            </div>

            <div id="answers" class="answers hide">
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


<script src="../scritps/level3.js"></script>
</body>
</html>