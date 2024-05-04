// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {


  const synth = window.speechSynthesis;

  
  const voiceSelect = document.querySelector("select");
  const faceImage = document.querySelector('img');
  const textToSpeak = document.getElementById('text-to-speak');

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


  //Handles the speaking part, whent he button is pressed
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
      const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
      const selectedVoice = voices.find(voice => voice.name === selectedOption);
      

      const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
      utterance.voice = selectedVoice;
      utterance.voice = selectedVoice;
      utterance.onstart = () => {
          faceImage.src = 'assets/images/smiling-open.png';
      };
      utterance.onend = () => {
          faceImage.src = 'assets/images/smiling.png';
      };
    
      speechSynthesis.speak(utterance);
    });


}