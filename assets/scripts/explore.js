// explore.js

window.addEventListener('DOMContentLoaded', init);


const synth = window.speechSynthesis;
var text;
var voices = [];
var voiceSelect = document.getElementById('voice-select');

function init() {
  const button = document.querySelector('button');
  const smileImage = document.querySelector('#explore img');
  const textarea = document.getElementById('text-to-speak');


  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  populateVoiceList();
  console.log("This Runs");

  button.addEventListener('click', function(){
    text = textarea.value;
    speak(text, smileImage, voiceSelect.value);
  });
}


function populateVoiceList(){
  voices = speechSynthesis.getVoices();

  for (var i = 0; i < voices.length; i++){
    var option = document.createElement('option');
    option.value = i; 
    option.innerHTML= voices[i].name + '(' + voices[i].lang + ')';
    voiceSelect.appendChild(option);
  }
}

function speak(text, smileImage, selectedVoiceName){
  const utterThis = new SpeechSynthesisUtterance(text);

  utterThis.voice = voices[selectedVoiceName];

  synth.speak(utterThis);

  utterThis.onstart = function(){
    smileImage.src = 'assets/images/smiling-open.png';
  }

  utterThis.onend = function(){
    smileImage.src = 'assets/images/smiling.png';
  }

  utterThis.onerror = function(event) {
    smileImage.src = 'assets/images/smiling.png';
  }
}
