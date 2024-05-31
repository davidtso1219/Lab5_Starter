// explore.js
// resources: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

window.addEventListener("DOMContentLoaded", init);

function init() {
  const synth = window.speechSynthesis;
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('img');
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})${voice.default ? ' — DEFAULT' : ''}`;
      option.setAttribute('data-name', voice.name);
      option.setAttribute('data-lang', voice.lang);
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  function speak() {
    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }
    if (textArea.value !== '') {
      const utterance = new SpeechSynthesisUtterance(textArea.value);
      const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
      utterance.voice = voices.find(voice => voice.name === selectedVoiceName);

      utterance.onstart = () => {
        faceImage.src = 'assets/images/smiling-open.png';
      };
      utterance.onend = () => {
        faceImage.src = 'assets/images/smiling.png';
      };

      synth.speak(utterance);
    }
  }

  speakButton.addEventListener('click', speak);
}
