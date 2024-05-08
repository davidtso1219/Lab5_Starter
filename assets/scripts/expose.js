// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornElement = document.querySelector('#expose img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioElement = document.querySelector('audio');
  const playButton = document.querySelector('button');

  // Function to update the volume icon
  function updateVolumeIcon(volume) {
    let volumeLevel;
    if (volume >= 67) {
      volumeLevel = 3;
    } else if (volume >= 34) {
      volumeLevel = 2;
    } else if (volume > 0) {
      volumeLevel = 1;
    } else {
      volumeLevel = 0;
    }
    volumeIcon.src = `assets/icons/volume-level-${volumeLevel}.svg`;
    volumeIcon.alt = `Volume level ${volumeLevel}`;
  }

  // Function to change horn-icon
  function changeHornIcon() {
    let hornType = hornSelect.value;
    hornElement.src = `assets/images/${hornType}.svg`
  }

  // Function to play sound
  function playSound() {
    let hornType = hornSelect.value;
    audioElement.src = `assets/audio/${hornType}.mp3`;
    audioElement.volume = volumeSlider.value / 100;
    audioElement.play();
  }

  // Add event listeners
  hornSelect.addEventListener(`change`, changeHornIcon);
  volumeSlider.addEventListener('input', () => updateVolumeIcon(volumeSlider.value));
  playButton.addEventListener('click', playSound);
}
