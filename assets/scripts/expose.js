// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  //first DOM selector for hornSelect and some useful variables + confetti
  let hornSelect = document.getElementById("horn-select");
  hornSelect.addEventListener("change", displayHorn);
  let currAudio = document.querySelector('.hidden');
  let partyHorn = false;
  const jsConfetti = new JSConfetti();

  //display a separate image when dropdown selection changes
  function displayHorn(horn){
    const currHorn = horn.target.value;
    let currImg = document.querySelector('img');
    if(currHorn == "air-horn")
    {
      currImg.src = "assets/images/air-horn.svg";
      currAudio.src= "assets/audio/air-horn.mp3";
      partyHorn = false;
    }
    if(currHorn == "car-horn")
    {
      currImg.src = "assets/images/car-horn.svg";
      currAudio.src= "assets/audio/car-horn.mp3";
      partyHorn = false;
    }
    if(currHorn == "party-horn")
    {
      currImg.src = "assets/images/party-horn.svg";
      currAudio.src= "assets/audio/party-horn.mp3";
      partyHorn = true;
    }
  }

  //find input slider and add event listener for inputted value
  let volSlider = document.querySelector('input');
  volSlider.addEventListener("input", displaySound);

  //display corresponding icons for volume value and set volume for audio
  function displaySound(){
    let currSoundImg = document.querySelector('div > img');
    if(volSlider.value == 0){
      currSoundImg.src = "assets/icons/volume-level-0.svg";
      currAudio.volume = 0.00;
    }else if(volSlider.value < 33){
      currSoundImg.src = "assets/icons/volume-level-1.svg";
      currAudio.volume = volSlider.value/100;
    }else if(volSlider.value < 67){
      currSoundImg.src = "assets/icons/volume-level-2.svg";
      currAudio.volume = volSlider.value/100;
    }else{
      currSoundImg.src = "assets/icons/volume-level-3.svg";
      currAudio.volume = volSlider.value/100;
    }
  }

  //find button and add event listener for click
  let clickPlay = document.querySelector('button');
  clickPlay.addEventListener("click", playSound);

  //play sound, drop confetti if it is party horn
  function playSound(){
    currAudio.play();
    let sound = currAudio.src;
    if(partyHorn){
      jsConfetti.addConfetti();
    }
  }
}