//expose.js
//Group 33 - Siddharth and Hartej

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const hornImage = document.querySelector('#expose img');
  const audioElement = document.querySelector('audio');

  //Confetti
  const jsConfetti = new JSConfetti();


  const horns = {
    'air-horn': {
      image: 'assets/images/air-horn.svg',
      audio: 'assets/audio/air-horn.mp3',
    },
    'car-horn': {
      image: 'assets/images/car-horn.svg',
      audio: 'assets/audio/car-horn.mp3',
    },
    'party-horn': {
      image: 'assets/images/party-horn.svg',
      audio: 'assets/audio/party-horn.mp3',
    },
  };

  //Event Listeners
  hornSelect.addEventListener('change', updateHorn);
  volumeSlider.addEventListener('input', updateVolume);
  playButton.addEventListener('click', playSound);

  function updateHorn() {
    const selectedHorn = hornSelect.value;

    if (horns[selectedHorn]) {
      hornImage.src = horns[selectedHorn].image;
      audioElement.src = horns[selectedHorn].audio;
    }
  }

  function updateVolume() {
    const volume = volumeSlider.value;
    audioElement.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  }

  async function playSound() {
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti({
        emojis: ['🎉', '🎊', '✨', '🎈'],
        confettiNumber: 100,
      });
    }

    if (audioElement.src) {
      await audioElement.play();
    }
  }
}