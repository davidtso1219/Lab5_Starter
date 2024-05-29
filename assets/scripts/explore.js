window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeakTextarea = document.getElementById('text-to-speak');
  const pressToTalkButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');

  // Check if Speech Synthesis is supported by the browser
  if ('speechSynthesis' in window) {
    loadVoices(); // Initially load voices
    speechSynthesis.onvoiceschanged = loadVoices; // Update voices when they change

    pressToTalkButton.addEventListener('click', speakText);
  } else {
    console.error('Speech Synthesis is not supported by your browser');
  }

  function loadVoices() {
    const voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; // Clear existing options
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  function speakText() {
    const textToSpeak = textToSpeakTextarea.value;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const selectedVoiceName = voiceSelect.value;
    const voices = speechSynthesis.getVoices();
    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);

    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.onstart = () => faceImage.src = 'assets/images/smiling-open.png';
      utterance.onend = () => faceImage.src = 'assets/images/smiling.png';

      speechSynthesis.speak(utterance);
    } else {
      console.error('Selected voice not found');
    }
  }
}