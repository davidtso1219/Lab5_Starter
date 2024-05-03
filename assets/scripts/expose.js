// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');

  hornSelect.addEventListener('change', updateHorn);
  volumeSlider.addEventListener('input', updateVolume);
  playButton.addEventListener('click', playSound);

  function updateHorn() {
    const selectedHorn = hornSelect.value;
    const image = document.querySelector('img');
    const audioSrc = `./assets/audio/${selectedHorn}.mp3`;
    const hornImageSrc = `./assets/images/${selectedHorn}.svg`;

    image.src = hornImageSrc;
    audioElement.src = audioSrc;
  }

  function updateVolume() {
    const volume = volumeSlider.value;
    const volumeLevels = ['volume-level-1.svg', 'volume-level-2.svg', 'volume-level-3.svg'];
    const volumeLevelIndex = Math.floor((volume - 1) / 33);
    if (volume == 0){
      volumeIcon.src = `./assets/icons/volume-level-0.svg`;
    } else if (volume == 100){
      volumeIcon.src = `./assets/icons/volume-level-3.svg`;
    } else {
      volumeIcon.src = `./assets/icons/${volumeLevels[volumeLevelIndex]}`;
    }
    audioElement.volume = volume / 100;
  }

  function playSound() {
    const selectedHorn = hornSelect.value;
    audioElement.play();

    if (selectedHorn === 'party-horn') {
      const confetti = new JSConfetti();
      confetti.addConfetti();
    }
  }
}