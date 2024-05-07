// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectHorn = document.getElementById("horn-select");
  const hornImage = document.querySelectorAll("img")[0];
  const soundImage = document.querySelectorAll("img")[1];
  const audioElement = document.querySelector("audio");
  const playButton = document.querySelector("button");
  const volumeSlider = document.querySelector("input[type='range']")
  const jsConfetti = new JSConfetti()

  // Change horn image and audio file
  selectHorn.addEventListener('change', function(event){
    if (event.target.value == "air-horn") {
      hornImage.setAttribute('src', 'assets/images/air-horn.svg');
      audioElement.setAttribute('src', 'assets/audio/air-horn.mp3');
    }
    else if (event.target.value == "car-horn") {
      hornImage.setAttribute('src', 'assets/images/car-horn.svg');
      audioElement.setAttribute('src', 'assets/audio/car-horn.mp3');
    }
    else if (event.target.value == "party-horn") {
      hornImage.setAttribute('src', 'assets/images/party-horn.svg');
      audioElement.setAttribute('src', 'assets/audio/party-horn.mp3');
    }
  })

  // Change volume of audio
  volumeSlider.addEventListener('input', function(event){
    let currentVolume = Number(event.target.value)
    audioElement.volume = currentVolume / 100;
    if (currentVolume == 0) {
      soundImage.setAttribute('src', 'assets/icons/volume-level-0.svg');
      soundImage.setAttribute('alt', 'Volume level 0');
    }
    else if (currentVolume >= 1 && currentVolume < 33) {
      soundImage.setAttribute('src', 'assets/icons/volume-level-1.svg');
      soundImage.setAttribute('alt', 'Volume level 1');
    }
    else if (currentVolume >= 33 && currentVolume < 67) {
      soundImage.setAttribute('src', 'assets/icons/volume-level-2.svg');
      soundImage.setAttribute('alt', 'Volume level 2');
    }
    else if (currentVolume >= 67 && currentVolume <= 100) {
      soundImage.setAttribute('src', 'assets/icons/volume-level-3.svg');
      soundImage.setAttribute('alt', 'Volume level 3');
    }
  })

  // Play audio on click of button
  playButton.addEventListener('click', function(event){
    // Set volume on click of button as well to account for default volume being at 50% and if user doesn't touch slider before playing
    audioElement.volume = Number(volumeSlider.value) / 100;
    if (selectHorn.value == "party-horn") {
      jsConfetti.addConfetti();
    }
    audioElement.play();
  })
}