// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let voiceSelect = document.getElementById("voice-select");
  let speakButton = document.querySelector("button");
  let textToSpeak = document.getElementById("text-to-speak");
  let smileImg = document.querySelector("img");

  function populateVoiceList() {
    let voices = speechSynthesis.getVoices();
  
    voices.forEach(voice => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
  
      option.setAttribute("value", voice.name); 
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
  
      voiceSelect.appendChild(option);
    });
  }
  
  speechSynthesis.addEventListener("voiceschanged", populateVoiceList);

  speakButton.addEventListener('click', function(){
    smileImg.src = "assets/images/smiling-open.png";

    let message = textToSpeak.value;
    let utterance = new SpeechSynthesisUtterance(message);
    let selectedVoice = voiceSelect.value;

    let voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
      if (voice.name === selectedVoice) {
        utterance.voice = voice;
      }
    });

    utterance.onstart = function(event) {
      smileImg.src = "assets/images/smiling-open.png";
    };

    utterance.onend = function(event) {
      smileImg.src = "assets/images/smiling.png";
    };

    speechSynthesis.speak(utterance);
    utterance = null;
  });
}