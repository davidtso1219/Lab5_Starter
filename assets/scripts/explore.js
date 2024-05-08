// explore.js

window.addEventListener('DOMContentLoaded', init);


let face = document.querySelector('main img');
let textArea = document.querySelector('textarea');
let voiceSelect = document.querySelector('#voice-select');
let button = document.querySelector('button');
let synth = window.speechSynthesis;
synth.addEventListener('voiceschanged', init);

function init() {
  let voices = synth.getVoices();
  const interval = setInterval(checkSpeaking, 500);
  
  for(let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.text = voices[i].name;
    option.setAttribute('value', voices[i].name);
    voiceSelect.appendChild(option);
  }
  
  function checkSpeaking() {
    if (synth.speaking) {
      face.setAttribute('src', 'assets/images/smiling-open.png');
    } else {
      face.setAttribute('src', 'assets/images/smiling.png');
    }
  }
  
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
    textArea.value = "";
  })
}