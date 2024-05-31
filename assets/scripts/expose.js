// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get references to DOM elements
  const hornSelectElement = document.getElementById('horn-select');
  const volumeSliderElement = document.getElementById('volume');
  const playButtonElement = document.querySelector('button');
  const audioElement = document.querySelector('audio');
  const hornImageElement = document.querySelector('#expose img');
  const volumeIconElement = document.querySelector('#volume-controls img');

  // Event listener for horn selection
  hornSelectElement.addEventListener('change', function() {
    const selectedHorn = hornSelectElement.value;
    hornImageElement.src = `assets/images/${selectedHorn}.svg`;
    hornImageElement.alt = selectedHorn;
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  });

  // Event listener for volume slider
  volumeSliderElement.addEventListener('input', function() {
    const volumeValue = volumeSliderElement.value;
    audioElement.volume = volumeValue / 100;

    if (volumeValue == 0) {
      volumeIconElement.src = 'assets/icons/volume-level-0.svg';
      volumeIconElement.alt = 'Volume level 0';
    } else if (volumeValue < 33) {
      volumeIconElement.src = 'assets/icons/volume-level-1.svg';
      volumeIconElement.alt = 'Volume level 1';
    } else if (volumeValue < 67) {
      volumeIconElement.src = 'assets/icons/volume-level-2.svg';
      volumeIconElement.alt = 'Volume level 2';
    } else {
      volumeIconElement.src = 'assets/icons/volume-level-3.svg';
      volumeIconElement.alt = 'Volume level 3';
    }
  });

  // Event listener for play button
  playButtonElement.addEventListener('click', function() {
    audioElement.play();
    if (hornSelectElement.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        confettiRadius: 6,
        confettiNumber: 300,
        spread: 120,
        startVelocity: 50,
        gravity: 1,
      });
    }
  });
}
