// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const playButton = document.querySelector('#expose button');
  const audioElement = document.querySelector('#expose audio');
  const imageElement = document.querySelector('#expose img');
  const volumeIcon = document.querySelector('#volume-controls img');
  const jsConfetti = new JSConfetti(); // Assuming JSConfetti is globally available

  hornSelect.addEventListener('change', function() {
    updateHorn(hornSelect.value);
  });

  volumeSlider.addEventListener('input', function() {
    updateVolume(volumeSlider.value);
  });

  playButton.addEventListener('click', function() {
    playSound();
  });

  function updateHorn(selectedHorn) {
    switch (selectedHorn) {
      case 'air-horn':
        imageElement.src = 'assets/images/air-horn.svg';
        audioElement.src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        imageElement.src = 'assets/images/car-horn.svg';
        audioElement.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        imageElement.src = 'assets/images/party-horn.svg';
        audioElement.src = 'assets/audio/party-horn.mp3';
        break;
    }
  }

  function updateVolume(volume) {
    audioElement.volume = volume / 100;
    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume >= 33 && volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else if (volume >= 67) {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  }

  function playSound() {
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  }
}