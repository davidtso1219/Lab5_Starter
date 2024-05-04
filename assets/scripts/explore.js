// explore.js

window.addEventListener('DOMContentLoaded', init);

const prefixImages = "assets/images/";

/**
 * @type {SpeechSynthesisVoice[]}
 */
let availableVoices;
/**
 * @type {HTMLSelectElement}
 */
let dropDownContainer;

/**
 * @type {HTMLImageElement}
 */
let face;
/**
 * @type {HTMLTextAreaElement}
 */
let textAreaInput;

/**
 * @type {HTMLButtonElement}
 */
let playButton;

function init() {
  // wait until all voices are 
  window.speechSynthesis.onvoiceschanged = function(){
    availableVoices = speechSynthesis.getVoices();
    loadVoices();
  }
  dropDownContainer = document.getElementById("voice-select")
  face = document.querySelector("img");
  textAreaInput = document.getElementById("text-to-speak");
  playButton = document.querySelector("button");
  playButton.addEventListener('click', function(event){
    if(textAreaInput.value.length !== 0){
      let textUtterance = new SpeechSynthesisUtterance(textAreaInput.value);
      if(dropDownContainer.selectedIndex !== 0)
        textUtterance.voice = availableVoices[dropDownContainer.selectedIndex - 1];
      textUtterance.addEventListener('end', ()=>{
        face.src = prefixImages + "smiling.png"
      });
      textUtterance.addEventListener('start',()=>{
        face.src = prefixImages + "smiling-open.png"
      })
      speechSynthesis.speak(textUtterance);
    }
  });
}

function loadVoices(){
  for (let i = 0; i < availableVoices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${availableVoices[i].name} (${availableVoices[i].lang})`;
    dropDownContainer.appendChild(option);

  }
}