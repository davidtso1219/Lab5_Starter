// explore.js
// resources: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;

function init() {
  // populate the select options on page load
  let availableVoices = [];
  const voiceDropdown = document.querySelector('select');

  function populateVoiceOptions() {
    availableVoices = synth.getVoices();
    for (let i = 0; i < availableVoices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${availableVoices[i].name} (${availableVoices[i].lang})`;
      if (availableVoices[i].default) {
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-lang', availableVoices[i].lang);
      option.setAttribute('data-name', availableVoices[i].name);
      voiceDropdown.appendChild(option);
    }
  }

  populateVoiceOptions();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceOptions;
  }

  const textInput = document.getElementById('text-to-speak');

  const speakButton = document.querySelector('button');

  speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoice = voiceDropdown.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < availableVoices.length; i++) {
      if (availableVoices[i].name === selectedVoice) {
        utterance.voice = availableVoices[i];
        break;
      }
    }

    const faceImage = document.querySelector('img');
    faceImage.src = 'assets/images/smiling-open.png';

    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}
