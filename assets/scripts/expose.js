// expose.js  
  
//import JSConfetti from 'js-confetti'


  

 window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horn = document.getElementById('horn-select')
  const img = document.querySelector('img')
  const sound =document.querySelector('audio')


  horn.addEventListener('change', function(){
    switch(horn.value){
      case 'air-horn':
        img.src = 'assets/images/air-horn.svg';
        sound.src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        img.src = 'assets/images/car-horn.svg';
        sound.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        img.src = 'assets/images/party-horn.svg';
        sound.src = 'assets/audio/party-horn.mp3';
        break;
    }


});
const volume = document.querySelector('#volume');
//console.log(volume)
const icon = document.querySelector('#volume-controls img')
volume.addEventListener('input',function(){
  if(parseInt(volume.value) == 0 ){
    icon.src = 'assets/icons/volume-level-0.svg';
   
  }else if(parseInt(volume.value)<33){
    icon.src = 'assets/icons/volume-level-1.svg';
  }else if (parseInt(volume.value)<67){
    icon.src ="assets/icons/volume-level-2.svg";
    
  }else{
    icon.src = 'assets/icons/volume-level-3.svg';
  }
});

const button = document.querySelector('button');
const jsConfetti = new JSConfetti();

button.addEventListener('click', function(){
  sound.play();
  sound.volume = parseInt(volume.value)/100;
  if(horn.value=='party-horn'){
  jsConfetti.addConfetti()
  }
});
}