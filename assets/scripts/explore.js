// explore.js
/**
 * Requirements:
On page load, all of the available voices that you can use for your SpeechSynthesizer should be loaded and populate the “Select Voice” dropdown. (These are browser specific, so you might get different ones browser to browser).
When you click the “Press to Talk” button, the following should happen:
  The text that you have typed into the “Text to speak here” textarea should be spoken out loud using the voice that you have selected
Only while the synthesizer is speaking, the face should swap to being open mouthed (included in the images folder)
 */
window.addEventListener('DOMContentLoaded', init);

function init() {
  // DOM selector
  let voiceSelect = document.getElementById("voice-select");
  voiceSelect.addEventListener("load", populateVoiceList);
  let inputTxt = document.querySelector("#text-to-speak");
  let currImg = document.querySelector('img');
  const synth = window.speechSynthesis;

  // populate the voice list
  let voices = []
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  // populates the list on the website
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // play the voice + change image to open mouth when speaking
  function playVoice(){
    let utterance = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
        break;
      }
    }
    synth.speak(utterance);
    currImg.src = "/assets/images/smiling-open.png";
    // when finished speaking, go back to the smiling.png
    utterance.onend = function(event) {
      currImg.src = "/assets/images/smiling.png";
    };
  }

  //find button and add event listener for click
  let clickPlay = document.querySelector('button');
  clickPlay.addEventListener("click", playVoice);
}