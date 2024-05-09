// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  let voiceMenu = document.getElementById("voice-select");
  const playVoiceBtn = document.querySelector("button");
  const textBox = document.getElementById("text-to-speak");
  let image = document.querySelector("img");
  let currentVoice = NaN;
  let textToSpeak = "";
  let voices = [];
  // console.log(playVoiceBtn);
  synth.addEventListener("voiceschanged", (event) => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement("option");
      option.textContent = voices[i].name;
      option.value = i;
      voiceMenu.appendChild(option);
    }
    // console.log(voices[0]);
  });

  textBox.addEventListener("input", (event) => {
    textToSpeak = event.target.value;
  });

  voiceMenu.addEventListener("change", (event) => {
    currentVoice = event.target.value;
  });

  playVoiceBtn.addEventListener("click", (event) => {
    const speaker = new SpeechSynthesisUtterance(textToSpeak);
    speaker.voice = voices[currentVoice];
    synth.speak(speaker);
    speaker.onstart = (event) => {
      image.src = "assets/images/smiling-open.png";
    }
    speaker.onend = (event) => {
      image.src = "assets/images/smiling.png";
    }
  });
}
