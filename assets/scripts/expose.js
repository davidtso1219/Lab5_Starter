// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horn = document.getElementById('horn-select');
  const volume = document.getElementById('volume');
  const play = document.querySelector('button');

  horn.addEventListener('change', updateHorn);
  volume.addEventListener('input', updateVolume);
  play.addEventListener('click', playSound);
}

function updateHorn() {
  const hornSelect = document.getElementById('horn-select');
  const hornType = hornSelect.value;

  const imgElement = document.querySelector('#expose img');
  const audioElement = document.querySelector('audio');
  imgElement.src = `assets/images/${hornType}.svg`;
  audioElement.src = `assets/audio/${hornType}.mp3`;

}

function updateVolume() {
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioElement = document.querySelector('audio');

  const volume = volumeSlider.value;
  audioElement.volume = volume / 100;

  console.log("volume src: ", volume);
  console.log("audioElement.volume src: ", audioElement.volume);
  if (volume == 0) {
    volumeIcon.src = 'assets/icons/volume-level-0.svg';
  } else if (volume < 33) {
    volumeIcon.src = 'assets/icons/volume-level-1.svg';
  } else if (volume < 67) {
    volumeIcon.src = 'assets/icons/volume-level-2.svg';
  } else if (volume <= 100) {
    volumeIcon.src = 'assets/icons/volume-level-3.svg';
  }
  else {
    console.log("Error")
  }
}
function playSound() {
  const audioElement = document.querySelector('audio');
  const hornSelect = document.getElementById('horn-select');
  audioElement.play()
  if (hornSelect.value === 'party-horn') {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      confettiRadius: 10,
      confettiNumber: 1000,
      origin: { x: 0.5, y: 0.5 }
    });
  }
}

