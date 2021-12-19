<?php
include_once './level2_getdata.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LEVEL2</title>
    <link rel="stylesheet" href="../styles/level2.css">
    <script src="../libs/crypto-js.js"></script>
    <script src="../libs/jquery.min.js"></script>
    <script src="../libs/anime.js"></script>
</head>
<body id="body">

<svg  width="1000" height="500" style="position: absolute; z-index:-10;">
    <path id="correctanswer1"  fill="none" d="M 250 0 Q 364 -202 498 0"></path> 
    <path id="wronganswer1"  fill="none" d="M 250 0 Q 364 -202 361 120"></path> 
    <path id="correctanswer2" fill="none" d="M 600 0 Q 796 -205 850 -80"></path>  
    <path id="wronganswer2" fill="none" d="M 600 0 Q 746 -147 782 120"></path>  
    <path id="correctanswer3" fill="none" d="M 960 -80 Q 1045 -184 1144 -117"></path>  
    <path id="wronganswer3" fill="none" d="M960-80Q1018-184 1050-119V120"></path>  
    <path id="jumpoff" fill="none" d="M 1280 -117 Q 1372 -213 1439 0"></path>  
</svg>
    
<div>
    <div class="game-box">
    
    
    
    <img id="die" class="die hide" src="../images/die.gif">
    <img class="level_background"src="../images/level-2jpg.jpg">
   
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

<script src="../scritps/level2.js"></script>
</body>
</html>