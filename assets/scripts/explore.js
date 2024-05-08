// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

}
const synth = window.speechSynthesis;

var inputForm = document.querySelector("textarea");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");

let voices = [];

function populateVoiceList() {
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
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

let buttons = document.getElementsByTagName("button");
let button = buttons[0];

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("button check");
  let faceImages = document.getElementsByTagName("img");
  let faceImage = faceImages[0];

  let faceSrc = faceImage.src;
  faceImage.src = "assets/images/smiling-open.png";

  const utterThis = new SpeechSynthesisUtterance(inputForm.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }

  synth.speak(utterThis);

  setTimeout(() => {
    faceImage.src = faceSrc; 
  }, 3000);

 // inputTxt.blur();

});

