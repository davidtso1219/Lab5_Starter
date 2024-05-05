// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  let slider = document.getElementById("volume-controls");

  slider.addEventListener('input', function() {
    const volume = this.value; 
    const audioPlayer = document.querySelector('audio');
    const volumeIcon = document.querySelector('#volume-controls img');

    audioPlayer.volume = volume / 100;
    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Mute';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume Level 1';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume Level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  }); 

}