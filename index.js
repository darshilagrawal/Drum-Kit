// Click Detection
var buttons=document.querySelectorAll("button");
for (var i=0;i<buttons.length;i++){
  buttons[i].addEventListener("click",clicked);
}

function clicked(){
  musicFunction(this.innerText);
  buttonAnimation(this.innerText);
}

// Keyboard Detection
document.addEventListener("keydown",function(event){

  musicFunction(event.key);
  buttonAnimation(event.key);
})


function musicFunction(word){
  switch (word) {
    case "w":
    console.log("w");
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
    break;

    case "a":
    console.log("a");
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;

    case "s":
    console.log("s");
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
    break;

    case "d":
    console.log("d");
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

    case "j":
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    console.log("j");
    break;

    case "k":
    console.log("k");
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case "l":
    console.log("l");
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    default:
    console.log("Wrong Input");
  }

}

function buttonAnimation(keyPressed){
  var activeButton=document.querySelector("."+keyPressed);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}



// var audio=new Audio("sounds/tom-1.mp3");
// audio.play();
