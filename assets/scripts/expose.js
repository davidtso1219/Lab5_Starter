// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let horn_select = document.getElementById("horn-select");
  let imag_select = document.querySelector('#expose img');
  let horn_audio = document.getElementsByClassName("hidden");
horn_select.addEventListener("change", () => {
  let horn_val = horn_select.value;
 
  if(horn_val === "air-horn"){
    imag_select.src = 'assets\images\download.png';//bug: this file does not exists in the webbroswer
    imag_select.alt = "air-horn selected";
    horn_audio.src = "assets\audio\air-horn.mp3";
  }
  else if(horn_val === 'car-horn'){
    imag_select.src = 'assets\images\car-horn.svg';
    imag_select.alt = "car-horn selected";
    horn_audio.src = "assets\audio\car-horn.mp3";
  }
  else if (horn_val === 'party-horn'){
    imag_select.src = 'assets\images\party-horn.svg';
    imag_select.alt = "party-horn selected";
    horn_audio.src  = "assets\audio\party-horn.mp3";
  }
});
 
}






