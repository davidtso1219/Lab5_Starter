// expose.js

window.addEventListener('DOMContentLoaded', init);

let image = document.querySelector('img');
let icon = document.querySelector('div > img');
let select = document.querySelector('#horn-select');
let slider = document.querySelector('#volume');
let button = document.querySelector('button');
let audio = document.querySelector('audio');
const jsConfetti = new JSConfetti();

function init() {
  select.addEventListener('change', (e) => {
    let value = select.value;
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

  button.addEventListener('click', (e) => {
    audio.play();
    if (select.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

  slider.addEventListener('change', (e) => {
    let volume = slider.value;
    audio.volume = volume / 100;
    if (volume == 0) {
      icon.setAttribute('src', 'assets/icons/volume-level-0.svg');
    } else if (volume < 33) {
      icon.setAttribute('src', 'assets/icons/volume-level-1.svg');
    } else if (volume < 67) {
      icon.setAttribute('src', 'assets/icons/volume-level-2.svg');
    } else {
      icon.setAttribute('src', 'assets/icons/volume-level-3.svg');
    }
  });
}