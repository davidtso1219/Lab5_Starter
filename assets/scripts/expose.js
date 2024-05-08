// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //TODO
  hornSelection();
  volumeControl();
  playSound();
}

function hornSelection() {
  const hornSelect = document.getElementById('horn-select');
  const imageElement = document.querySelector('img');
  const audioElement = document.querySelector('audio');

  hornSelect.addEventListener('change', function() {
    const value = this.value;
  
    imageElement.src = `assets/images/${value}.svg`; 

    audioElement.src = `assets/audio/${value}.mp3`; 
  });
}

function volumeControl() {
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioElement = document.querySelector('audio');

  volumeSlider.addEventListener('input', function() {
    const volume = parseInt(this.value, 10);

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
}

function playSound() {
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');

  playButton.addEventListener('click', function() {
    audioElement.play();
  });
}
