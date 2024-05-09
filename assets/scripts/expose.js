// expose.js


window.addEventListener('DOMContentLoaded', init);


var htmlElement = document.getElementById("horn-select");

var htmlSoundElement = document.getElementById("volume");

var playButton = document.querySelector("button");


function init() {

  console.log(htmlElement);

  htmlElement.addEventListener("change", changeImage);

  document.getElementById("volume").oninput = function() {playSound()};

  playButton.addEventListener("click", makeSound);



}

function changeImage() {

  var selectedOptionValue = htmlElement.value;

  console.log(selectedOptionValue);

  var imageElement = document.querySelector('img');

  imageElement.src = "assets/images/" + selectedOptionValue + ".svg";

  console.log(selectedOptionValue);

}

  
function playSound() {


  var selectedSoundValue = htmlSoundElement.value;



  var soundImageElement = document.querySelector("div img");

  if (selectedSoundValue < 33 && selectedSoundValue >= 1)
    soundImageElement.src = "assets/icons/volume-level-1.svg";
  
  else if (selectedSoundValue == 0)
    soundImageElement.src = "assets/icons/volume-level-0.svg";

  else if (selectedSoundValue >= 33 && selectedSoundValue < 67)
    soundImageElement.src = "assets/icons/volume-level-2.svg";

  else if (selectedSoundValue >= 67 && selectedSoundValue <= 100)
    soundImageElement.src = "assets/icons/volume-level-3.svg";

  console.log(selectedSoundValue);

}

function makeSound() {
  var selectedOptionValue = this.value;

  console.log(selectedOptionValue);

  var audioElement = document.querySelector("audio");

  let audioFile = htmlElement.value + ".mp3";

  audioElement.src = "assets/audio/" + audioFile;

  var volume = document.getElementById("volume").value / 100;

  audioElement.volume = volume;

  audioElement.play();

  if (htmlElement.value === "party-horn") {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }

}
