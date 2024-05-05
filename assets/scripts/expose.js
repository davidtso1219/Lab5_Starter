// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti()

function init() {
  document.getElementById('horn-select').addEventListener('change', (event) => {
    const horn = event.target.value;
    const img = document.querySelector('img');
    img.src = `assets/images/${horn}.svg`;
    const audio = document.getElementsByClassName('hidden')[0];
    audio.src = `assets/audio/${horn}.mp3`;
  });
  document.getElementById('volume').addEventListener('input', (event) => {
    const volume = event.target.value;
    const audio = document.getElementsByClassName('hidden')[0];
    const volumeIcon = document.querySelector('div img');
    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
    audio.volume = volume / 100;
  })
  document.querySelector('button').addEventListener('click', (event) => {
    const audio = document.getElementsByClassName('hidden')[0];
    audio.play();
    if (document.getElementById('horn-select').value == 'party-horn') {
      jsConfetti.addConfetti()
    }
  })
}