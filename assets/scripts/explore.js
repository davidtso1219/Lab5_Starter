// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  function populateVoiceList() {
    const voices = window.speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('voice-select');
    voiceSelect.innerHTML = '';

    voices.forEach(function(voice) {
        const option = document.createElement('option');
        option.textContent = voice.name + ' (' + voice.lang + ')';
        option.setAttribute('value', voice.name);
        voiceSelect.appendChild(option);
    });
}

function speakText() {
    const textToSpeak = document.getElementById('text-to-speak').value;
    const selectedVoice = document.getElementById('voice-select').value;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.name === selectedVoice);
    utterance.onstart = function(event) {
        const smilingFace = document.querySelector('img');
        smilingFace.src = 'assets/images/smiling-open.png';
    };
    utterance.onend = function(event) {
        const smilingFace = document.querySelector('img');
        smilingFace.src = 'assets/images/smiling.png';
    };

    window.speechSynthesis.speak(utterance);
}
populateVoiceList();

const talkButton = document.querySelector('button');
talkButton.addEventListener('click', speakText);
}