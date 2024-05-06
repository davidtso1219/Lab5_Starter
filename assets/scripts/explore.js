// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const similling = document.querySelector('#explore img');
  const button = document.querySelector('button');
  const voiceSelect = document.getElementById('voice-select');
  const textSpeak = document.getElementById('text-to-speak');
  let voices = [];

  function populateVoiceList() {

    voices = synth.getVoices().sort((a, b) => a.name.localeCompare(b.name)); 

    for(let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  

  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  } else {
    populateVoiceList();
  }


  button.addEventListener('click', function() {
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute("data-name");
    const utterThis = new SpeechSynthesisUtterance(textSpeak.value);
    utterThis.voice = voices.find(voice => voice.name === selectedVoice);

    if(selectedVoice === null) {
      return;
    }

    utterThis.onstart = () => { similling.src = 'assets/images/smiling-open.png'; };
    utterThis.onend = () => { similling.src = 'assets/images/smiling.png'; };

    synth.speak(utterThis);
    textSpeak.blur();
  });
}