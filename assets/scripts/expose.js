// expose.js
var currHorn;
window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const exposeImage = document.querySelector('#expose img');
  const volume = document.getElementById('volume');
  const volumeImage = document.querySelector('#volume-controls img');
  const soundButton = document.querySelector('button');
  const audio = document.querySelector('audio');
  const jsConfetti = new JSConfetti();


  hornSelect.addEventListener('change', function() {
    updateHorn(this.value, exposeImage, audio);
  });

  volume.addEventListener('input', function(){
    audio.volume = this.value / 100;
    updateVolumeImage(this.value, volumeImage);
  });

  soundButton.addEventListener('click', function(){
    audio.play();
    if (currHorn == 'party-horn'){
      jsConfetti.addConfetti();
    }
  });
}

function updateHorn(hornType, exposeImage, audio) {
  currHorn = hornType;
  switch (hornType) {
    case 'air-horn':
      exposeImage.src = 'assets/images/air-horn.svg';
      exposeImage.alt = 'Air Horn';
      audio.src = 'assets/audio/air-horn.mp3';
      break;
    case 'car-horn':
      exposeImage.src = 'assets/images/car-horn.svg'; 
      exposeImage.alt = 'Car Horn';
      audio.src = 'assets/audio/car-horn.mp3';
      break;
    case 'party-horn':
      exposeImage.src = 'assets/images/party-horn.svg';
      exposeImage.alt = 'Party Horn';
      audio.src = 'assets/audio/party-horn.mp3';
      break;
    default:
      exposeImage.src = 'assets/images/no-image.png';
      exposeImage.alt = 'No image selected';
      break;
  }
}

function updateVolumeImage(volLevel, volumeImage) {
  if (volLevel == 0){
    volumeImage.src = 'assets/icons/volume-level-0.svg';
    volumeImage.alt = 'Volume level 0';
  } else if (volLevel < 33) {
    volumeImage.src = 'assets/icons/volume-level-1.svg';
    volumeImage.alt = 'Volume level 1';
  } else if (volLevel < 67) {
    volumeImage.src = 'assets/icons/volume-level-2.svg';
    volumeImage.alt = 'Volume level 2';
  } else {
    volumeImage.src = 'assets/icons/volume-level-3.svg';
    volumeImage.alt = 'Volume level 3';
  }
}