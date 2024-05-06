// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // Select
  const hornOptions = document.getElementById('horn-select');
  // Image
  const images = document.querySelector('img');
  // Audio
  const audio = document.createElement('audio');
  // volume
  const volumChange = document.getElementById('volume');
  // volume image
  const volumeIcon = document.querySelector('#volume-controls img');
  // button
  const button = document.querySelector('button');
  // Confetti
  const confetti = new JSConfetti();
  

  hornOptions.addEventListener('change', function() {
    const optionSelected = this.value;

    if(optionSelected === 'air-horn') {
      images.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    } else if(optionSelected === 'car-horn') {
      images.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    } else if(optionSelected === 'party-horn') {
      images.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  button.addEventListener('click', function() {
    audio.play();
    if(hornOptions.value === 'party-horn') {
      confetti.addConfetti();
    }
  });

  volumChange.addEventListener('input', function() {
    // volume range from 0 to 1, so turn into float
    const iconChange = parseFloat(this.value)/100;
    // Volume changes using .volume
    audio.volume = iconChange;

    if(iconChange === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';    
    } else if(iconChange < 0.333) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if(iconChange < 0.67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

}