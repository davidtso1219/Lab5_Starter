// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var speech = new SpeechSynthesisUtterance();
  var button = document.querySelector('button');
  var image = document.querySelector('img');
  var textbox = document.querySelector('textarea');
  var selectVoices = document.getElementById("voice-select");
  var synthesis = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = voices[i].name + '(' + voices[i].lang + ')';
      option.setAttribute("language", voices[i].lang);
      option.setAttribute("name", voices[i].name);
      selectVoices.appendChild(option);
    }
  }
  
  populateVoiceList();
  if ( typeof speechSynthesis !== "undefined") {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener('click', function(){
    var input = textbox.value;
    speech.text = input;
    const selectedOption = selectVoices.selectedOptions[0].getAttribute("name");
    for (let i = 0; i < voices.length; i++){
      if(voices[i].name == selectedOption){
        speech.voice = voices[i];
      }
    }
    synthesis.speak(speech);
    speech.onstart = function(){
      image.src = "assets/images/smiling-open.png";
    }
    speech.onend = function(){
      image.src = "assets/images/smiling.png";
    }  
  });
}
