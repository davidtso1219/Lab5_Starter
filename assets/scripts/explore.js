// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const textToSpeakInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  function speak() {
    const utterThis = new SpeechSynthesisUtterance(textToSpeakInput.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
  
    const selectedVoice = synth.getVoices().find(voice => voice.name === selectedOption);
    utterThis.voice = selectedVoice;
  
    synth.speak(utterThis);
  
    faceImage.src = 'assets/images/smiling-open.png';
  
    utterThis.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };
  }

talkButton.addEventListener('click', speak);
}