// explore.js

window.addEventListener('DOMContentLoaded', init);

const voice_source = window.SpeechSynthesis;

function init() {
  // TODO
  const button = document.getElementById("start-talking");
  button.addEventListener("click", () => smilingFace());

  const voiceSelector = document.getElementById("voice-select");
  const voice_options = document.getElementById("voice-select");

  voice_options.addEventListener("click", () => populateVoices());

  //voice_options.options[voice_options.options.length] = new Option('Text 1', 'Value1');


  const speakingText = document.getElementById("text-to-speak");

  speakingText.addEventListener("change", () => speakingText());


}

function smilingFace(){
  const picture = document.getElementById("smiling-face");
  picture.src = "assets/images/smiling-open.png";

  speakingText();

  picture.src = "assets/images/smiling.png";
}

/*function populateVoices() {
  document.getElementById("voice-selector").options[document.getElementById("voice-selector").options.length] = new Option('Text 1', 'Value1');
}*/




function speakingText() {
  const speak_text = document.getElementById("text-to-speak").value;
  //const utterance = new SpeechSynthesisUtterance(speak_text);
  if(speak_text == ''){
    return;
  }
  const selectOption = document.getElementById("voice-select").value;
  if(selectOption == "select"){
    return;
  }
  const utterThis = new SpeechSynthesisUtterance(speak_text);
  const selectedOption =
    document.getElementById("voice-select").selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  speak_text.blur();
  return;

}


const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

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

inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);

  inputTxt.blur();
};


input.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(speak_text);
  const selectedOption =
    document.getElementById("voice-select").selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  inputTxt.blur();
};