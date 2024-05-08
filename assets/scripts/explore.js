// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const imageDisplay = document.querySelector('#explore img');
  const images = [`assets/images/smiling-open.png`, `assets/images/smiling.png`];
  let imageIndex = 0;
  let intervalId = null;


  function populateVoiceList() {
    let voices = synth.getVoices();
    for (let voice of voices) {
      let option = document.createElement('option');
      option.textContent = voice.name + ' (' + voice.lang + ')';
      if (voice.default) {
        option.textContent += ' -- DEFAULT';
      }
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    }
  }
  
  // Event listener for when new voices are loaded
  speechSynthesis.onvoiceschanged = populateVoiceList;

  // Load voice options
  populateVoiceList();

  speakButton.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(textArea.value);
    let selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
    utterance.voice = synth.getVoices().find(voice => voice.name === selectedVoiceName);
    
    intervalId = setInterval(() => {
      imageDisplay.src = images[imageIndex % images.length];
      imageIndex++;
    }, 500); // Change image every 2000 milliseconds (2 seconds)

    utterance.onend = () => {
      clearInterval(intervalId); // Clear the interval when speech ends
    };

    synth.speak(utterance);
  });
}