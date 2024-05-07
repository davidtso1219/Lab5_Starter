// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const horn_option = document.getElementById("horn-select");
  const img = document.querySelector("img")
  const sound = document.querySelector(".hidden");

  horn_option.addEventListener('change',function(){
    switch(horn_option.value){
      case 'air-horn':
        img.src = 'assets/images/air-horn.svg';
        sound.src ='assets/audio/air-horn.mp3';
        break;

      case 'car-horn':
        img.src = 'assets/images/car-horn.svg';
        sound.src ='assets/audio/car-horn.mp3';
        break;

      case 'party-horn':
          img.src = 'assets/images/party-horn.svg';
          sound.src ='assets/audio/party-horn.mp3';
          break;
    }
  });

  const volumes = document.getElementById("volume");
  const icons_img = document.querySelector("#volume-controls img");

  volumes.addEventListener('input', function(){
    const num = parseInt(volumes.value);
    let level = "0"
    if(num == 0){
      level = 0;
    }
    else if(num >= 1 && num < 33){
      level = 1;
    }
    else if(num >= 33 && num < 67){
      level = 2;
    }
    else{
      level = 3;
    }

    switch(level){
      case 0:
        icons_img.src = 'assets/icons/volume-level-0.svg';
        break;
      case 1:
        icons_img.src = 'assets/icons/volume-level-1.svg';
        break;
      case 2:
        icons_img.src = 'assets/icons/volume-level-2.svg';
        break;
      default:
        icons_img.src = 'assets/icons/volume-level-3.svg';
        break;
    }
  });

  const but = document.querySelector("button");
  const party = new JSConfetti();
  
  but.addEventListener('click', function(){
    sound.play();
    sound.volume = volumes.value/100;
  
    if(horn_option.value == 'party-horn'){
      party.addConfetti();
    }

  });
  
}