// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const dropdown = document.getElementById('horn-select');
  const image = document.querySelector('img');
  const audio = document.querySelector('audio');
  const btn = document.querySelector('button');
  const volumeControl = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const jsConfetti = new JSConfetti()


  dropdown.addEventListener('change', function () {
    // Check if the selected value is 'air-horn'
    if (dropdown.value === 'air-horn') {
      // Change the image source
      image.src = 'assets/images/air-horn.svg';
      image.alt = 'Air Horn Image';
      audio.src = 'assets/audio/air-horn.mp3';
    } else if (dropdown.value === 'car-horn') {
      image.src = 'assets/images/car-horn.svg';
      image.alt = 'Car Horn Image';
      audio.src = 'assets/audio/car-horn.mp3';
    } else {
      image.src = 'assets/images/party-horn.svg';
      image.alt = 'Party Horn Image';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  btn.addEventListener('click', function () {
    if (dropdown.value === 'party-horn') {
      // Shoot confetti
      jsConfetti.addConfetti()
    }
    audio.play();
  });

  volumeControl.addEventListener('input', function () {
    const volumeValue = parseInt(volumeControl.value);
    if (volumeValue === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
    audio.volume = volumeValue / 100;
  });

}