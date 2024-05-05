// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const talkButton = document.querySelector("button");
  const voiceChoice = document.getElementById("voice-select");
  let currentVoice = "";
  const synth = window.speechSynthesis;

  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    const voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  populateVoiceList();
    if (
      typeof speechSynthesis !== "undefined" &&
      speechSynthesis.onvoiceschanged !== undefined
    ) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  
  voiceChoice.addEventListener("change", (event) => {
    currentVoice = voiceChoice.selectedOptions[0].getAttribute("data-name");
  })

  // button onclick
  talkButton.addEventListener("click", (event) => {
    const utterance = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
    const voices = speechSynthesis.getVoices();
    for(let i = 0; i < voices.length; i++) {
      if(voices[i].name === currentVoice) {
        utterance.voice = voices[i];
      }
    }
    synth.speak(utterance);

    utterance.onstart = function() {
      document.querySelector("img").src = "./assets/images/smiling-open.png";
    }
    utterance.onend = function() {
      document.querySelector("img").src = "./assets/images/smiling.png";
    }
  });
}
