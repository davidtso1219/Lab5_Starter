// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const textArea = document.getElementById('text-to-speak');
    const voiceSelect = document.getElementById('voice-select');
    const talkButton = document.querySelector('button');
    const faceImage = document.querySelector('img');

    function populateVoiceList() {
        if (typeof speechSynthesis === 'undefined') {
            return;
        }
        let voices = speechSynthesis.getVoices();

        for (let i = 0; i < voices.length; i++) {
            let option = document.createElement('option');
            option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
            if (voices[i].default) {
                option.textContent += ' — DEFAULT';
            }
            option.setAttribute('data-name', voices[i].name);
            option.setAttribute('data-lang', voices[i].lang);
            voiceSelect.appendChild(option);
        }
    }

    populateVoiceList();
    if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== null) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    function speak() {
        if (speechSynthesis.speaking) {
            console.error('speechSynthesis.speaking');
            return;
        }
        if (textArea.value !== '') {
            let utterance = new SpeechSynthesisUtterance(textArea.value);
            let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
            utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === selectedOption);
            
            utterance.onstart = function () {
                faceImage.src = 'assets/images/smiling-open.png';
            };
            utterance.onend = function () {
                faceImage.src = 'assets/images/smiling.png';
            };
            
            speechSynthesis.speak(utterance);
        }
    }

    talkButton.addEventListener('click', speak);
}