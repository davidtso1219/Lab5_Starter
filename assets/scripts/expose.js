// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');
  const imageElement = document.querySelector('#expose img');
  const volumeIcon = document.querySelector('#volume-controls img');

  hornSelect.addEventListener('change', function() {
    const selectedOption = hornSelect.options[hornSelect.selectedIndex].value;
    imageElement.src = `assets/images/${selectedOption}.svg`;
    audioElement.src = `assets/audio/${selectedOption}.mp3`;
  });

  volumeSlider.addEventListener('input', function() {
    const volume = parseInt(volumeSlider.value);
    audioElement.volume = volume / 100;

    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', function() {
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti(); 
      jsConfetti.addConfetti();
    }
  });
}