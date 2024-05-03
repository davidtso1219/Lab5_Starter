// expose.js

window.addEventListener('DOMContentLoaded', init);

// const

const prefixIcons = "assets/icons/";
const prefixImages = "assets/images/";
const prefixAudio = "assets/audio/";
// when volume slider changes change volume icon and audio element level
/**
 * @type {HTMLInputElement}
 */
let volumeSlider;
/**
 * @type {HTMLImageElement}
 */
let volumeIcon;

// grouping of related items in requirements
/**
 * @type {HTMLSelectElement}
 */
let hornDropDown;
/**
 * @type {HTMLImageElement}
 */
let mainImg;
/**
 * @type {HTMLAudioElement}
 */
let audioItem;

// button
/**
 * @type {HTMLButtonElement}
 */
let playButton;

// confetti
let jsConfetti;

function init() {
  volumeSlider = document.getElementById("volume");
  volumeIcon = document.querySelector("#volume-controls img");
  hornDropDown = document.querySelector("#horn-select");
  mainImg = document.querySelector("img");
  audioItem = document.querySelector("audio");
  playButton = document.querySelector("button");
  jsConfetti = new JSConfetti();
  createEventListeners();
}

function createEventListeners(){
  volumeSlider.addEventListener("input", function(event){
    let audioValue = Number(volumeSlider.value)/100
    audioItem.volume = audioValue;
    if(audioValue === 0){
      volumeIcon.src = prefixIcons + "volume-level-0.svg"
    }else if (audioValue < .33) {
      volumeIcon.src = prefixIcons + "volume-level-1.svg"
    }
    else if (audioValue < .67) {
      volumeIcon.src = prefixIcons + "volume-level-2.svg"
    }
    else{
      volumeIcon.src = prefixIcons + "volume-level-3.svg"
    }
  });
  hornDropDown.addEventListener("input", function(event){
    switch(hornDropDown.selectedIndex){
      case 1: 
        mainImg.src = prefixImages + "air-horn.svg";
        audioItem.src = prefixAudio + "air-horn.mp3"
        break;
      case 2:
        mainImg.src = prefixImages+ "car-horn.svg";
        audioItem.src = prefixAudio + "car-horn.mp3"
        break;
      case 3: 
        mainImg.src = prefixImages + "party-horn.svg";
        audioItem.src = prefixAudio + "party-horn.mp3"
        break;
      default:
        mainImg.src = prefixImages + "no-image.png";
        audioItem.src = "";
    } 
  });
  playButton.addEventListener("click", function(event){
      if(hornDropDown.selectedIndex == 3){
        jsConfetti.addConfetti();
      }
      audioItem.play();
  });
}