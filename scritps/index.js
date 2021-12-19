var sound= 0;
var load= document.getElementById("enable");
var start = document.getElementById("start");
start.classList.add("hide");
//request sound
const audio = new Audio( 'https://dl.dropboxusercontent.com/s/h8pvqqol3ovyle8/tom.mp3' );
audio.muted = true;

const alert_elem = document.querySelector( '.alert' );

audio.play().then( () => {
  // already allowed
  alert_elem.remove();
  resetAudio();
} )
.catch( () => {
  // need user interaction
  alert_elem.addEventListener( 'click', ({ target }) => {
    if( target.matches('button') ) {
      const allowed = target.value === "1";
      if( allowed ) {
        audio.play()
          .then( resetAudio );
      }
      alert_elem.remove();
    }
  } );
} );

document.getElementById('btn').addEventListener( 'click', () => {
  if( audio.muted ) {
    console.log( 'silent notification' );
  }
  else {
    audio.play();
  }
} );

function resetAudio() {
  audio.pause();
  audio.currentTime = 0;
  audio.muted = false;
}

//getting sounds
 var firstpart = new Audio("../playervoice/intro-1.wav"); 
 var firstpart2 = new Audio("../playervoice/intro-2.wav");
 var secondpart1 = new Audio("../playervoice/2nd-intro-1.wav");
 var secondpart2 = new Audio("../playervoice/2nd-intro-2.wav");

//load game
load.onclick = function(){
   
document.getElementById("PlayBox").classList.add("hide");
var player = document.getElementById("character");
var welcometext = document.getElementById("welcome");
var letsplay = document.getElementById("letsplay");
var audio = new Audio('./sounds/footsteps.wav');
audio.volume= 0.5;
var welcome = new Audio('./sounds/welcome.wav');

character.style.marginLeft="-100px";

      player.src="../images/run.gif";
      anime({
        targets: player,
        translateX:800,
        duration:2500,
        easing: 'linear',
        loop: false,
        begin: ()=>{
            audio.play();
        },
        complete: ()=>{
          audio.pause();
          player.src="../images/idle.gif";
          start.classList.remove("hide");
          firstpart.play();
          welcometext.classList.add("show");
          setTimeout(() => {
            welcometext.classList.remove("show");
            firstpart2.play();
            letsplay.classList.add("show");
          }, 2000);
        }
      });
 
       
       
           

    


//start the game


var text = document.getElementById("text");
start.onclick = function(){
    start.classList.add("hide");
   changeSpeach();
  
   
}


function changeSpeach(){
      secondpart1.play();
      text.innerText= "GREAT WE ARE GONNA HAVE A GREAT TIME";
    
      setTimeout(function(){
      secondpart2.play();
      text.innerText="LETS GOOO......";
      setTimeout(function(){
          letsplay.classList.remove("show");
          characterMovesOut();
       },1000);
       },2000);

       
}


function characterMovesOut(){
   character.classList.add("running");
   document.getElementById("character").src="./images/run.gif";
   anime({
    targets: player,
    translateX:1600,
    duration:2500,
    easing: 'linear',
    loop: false,
    begin: ()=>{
        audio.play();
    },
    complete: ()=>{
      audio.pause();
      document.getElementById("body").innerHTML = '<div class="center"><p class="levelOne"> LEVEL 1 ( Set Theories )</p><img src="./images/loading.gif"><p class="loading">Loading</p></div>';
   setTimeout(function(){
   location.href="./pages/level1.php";
   },1000);
    }

   });  
 }


}
   
