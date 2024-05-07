// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const select = document.querySelector("#voice-select");

function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const voices = speechSynthesis.getVoices();

  let i = "0";
  while(i < voices.length){
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    select.appendChild(option);

    i++;
  }
}

populateVoiceList();
if (typeof speechSynthesis !== "undefined" && 
speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

 const text = document.querySelector("#text-to-speak");
 const img = document.querySelector("img");
 const but = document.querySelector("button");

function speakText(){
  const textToSpeak = text.value;
  const selectedVoiceName = select.value;
  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  const voices = speechSynthesis.getVoices();

  utterance.voice = voices.find(voice => voice.name === selectedVoiceName);
  utterance.onstart = () => {
    img.src = 'assets/images/smiling-open.png'; 
  };
  utterance.onend = () => {
    img.src = 'assets/images/smiling.png';
  };

  speechSynthesis.speak(utterance);
}

but.addEventListener('click', speakText); 

}