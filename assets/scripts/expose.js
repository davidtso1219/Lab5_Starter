// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let hornSelect = document.getElementById("horn-select");
  hornSelect.addEventListener("change", displayHorn);

  function displayHorn(horn){
    const currHorn = horn.target.value;
    let currImg = document.querySelector('img');
    if(currHorn == "air-horn")
    {
      currImg.src = "assets/images/air-horn.svg";
      let currAudio = document.querySelector('.hidden');
      currAudio.src= "assets/audio/air-horn.mp3";
    }
    if(currHorn == "car-horn")
    {
      currImg.src = "assets/images/car-horn.svg";
      let currAudio = document.querySelector('.hidden');
      currAudio.src= "assets/audio/car-horn.mp3";
    }
    if(currHorn == "party-horn")
    {
      currImg.src = "assets/images/party-horn.svg";
      let currAudio = document.querySelector('.hidden');
      currAudio.src= "assets/audio/party-horn.mp3";
    }
  }
}