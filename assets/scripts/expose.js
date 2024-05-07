// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

function init() {
  // Select elements
  const hornSelect = document.getElementById('horn-select');
  const audio = document.querySelector('audio');
  const soundImage = document.querySelector('main img'); // Selects the first <img> in <main>
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img'); // Selects the <img> inside the volume controls div
  const playButton = document.querySelector('button');

  // Maps for image and sound sources
  const soundSources = {
    'air-horn': 'assets/audio/air-horn.mp3',
    'car-horn': 'assets/audio/car-horn.mp3',
    'party-horn': 'assets/audio/party-horn.mp3'
  };
  const imageSources = {
    'air-horn': 'assets/images/air-horn.svg',
    'car-horn': 'assets/images/car-horn.svg',
    'party-horn': 'assets/images/party-horn.svg'
  };

  // Event listener for horn selection
  hornSelect.addEventListener('change', () => {
    audio.src = soundSources[hornSelect.value];
    soundImage.src = imageSources[hornSelect.value];
    soundImage.alt = hornSelect.options[hornSelect.selectedIndex].text; // Sets alt text based on the selected option's text
  });

  // Event listener for volume changes
  volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value / 100;
    updateVolumeIcon(volumeSlider.value, volumeIcon);
  });

  // Event listener for playing sound
  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      playConfetti();
    }
  });
}

// Function to update volume icon
function updateVolumeIcon(volume, icon) {
  if (volume >= 67) {
    icon.src = 'assets/icons/volume-level-3.svg';
    icon.alt = 'Volume level 3';
  } else if (volume >= 33) {
    icon.src = 'assets/icons/volume-level-2.svg';
    icon.alt = 'Volume level 2';
  } else if (volume > 0) {
    icon.src = 'assets/icons/volume-level-1.svg';
    icon.alt = 'Volume level 1';
  } else {
    icon.src = 'assets/icons/volume-level-0.svg';
    icon.alt = 'Volume level 0';
  }
}

// Function to play confetti
function playConfetti() {
  const jsConfetti = new JSConfetti(); // Assumes JSConfetti is available globally
  jsConfetti.addConfetti();
}

}