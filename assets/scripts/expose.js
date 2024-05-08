// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const hornSelected = document.querySelector("#horn-select");
  const exposeContainer = document.getElementById("expose");
  const volumeChange = document.getElementById("volume");
  let audioValue = document.querySelector("audio");
  let volumeValue = volumeChange.value;
  const button = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  // displaying image + setting audio
  hornSelected.addEventListener("change", (event) => {

    if(event.target.value == 'air-horn') {
      exposeContainer.getElementsByTagName("img")[0].src = "./assets/images/air-horn.svg";
      document.getElementsByClassName("hidden")[0].src = "./assets/audio/air-horn.mp3";
    }
    else if(event.target.value == 'car-horn') {
      exposeContainer.getElementsByTagName("img")[0].src = "./assets/images/car-horn.svg";
      document.getElementsByClassName("hidden")[0].src = "./assets/audio/car-horn.mp3"
    }
    else if(event.target.value == 'party-horn') {
      exposeContainer.getElementsByTagName("img")[0].src = "./assets/images/party-horn.svg";
      document.getElementsByClassName("hidden")[0].src = "./assets/audio/party-horn.mp3"
    }
  });

  // adjusting volume settings
  volumeChange.addEventListener("change", (event) => {
    volumeValue = event.target.value;
    if(volumeValue == 0) {
      exposeContainer.getElementsByTagName("img")[1].src = "./assets/icons/volume-level-0.svg";
    }
    else if(volumeValue >= 1 && volumeValue < 33) {
      exposeContainer.getElementsByTagName("img")[1].src = "./assets/icons/volume-level-1.svg";
    }
    else if(volumeValue >= 33 && volumeValue < 67){
      exposeContainer.getElementsByTagName("img")[1].src = "./assets/icons/volume-level-2.svg";
    }
    else if(volumeValue > 67) {
      exposeContainer.getElementsByTagName("img")[1].src = "./assets/icons/volume-level-3.svg";
    }
  });
  
  // play sound button
  button.addEventListener("click", (event) => {
    let audio = new Audio(document.getElementsByClassName("hidden")[0].src);
    audio.volume = volumeValue / 100;
    audio.play();
    if(hornSelected.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}