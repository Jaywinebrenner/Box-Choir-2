// for (i = 0; i < document.querySelectorAll("#box").length; i++) {
//   document.querySelectorAll("#box")[i].addEventListener("click", detectClick);
// }




function playChime(event){
  var magicchime = new Audio("sounds/magic-chime.mp3")
  magicchime.play();
}


function play1(){
  var choir1 = new Audio("sounds/choir1.mp3");
  choir1.play();
}

function play2(){
  var choir2 = new Audio("sounds/choir2.mp3");
  choir2.play();
}

function play3(){
  var choir3 = new Audio("sounds/choir3.mp3");
  choir3.play();
}

function play4(){
  var choir4 = new Audio("sounds/choir4.mp3");
  choir4.play();
}


function play5(){
  var choir5 = new Audio("sounds/choir5.mp3");
  choir5.play();
}

function play6(){
  var choir6 = new Audio("sounds/choir6.mp3");
  choir6.play();
}

function play7(){
  var choir7 = new Audio("sounds/choir7.mp3");
  choir7.play();
}

function play8(){
  var choir8 = new Audio("sounds/choir8.mp3");
  choir8.play();
}

function play9(){
  var choir9 = new Audio("sounds/choir9.mp3");
  choir9.play();
}


// flash buttons
function flash() {
  document.getElementByClassName("box1").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


}


// Title
function testIn() {
  document.getElementById("chime-text").style.color = "#6bc5d2";
}

function testOut() {
  document.getElementById("chime-text").style.color = "#fcf9ea";
}



// pointers
document.getElementById("chime-text").style.cursor = "pointer";

for(i = 0; i<document.querySelectorAll("#box").length; i++) {
  document.querySelectorAll("#box")[i].style.cursor = "pointer";
}
