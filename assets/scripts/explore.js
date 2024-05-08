// explore.js

window.addEventListener('DOMContentLoaded', init);

let voices;
var synth;
const voiceSelect = document.getElementById("voice-select");
const inputTxt = document.getElementById("text-to-speak");
const smileyFace = document.querySelector("img");

function init() {
  synth = window.speechSynthesis;
  const isSpeaking = synth.speaking;

  synth.addEventListener("voiceschanged", () => {
    voices = synth.getVoices();

    for(let i = 0;i < voices.length;i++){
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  });  

  document.querySelector("button").addEventListener('click', function(){
    smileyFace.src = "assets/images/smiling-open.png";
    Speak();
  })
}

function Speak(){
  let utterance = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
    }
  }
  synth.speak(utterance);
  inputTxt.blur();
  console.log(synth.speaking);

  utterance.addEventListener("end", (event) => {
    smileyFace.src = "assets/images/smiling.png";
  });
}