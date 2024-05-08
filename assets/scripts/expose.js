// expose.js

window.addEventListener('DOMContentLoaded', init);

let image = document.querySelector('img');
let hornSelect = document.querySelector('#horn-select');
let slider = document.querySelector('#volume');
let volumeIcon = document.querySelector('#volume-controls > img');
let button = document.querySelector('button');
let audio = document.querySelector('audio');
const jsConfetti = new JSConfetti();

function init() {
  // Change image based on horn select bar
  hornSelect.addEventListener('change', (e) => {
    let value = hornSelect.value;
    switch (value) {
      case 'air-horn':
        image.setAttribute('src', 'assets/images/air-horn.svg');
        audio.setAttribute('src', 'assets/audio/air-horn.mp3');
        break;
      case 'car-horn':
        image.setAttribute('src', 'assets/images/car-horn.svg');
        audio.setAttribute('src', 'assets/audio/car-horn.mp3');
        break;
      case 'party-horn':
        image.setAttribute('src', 'assets/images/party-horn.svg');
        audio.setAttribute('src', 'assets/audio/party-horn.mp3');
        break;
      default:
        image.setAttribute('src', 'assets/images/no-image.png');
    }
  });

  // Change volume icon based on volume slider
  slider.addEventListener('change', (e) => {
    let volume = slider.value;
    if (volume == 0) {
      volumeIcon.setAttribute('src', 'assets/icons/volume-level-0.svg');
    } else if (volume > 0 && volume < 33) {
      volumeIcon.setAttribute('src', 'assets/icons/volume-level-1.svg');
    } else if (volume > 34 && volume < 67) {
      volumeIcon.setAttribute('src', 'assets/icons/volume-level-2.svg');
    } else {
      volumeIcon.setAttribute('src', 'assets/icons/volume-level-3.svg');
    }
    // Set audio volume
    audio.volume = volume / 100;
  });

  // Play confetti if party horn
  button.addEventListener('click', (e) => {
    if (hornSelect.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
    audio.play();  
  });
}