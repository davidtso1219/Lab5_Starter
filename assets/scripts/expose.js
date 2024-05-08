// expose.js
//import JSConfetti from '/assets/scripts/js-confetti.browser.js'

window.addEventListener('DOMContentLoaded', init);

function init() {
    let hornSelect = document.getElementById("horn-select");
    let hornImages = document.getElementsByTagName("img");
    let hornImage = hornImages[0];
    let audioSelects = document.getElementsByTagName("audio");
    let audioSelect = audioSelects[0];
    var selectedValue;
    hornSelect.addEventListener("change", (event) => {
      selectedValue = event.target.value;
      if (selectedValue === "air-horn")
      {
        hornImage.src = "assets/images/air-horn.svg";
        audioSelect.src = "assets/audio/air-horn.mp3";
      }
      if (selectedValue === "car-horn")
      {
        hornImage.src = "assets/images/car-horn.svg";
        audioSelect.src = "assets/audio/car-horn.mp3";
      }
      if (selectedValue === "party-horn")
      {
        hornImage.src = "assets/images/party-horn.svg";
        audioSelect.src = "assets/audio/party-horn.mp3";
      }
    });

    let volume = document.getElementById("volume");
    let volumeImages = document.getElementsByTagName("img");
    let volumeImage = volumeImages[1];
    volume.addEventListener("change", (event) => {
      let selectedVolume = event.target.value / 100;
      if (selectedVolume == 0.0)
      {
        volumeImage.src = "assets/icons/volume-level-0.svg";
        audioSelect.volume = selectedVolume;
      }
      if (selectedVolume >= 0.1 && selectedVolume <= 0.33)
      {
        volumeImage.src = "assets/icons/volume-level-1.svg";
        audioSelect.volume = selectedVolume;
        console.log("low volume");
      }
      if (selectedVolume >= 0.34 && selectedVolume <= 0.66) {
        volumeImage.src = "assets/icons/volume-level-2.svg";
        audioSelect.volume = selectedVolume;
      } 
      if (selectedVolume >= 0.67) {
        volumeImage.src = "assets/icons/volume-level-3.svg";
        audioSelect.volume = selectedVolume;
      }
    });

    const jsConfetti = new JSConfetti();

    let buttons = document.getElementsByTagName("button");
    let button = buttons[0];
    button.addEventListener("click", (event) => {
        console.log("click");
        audioSelect.play();
        if (selectedValue === "party-horn")
        {
            jsConfetti.addConfetti();
            console.log("testtest");
        }
    });




}