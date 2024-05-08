// explore.js

window.addEventListener('DOMContentLoaded', init);

let image = document.querySelector('img');
let textArea = document.querySelector('textarea');
let voiceSelect = document.querySelector('#voice-select');
let button = document.querySelector('button');
let synth = window.speechSynthesis;
synth.addEventListener('voiceschanged', init);

function init() {
  // Initailize list of voices
  let voices = synth.getVoices();
  for(let i = 0; i < voices.length; i++) {
    let option = document.createElement('option');
    option.text = voices[i].name;
    option.setAttribute('value', voices[i].name);
    voiceSelect.appendChild(option);
  }

  // Change image while speaking
  let interval = setInterval(checkSpeaking, 100);
  function checkSpeaking() {
    if (synth.speaking) {
      image.setAttribute('src', 'assets/images/smiling-open.png');
    } else {
      image.setAttribute('src', 'assets/images/smiling.png');
    }
  }
  
  // Generate speech when button clicked
  button.addEventListener('click', (e) => { 
    let utterance = new SpeechSynthesisUtterance(textArea.value);
    let selectedOption = voiceSelect.value;
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
        utterance.lang = voices[i].lang;
      }
    }
    synth.speak(utterance);
  })
}