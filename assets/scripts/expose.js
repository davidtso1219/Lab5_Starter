// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.querySelector("select");
  const horn_img = document.querySelector("[alt='No image selected']");
  const sound = document.querySelector(".hidden");

  selectElement.addEventListener("change", (event) => {
    horn_img.src= 'assets/images/'+event.target.value+'.svg';
    sound.src='assets/audio/'+event.target.value+'.mp3';
  });

  const vol = document.querySelector("input");
  const vol_img = document.querySelector("[alt='Volume level 2']");
  vol.addEventListener("change", (event) => {
    vol.value=event.target.value;
    if(event.target.value==0){
      vol_img.src='assets/icons/volume-level-0.svg';
    }
    else if(event.target.value<33){
      vol_img.src='assets/icons/volume-level-1.svg';
    }
    else if(event.target.value<67){
      vol_img.src='assets/icons/volume-level-2.svg';
    }
    else{
      vol_img.src='assets/icons/volume-level-3.svg';
    }
  });

  const button = document.querySelector("button");

  button.addEventListener("click", (event) => {
    sound.volume=vol.value/100;
    sound.play();
  });

  

}