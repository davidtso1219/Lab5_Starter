window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('.hidden');
  const playButton = document.querySelector('#expose button');
  const volumeSlider = document.querySelector('#volume');
  const volumeIcon = document.querySelector('#volume-controls img');


  hornSelect.addEventListener("change", function() {
    const hornValue = hornSelect.value;
    if (hornValue === "air-horn") {
      hornImage.src = 'assets/images/air-horn.svg';
      hornImage.alt = "air-horn selected";
      hornAudio.src = "assets/audio/air-horn.mp3";
    } else if (hornValue === 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
      hornImage.alt = "car-horn selected";
      hornAudio.src = "assets/audio/car-horn.mp3";
    } else if (hornValue === 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
      hornImage.alt = "party-horn selected";
      hornAudio.src = "assets/audio/party-horn.mp3";
    }
  });
  
  playButton.addEventListener("click", function(){
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
  volumeSlider.addEventListener("input", function(){
    const volume = volumeSlider.value;
    hornAudio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volume > 0 && volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volume >= 33 && volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });
}



