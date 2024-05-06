// expose.js

window.addEventListener('DOMContentLoaded', init);


const confet = new JSConfetti();

function init() {
  // TODO


  const select = document.getElementById('horn-select');
  const slider = document.getElementById('volume');
  const button = document.querySelector('button');
  const hornImage = document.querySelector('img');
  const sound = document.querySelector('audio');
  const volumeImage = document.querySelector('#volume-controls img');
  
  
  select.addEventListener('change', () => {
    if(select.value === 'air-horn') {
      hornImage.src = "assets/images/air-horn.svg";
      sound.src = "assets/audio/air-horn.mp3";
    } else if(select.value ===  "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      sound.src = "assets/audio/car-horn.mp3";
    } else if(select.value === "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      sound.src = "assets/audio/party-horn.mp3";
    }



  }




);


  slider.addEventListener('input', () => {

    sound.volume = slider.value / 100;


    if(slider.value == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } else if(slider.value > 0 && slider.value < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } else if (slider.value > 32 && slider.value < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
  } else if(slider.value > 66){
    volumeImage.src = "assets/icons/volume-level-3.svg";
  }




  });






  button.addEventListener('click', () => {
    sound.play();

    if (select.value === 'party-horn') {
      confet.addConfetti(); 
  }
  });













}