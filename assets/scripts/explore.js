// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');

function populateVoices() {
    const voices = speechSynthesis.getVoices();
    //console.log(voices)
    const voiceOptions = voices.map(voice => 
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    ).join('');
    voiceSelect.innerHTML = voiceOptions;
}

if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
}
const textArea = document.getElementById('text-to-speak');
const img = document.querySelector('#explore img');
const button = document.querySelector('#explore button');

button.addEventListener('click', () => {
    const textToSpeak = textArea.value;
    const selectedVoiceName = voiceSelect.value;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const voices = speechSynthesis.getVoices();
    
    utterance.voice = voices.find(voice => voice.name === selectedVoiceName);
    utterance.onstart = () => {
        img.src = 'assets/images/smiling-open.png'; // Update with the correct image path
    };
    utterance.onend = () => {
        img.src = 'assets/images/smiling.png'; // Revert to original image after speaking
    };
    
    speechSynthesis.speak(utterance);
});

}
