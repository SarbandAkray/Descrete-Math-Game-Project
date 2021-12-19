var player=document.getElementById("charecter");
var points = 0;
document.getElementById("points").innerText= points;
//sound effects 
var footstep = new Audio("../sounds/footsteps.wav");
var rightanswer = new Audio('../sounds/rightAnswer.mp3');
footstep.volume = 0.4;

//timer setting
document.getElementById('timer-box').innerHTML = 05 + ":" + 00;
var cancelled = false;

//questions  && answers
var question1 = document.getElementById("questionDisplay");
var answers1 = document.getElementById("answers");
var question2 = document.getElementById("questionDisplay2");
var answers2 = document.getElementById("answers2");
var question3 = document.getElementById("questionDisplay3");
var answers3 = document.getElementById("answers3");

//getting  correct answers 
function CryptoJSAesDecrypt(passphrase, encrypted_json_string) {

 var obj_json = JSON.parse(encrypted_json_string);

 var encrypted = obj_json.ciphertext;
 var salt = CryptoJS.enc.Hex.parse(obj_json.salt);
 var iv = CryptoJS.enc.Hex.parse(obj_json.iv);

 var key = CryptoJS.PBKDF2(passphrase, salt, {
    hasher: CryptoJS.algo.SHA512,
    keySize: 64 / 8,
    iterations: 999
 });

 var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv
 });

 return decrypted.toString(CryptoJS.enc.Utf8);
}

var _0xf34d=["\x44\x6F\x6E\x74\x54\x72\x79"];var key=_0xf34d[0];

var correctanswer1Dec= CryptoJSAesDecrypt(key, JSON.stringify(correctanswer1enc));
var correctanswer2Dec=CryptoJSAesDecrypt(key, JSON.stringify(correctanswer2enc));
var correctanswer3Dec=CryptoJSAesDecrypt(key, JSON.stringify(correctanswer3enc));

//player voice
var level3 = new Audio('../playervoice/level3.wav');
var level3end = new Audio('../playervoice/level3end.wav');
level3.play();
//getting the player inside the game

anime({
   targets: player,
   translateX: [
       { value: 200, duration: 1500, delay: 500,easing:'linear'},
     ],
   loop:false,
   begin:function(){
     footstep.play();
   },
   complete: function(){
     footstep.pause();
     player.src = "../images/idle.gif";  
     displayQuesion1();  
   }
 });

 
//timer
function startTimer() {
  if (cancelled) {
    return;
  } 
  var presentTime = document.getElementById('timer-box').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    location.href = "./lost.php";
    return;
  }
  if (m==2&&s==30) {
    lesspoints.play();
  }
  if(m==1&&s==1){
    oneminute.play();
  }
  document.getElementById('timer-box').innerHTML = m + ":" + s;
  setTimeout(startTimer, 1000);
  
}
 
 function checkSecond(sec) {
   if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
   if (sec < 0) {sec = "59"};
   return sec;
 }
   
//1st question
function displayQuesion1(){
 question1.classList.remove("hide");
 answers1.classList.remove('hide');
 startTimer();
}
// 1st question answer
var answer1 = document.getElementById("1");
var answer2 = document.getElementById("2");
var answer3 = document.getElementById("3");
var answer4 = document.getElementById("4");

answer1.onclick = ()=>{checkanswer1('1')};
answer2.onclick = ()=>{checkanswer1('2')};
answer3.onclick = ()=>{checkanswer1('3')};
answer4.onclick = ()=>{checkanswer1('4')};

// checking answer of first quesion
 function checkanswer1(answer){
   //hiding question one & stopping timer
   cancelled = true;
   question1.classList.add("hide");
   answers1.classList.add("hide");
   
   if(answer==correctanswer1Dec){
     
    if(m>2){
     points=points+20;
    }else{
     points=points+10;
    }  
    document.getElementById("points").innerText= points;
     rightanswer.play();
     firstjump();
   }else{
     firstjumpfail();
   }


  }

function firstjump(){
 player.src = "../images/midAir.gif"; 
 var mypath = anime.path('#correctanswer1');
anime({
 targets: player,
 translateX:mypath('x'),
 translateY:mypath('y'),
 rotate: 0,
 easing: 'linear',
 duration: 1700,
 loop: false,
 complete: function(){
   player.src="../images/idle.gif";
   displayQuesion2();
 }
}); 
}


function firstjumpfail(){
 player.src = "../images/midAir.gif"; 
 var mypath = anime.path('#wronganswer1');
anime({
 targets: player,
 translateX:mypath('x'),
 translateY:mypath('y'),
 rotate: 0,
 easing: 'linear',
 duration: 1700,
 loop: false,
 complete: function(){
   player.classList.add("hide");
   location.href="./lost.php";
 }
}); 

}

//2nd question
function displayQuesion2(){
 //seting timer back to 5 minutes
 document.getElementById('timer-box').innerHTML = 05 + ":" + 00;
 cancelled = false;
 startTimer();
 question2.classList.remove("hide");
 answers2.classList.remove('hide');
 
}

// 2nd question answer
var answer21 = document.getElementById("21");
var answer22 = document.getElementById("22");
var answer23 = document.getElementById("23");
var answer24 = document.getElementById("24");

answer21.onclick = ()=>{checkanswer2('1')};
answer22.onclick = ()=>{checkanswer2('2')};
answer23.onclick = ()=>{checkanswer2('3')};
answer24.onclick = ()=>{checkanswer2('4')};

function checkanswer2(answer){
 //hiding the second question and answers
 question2.classList.add("hide");
 answers2.classList.add("hide");
 //stoping timer and getting the points
 cancelled= true;
 if(answer==correctanswer2Dec){
     if (m>2) {
       points=points+20;
     }else{
       points=points+10;
     }
     document.getElementById("points").innerText= points;
     rightanswer.play();
     gotoedge(1);
 }else{
   gotoedge(0);
 }
}

function gotoedge(answer){
   player.src="../images/run.gif";
   anime({
     targets: player,
     translateX:500,
     duration:1000,
     easing: 'linear',
     loop: false,
     begin: ()=>{
       footstep.play();
     },
     complete: ()=>{
       footstep.pause();
       player.src="../images/idle.gif";
       setTimeout(()=>{
         if (answer==1) {
           secondjump();
         }else{
           secondjumpfail();
         }
       },300);
     }
   });
}

function secondjump(){
 var mypath2 = anime.path("#correctanswer2");
 player.src="../images/midAir.gif";
 anime({ 
   targets:player,
   translateX: mypath2("x"),
   translateY: mypath2("y"),
   rotate:0,
   duration: 1700,
   easing: "linear",
   loop: false,
   complete:()=>{
     readyfornextjump();  
   }
 });
}
function readyfornextjump(){
  player.src="../images/run.gif";
 anime({
   targets: player,
   translateX:750,
   duration:1200,
   easing: 'linear',
   loop: false,
   begin: ()=>{
     footstep.play();
   },
   complete: ()=>{
     footstep.pause();
     nextjump();
   }
 });
}

function nextjump(){
  var mypath22 = anime.path("#correctanswer2jump2");
 player.src="../images/midAir.gif";
 anime({ 
   targets:player,
   translateX: mypath22("x"),
   translateY: mypath22("y"),
   rotate:0,
   duration: 1500,
   easing: "linear",
   loop: false,
   complete:()=>{
    player.src="../images/idle.gif";
    displayQuesion3();
   }
 });
}
function secondjumpfail(){
 var mypath2 = anime.path("#wronganswer2");
 player.src="../images/midAir.gif";
 anime({ 
   targets:player,
   translateX: mypath2("x"),
   translateY: mypath2("y"),
   rotate:0,
   duration: 1700,
   easing: "linear",
   loop: false,
   complete:()=>{
     player.classList.add("hide");
     location.href="./lost.php";
   }
 });
}


//question 3
function displayQuesion3(){
 //showing answer 3
question3.classList.remove("hide");
answers3.classList.remove("hide");
//reconfiguring timer
document.getElementById('timer-box').innerHTML = 05 + ":" + 00;
 cancelled = false;
 startTimer();
}

// 3rd question answer
var answer31 = document.getElementById("31");
var answer32 = document.getElementById("32");
var answer33 = document.getElementById("33");
var answer34 = document.getElementById("34");

answer31.onclick = ()=>{checkanswer3('1')};
answer32.onclick = ()=>{checkanswer3('2')};
answer33.onclick = ()=>{checkanswer3('3')};
answer34.onclick = ()=>{checkanswer3('4')};

function checkanswer3(answer){
 question3.classList.add("hide");
 answers3.classList.add("hide"); 
 cancelled=true;
 if(answer== correctanswer3Dec){
   if(m>2){
     points=points+20;
   }else{
     points=points+10;
   }
   document.getElementById("points").innerText= points;
   rightanswer.play();
   gotoedge2(1);
 }else{
   gotoedge2(0);
 }


}
function gotoedge2(answer){
 player.src="../images/run.gif";
 anime({
   targets: player,
   translateX:1060,
   duration:1000,
   easing: 'linear',
   loop: false,
   begin: ()=>{
     footstep.play();
   },
   complete: ()=>{
     footstep.pause();
     player.src="../images/idle.gif";
     setTimeout(()=>{
       if (answer==1) {
         thirdjump();
       }else{
         thirdjumpfail();
       }
     },300);
   }
 });
}


function thirdjump(){
 var mypath3 = anime.path("#correctanswer3");
 player.src="../images/midAir.gif"; 
 anime({ 
   targets:player,
   translateX: mypath3("x"),
   translateY: mypath3("y"),
   rotate:0,
   duration: 1200,
   easing: "linear",
   loop: false,
   complete:()=>{
     player.src="../images/idle.gif";
     gotoedge3();
   }
 });
}
function thirdjumpfail(){
 var mypath3 = anime.path("#wronganswer3");
 player.src="../images/midAir.gif";
 anime({ 
   targets:player,
   translateX: mypath3("x"),
   translateY: mypath3("y"),
   rotate:0,
   duration: 1500,
   easing: "linear",
   loop: false,
   complete:()=>{
     player.classList.add("hide");
     location.href="./lost.php";
   }
 });
}
function gotoedge3(){
 player.src="../images/run.gif";
 anime({
   targets: player,
   translateX:1320,
   duration:1000,
   easing: 'linear',
   loop: false,
   begin: ()=>{
     footstep.play();
   },
   complete: ()=>{
     footstep.pause();
     player.src="../images/idle.gif";
     setTimeout(()=>{
       jumpof();
     },300);
   }
 });
}

function jumpof(){
 var mypath4 = anime.path("#jumpoff");
 player.src="../images/midAir.gif";
 anime({ 
   targets:player,
   translateX: mypath4("x"),
   translateY: mypath4("y"),
   rotate:0,
   duration: 1500,
   easing: "linear",
   loop: false,
   complete:()=>{
     level3end.play();
     goingoutofscreen();
   }
 });
}

function goingoutofscreen(){
 player.src="../images/run.gif";
 anime({
   targets: player,
   translateX:1600,
   duration:1000,
   easing: 'linear',
   loop: false,
   begin: ()=>{
     footstep.play();
   },
   complete: ()=>{
     footstep.pause();
     loadingthirdlevel();
   }
 });
}


function loadingthirdlevel(){
  $.ajax({

    url     : "../pages/userspoints.php",
    method  : "POST",
 
        data: { 
          //key :   value 
          "level3-points" :  points 
    
        }
    })
 
    .fail(function() { return false; })
   // Appel OK
    .done(function(data) {
    console.log("success");
    });
 document.getElementById("body").innerHTML = '<div class="center"><p id="points" class="points"></p><p class="levelTwo"> LEVEL 3 ( Relations )</p><img src="../images/loading.gif"><p class="loading">Loading</p></div>';                  
 document.getElementById("points").innerText= "YOUR POINTS: "+points;
 setTimeout(function(){
  location.href = "./end.php";
 },2000);
}