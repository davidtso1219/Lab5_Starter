// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector("select");
  const textArea = document.querySelector("textarea");
  const pressToTalk = document.querySelector("button");
  const emojiFace = document.querySelector("img");

  let voices = [];

  // Fill voices list and append as options for select element, need event listener to load voices
  synth.addEventListener("voiceschanged", () => {
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
  })

  // Speak when clicking play button
  pressToTalk.addEventListener('click', function(){
    // Get the text and create utterance object
    let textToSpeech = textArea.value;
    const utterThis = new SpeechSynthesisUtterance(textToSpeech);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    // Find the corresponding voice and set that as the voice
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);

    // Make mouth open and close
    utterThis.onstart = () => {
      emojiFace.setAttribute('src', 'assets/images/smiling-open.png');
    }
    utterThis.onend = () => {
      emojiFace.setAttribute('src', 'assets/images/smiling.png');
    }
  })
}