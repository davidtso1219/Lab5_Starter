// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.getElementById('volume-controls').getElementsByTagName('img')[0];
  const playButton = document.getElementsByTagName('button')[0];
  const hornImage = document.getElementsByTagName('img')[0];
  const audio = document.getElementsByClassName('hidden')[0];

  const hornData = {
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


  volumeSlider.addEventListener('input', function() {
    const volume = parseInt(this.value, 10); 
    //set val here
    audio.volume = volume / 100;
    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = "Volume level 0"
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = "Volume level 1"
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = "Volume level 2"
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = "Volume level 3"
    }
  }); 


// Event listener for horn selection
hornSelect.addEventListener('change', function() {
  const selectedHorn = this.value;

  if (hornData[selectedHorn]) {
    hornImage.src = hornData[selectedHorn].image;
    audio.src = hornData[selectedHorn].audio;
  }
  
});

playButton.addEventListener('click', function() {
  if (hornSelect.value === 'party-horn') {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti(); // Trigger confetti when playing party horn
  }

  audio.play(); // Play the current horn sound
});

}