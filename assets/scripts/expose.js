// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornSelect = document.getElementById("horn-select");
  let audioElement = document.querySelector("audio");
  let hornImg = document.querySelector("img");
  let volumeSlider = document.querySelector("#volume");
  let volumeImg = document.querySelector("#volume-controls img");
  let playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti()

  hornSelect.addEventListener('change', function() {
    let selectedHorn = hornSelect.value;
    let audioFile = "assets/audio/" + selectedHorn + ".mp3";
    let imgFile = "assets/images/" + selectedHorn + ".svg";
    audioElement.src = audioFile;
    hornImg.src = imgFile;
  });

  volumeSlider.addEventListener('input', function(event) {
    let sliderValue = volumeSlider.value;
    if (sliderValue < 1){
      volumeImg.src = "assets/icons/volume-level-0.svg";
    }
    else if (1 <= sliderValue && sliderValue < 33){
      volumeImg.src = "assets/icons/volume-level-1.svg";
    }
    else if (33 <= sliderValue && sliderValue < 67){
      volumeImg.src = "assets/icons/volume-level-2.svg";
    }
    else if (67 <= sliderValue){
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
    audioElement.volume = sliderValue / 100;
  });

  playButton.addEventListener('click', function() {
    let selectedHorn = hornSelect.value;
    if (selectedHorn === "party-horn"){
      jsConfetti.addConfetti()
    }
    audioElement.play();
  });
}