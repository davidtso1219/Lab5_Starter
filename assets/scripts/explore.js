// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const voiceSelect = document.getElementById('voice-select');

function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i<voices.length; i++) {
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
if (
  typeof speechSynthesis !== "undefined" &&
  speechSynthesis.onvoiceschanged !== undefined
) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}


 const textArea = document.getElementById('text-to-speak');
 const img = document.querySelector('#explore img');
 const button = document.querySelector('#explore button');

button.addEventListener('click', () => {
  
  const speaker = new SpeechSynthesisUtterance(textArea.value);
  const voices = speechSynthesis.getVoices();
  
  speaker.voice = voices.find(voice => voice.name === voiceSelect.value);
  speaker.onstart = () => img.src = 'assets/images/smiling-open.png'; 
  speaker.onend = () => img.src = 'assets/images/smiling.png';
  speechSynthesis.speak(speaker);
});

 }
