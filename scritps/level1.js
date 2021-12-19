var audio = new Audio("../sounds/fire.wav");
var rightanswer = new Audio('../sounds/rightAnswer.mp3');
var firstlevel = new Audio('../playervoice/level1.wav');
var nicejump = new Audio('../playervoice/nicejump.wav');
var nicejump2 = new Audio('../playervoice/nicejump2.wav');
var level1end = new Audio('../playervoice/level1end.wav');
var lesspoints= new Audio('../playervoice/lesspoints.wav');
var oneminute = new Audio('../playervoice/oneminute.wav');
firstlevel.play();
audio.volume = 0.02;
setInterval(function(){audio.play();},1000);
var character = document.getElementById("charecter");
var x = 0;
var y = 135;
var playerpoints =0;
var m;
var cancelled = false;
var points = 0;
var pointsdisplay= document.getElementById("points");
pointsdisplay.innerText = points+"";
var death1=document.getElementById("die");
//getting answers 
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


var movingIntoFrame = setInterval(function(){character.style.marginLeft=x+"px";x++;},10);

setTimeout(function(){
    clearInterval(movingIntoFrame);
    character.src="../images/idle.gif";
    gameStart();

},1500);

function gameStart(){
    document.getElementById('timer-box').innerHTML = 05 + ":" + 00;
    startTimer();
}




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

//question 

var answer1 = document.getElementById("1");
var answer2 = document.getElementById("2");
var answer3 = document.getElementById("3");
var answer4 = document.getElementById("4");

answer1.onclick = function(){checkanswer(1);};
answer2.onclick = function(){checkanswer(2);};
answer3.onclick = function(){checkanswer(3);};
answer4.onclick = function(){checkanswer(4);};


function checkanswer(answer){
  cancelled= true;
  document.getElementById("questionDisplay").innerHTML="";
  document.getElementById("answers").innerHTML="";
  if(answer==correctanswer1Dec){
    rightanswer.play();
      var minute = m;
      if(minute<2){
        points=points+10;
      }else{
        points=points+20;
      } 
      pointsdisplay.innerText = points+"";

      rightanswergotten();
      
        
  }else{
    character.src="../images/run.gif";
    var runOF = setInterval(()=>{
      if(x<230){
        character.style.marginLeft=x+"px";
      x++;
      }else{
        character.src="../images/midAir.gif";
        if(y<280){
          character.style.marginTop=y+"px";
          y++;
        }else{
          character.classList.add("hide");
          death1.classList.remove("hide");
          setTimeout(()=>{
            location.href = "./lost.php";
          },200);
        }
        

      }
    },10);

    
  }
}


function rightanswergotten(){
  character.src ="../images/jump.png";
  var counter =0;
  var answeright = setInterval(
    function(){
      if(counter == 55){
        character.src ="../images/midAir.gif";
      }
      if(x<220)
      character.style.marginLeft=x+"px";
      x++;
      if(y>50){
        character.style.marginTop=y+"px";
        y--;
      }else{
        clearInterval(answeright);
        var firstplatform = setInterval(() => {
          if(y<175){
          character.style.marginTop=y+"px";
          y++;}else{
            character.src="../images/idle.gif";
            tosecondplatform();
            clearInterval(firstplatform);
          }
          if(x<300){
          character.style.marginLeft=x+"px";
          x++;
          }
 
        }, 10);
      }
      counter++;
    },10);
    
   
}
  
function tosecondplatform(){
  var run =0;
  character.src="../images/run.gif";
  var step1= setInterval(()=>{

    if(x<375){
      character.style.marginLeft=x+"px";
      x++;
    }else{
      character.src="../images/midAir.gif";
      if(y>50){
        character.style.marginTop=y+"px";
        y--;
      }else{
        var got2nd =setInterval(() => {
          if(y<100){
            character.style.marginTop=y+"px";
            y++;}else{
              if(run==0){
              character.src="../images/run.gif";
              }
              run++;
              if(x<650){
                character.style.marginLeft=x+"px";
              x++;
              }else{
                character.src="../images/idle.gif";
                getsecondquestion();
                clearInterval(got2nd);
              }

            }
        },10);
        clearInterval(step1);
      }
      if(x<500){
        character.style.marginLeft=x+"px";
      x++;
      }
      
    }
  
  },10);
}

//second question

function getsecondquestion(){
  document.getElementById("questionDisplay").classList.add("hide");
  document.getElementById("answers").classList.add("hide");
  document.getElementById("questionDisplay2").classList.remove("hide");
  document.getElementById("answers2").classList.remove("hide");
  document.getElementById('timer-box').innerHTML = 05 + ":" + 00;
  cancelled=false;
  startTimer();
}

var answer21 =document.getElementById("21");
var answer22 =document.getElementById("22");
var answer23 =document.getElementById("23");
var answer24 =document.getElementById("24");


answer21.onclick = ()=>{checkanswer2(1)};
answer22.onclick = ()=>{checkanswer2(2)};
answer23.onclick = ()=>{checkanswer2(3)};
answer24.onclick = ()=>{checkanswer2(4)};

function checkanswer2(answer){
  document.getElementById("questionDisplay2").classList.add("hide");
  document.getElementById("answers2").classList.add("hide");
  cancelled= true;
  if(answer==correctanswer2Dec){
    rightanswer.play();
    nicejump.play();
    var minute = m;
      if(minute<2){
        points=points+10;
      }else{
        points=points+20;
      } 
      pointsdisplay.innerText = points+"";
      rightanswergotten2();
  }else{
    character.src="../images/run.gif";
     setInterval(()=>{
      if(x<700){
        character.style.marginLeft=x+"px";
      x++;
      }else{
        character.src="../images/midAir.gif";
        if(y<280){
          character.style.marginTop=y+"px";
          y++;
        }else{
          character.classList.add("hide");
          death1.classList.remove("hide");
          death1.style.marginLeft="650px";
          setTimeout(()=>{
            location.href = "./lost.php";
          },200);
        }
        

      }
    },10);
  }
}

function rightanswergotten2(){
  character.src = "../images/midAir.gif";
  var jump2= setInterval(()=>{
    if(x<750){
      character.style.marginLeft=x+"px";
      x++;
    }else{
      clearInterval(jump2);
      character.src="../images/idle.gif";
      setTimeout(()=>{
        highjump();
        
      },300);
    }
    setTimeout(()=>{if(y<200){
      character.style.marginTop=y+"px";
      y++;
    }},200);
    
  },10);
}

function highjump(){
  character.src= "../images/run.gif";
  var moveclose= setInterval(()=>{
    if(x<825){
      character.style.marginLeft=x+"px";
      x++;
    }else{
      clearInterval(moveclose);
      character.src= "../images/midAir.gif";
      var highjump1= setInterval(()=>{
        if(y>100){
          character.style.marginTop=y+"px";
          y--;
        }else{
          clearInterval(highjump1);
          character.src = "../images/ledgeGrab.gif";
          setTimeout(()=>{
            
            var getontheplatform = setInterval(()=>{
              if(y>30){
                character.scr = "../images/midAir.gif";
                character.style.marginTop=y+"px";
                y--;
              }else{
                character.style.marginLeft=x+40+"px";
                character.src = "../images/idle.gif";
                document.getElementById("questionDisplay2").classList.add("hide");
                document.getElementById("answers2").classList.add("hide");
                document.getElementById("questionDisplay3").classList.remove("hide");
                document.getElementById("answers3").classList.remove("hide");  
                clearInterval(getontheplatform);
                document.getElementById("timer-box").innerHTML = "05"+":"+"00";
                cancelled=false;
                startTimer();
              }
            },10);
          },200);
        }
    
      },10);
    }
  },10);
  
}


//question 3

var answer31 = document.getElementById("31");
var answer32 = document.getElementById("32");
var answer33 = document.getElementById("33");
var answer34 = document.getElementById("34");

answer31.onclick = ()=>{checkanswer3(1)};
answer32.onclick = ()=>{checkanswer3(2)};
answer33.onclick = ()=>{checkanswer3(3)};
answer34.onclick = ()=>{checkanswer3(4)};

function checkanswer3(answer){
  document.getElementById("questionDisplay3").classList.add("hide");
  document.getElementById("answers3").classList.add("hide");
      if(answer==correctanswer3Dec){
        rightanswer.play();
        nicejump2.play();
        var minute = m;
        if(minute<2){
          points=points+10;
        }else{  
          points=points+20;
        } 
        pointsdisplay.innerText = points+"";

        rightanswergotten3();
      }else{
        character.src="../images/run.gif";
        var jumpof=setInterval(()=>{
            if(x<1000){
              character.style.marginLeft=x+"px";
              x++;
            }else{
              clearInterval(jumpof);
              character.src="../images/midAir.gif";
              var secondplat =setInterval(()=>{
                if(y<180){
                  
                  character.style.marginTop = y+"px";
                  y++;
                }else{
                  clearInterval(secondplat);
                  character.src ="../images/run.gif";
                  var offplat =setInterval(()=>{
                    if(x<1100){
                      character.style.marginLeft=x+"px";
                      x++;
                    }else{
                      clearInterval(offplat);
                      character.src ="../images/midAir.gif";
                       var die2 =setInterval(()=>{
                        if(y<250){
                          character.style.marginTop = y+"px";
                          y++;
                        }else{
                          clearInterval(die2);
                          character.classList.add("hide");
                          death1.classList.remove("hide");
                          death1.style.marginLeft=x+"px";
                          setTimeout(()=>{
                            location.href = "./lost.php";
                          },200);
                          
                        }

                      },10);
                      
                    }
                  },10);
                }
              },10);
              
            } 
        },10);
      }
  
}
function rightanswergotten3(){
 character.src="../images/run.gif";
var jumpof=setInterval(()=>{
    if(x<975){
      character.style.marginLeft=x+"px";
      x++;
    }else{
      clearInterval(jumpof);
      character.src="../images/midAir.gif";
      var secondplat =setInterval(()=>{
        if(y<180){
          
          character.style.marginTop = y+"px";
          y++;
        }else{
          clearInterval(secondplat);
          character.src ="../images/run.gif";
          var toedge = setInterval(()=>{
            if(x<1050){
              character.style.marginLeft=x+"px";
              x++;
            }else{
              clearInterval(toedge);
              character.src ="../images/midair.gif";
              var gottolastplat =setInterval(()=>{
                if(x<1100){
                  character.style.marginLeft=x+"px";
                  x++;
                }
                if(y>80){
                  character.style.marginTop=y+"px";
                  y--;
                }else{
                  clearInterval(gottolastplat);
                  character.src ="../images/ledgeGrab.gif";
                  var onlastplat =setInterval(()=>{
                    if(y>40){
                      character.style.marginTop=y+"px";
                      y--;
                    }else{
                      clearInterval(onlastplat);
                      character.src ="../images/run.gif";
                      var edgeoflastplat =setInterval(()=>{
                        if(x<1200){
                          character.style.marginLeft=x+"px";
                           x++;
                        }else{
                          clearInterval(edgeoflastplat);
                          character.src ="../images/idle.gif";
                          level1end.play();
                          setTimeout(()=>{
                            character.src ="../images/run.gif";
                             var end = setInterval(() => {
                              if(x<1600){
                                character.style.marginLeft=x+"px";
                                x++;
                               if(y<180){
                                character.style.marginTop=y+"px";
                                y++;
                               }
                               }else{
                                audio.pause();
                                document.getElementById("body").innerHTML = '<div class="center"><p id="points" class="points"></p><p class="levelTwo"> LEVEL 2 ( FUNCTIONS )</p><img src="../images/loading.gif"><p class="loading">Loading</p></div>';
                                
                                document.getElementById("points").innerText= "YOUR POINTS: "+points;
                                setTimeout(function(){
                                  $.ajax({

                                    url     : "../pages/userspoints.php",
                                    method  : "POST",
                                 
                                        data: { 
                                          //key :   value 
                                          "level1-points" :  points 
                                    
                                        }
                                    })
                                 
                                    .fail(function() { return false; })
                                   // Appel OK
                                    .done(function(data) {
                                    console.log("success");
                                 
                                  });
                                 location.href = "./level2.php";
                                },2000);
                                clearInterval(end);
                               
                              }
                            }, 10);
                          },200);
                           
                        }
                        
                      },10);
                    }
                  },10);
                }
                
              },10);
            }
          },10);
        }
      },10);
      
    } 
},10);


  
}
