// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let voice = document.getElementById("voice-select");

  function addVoices() {
    const voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voice.appendChild(option);
    }
  }
  addVoices();
  speechSynthesis.onvoiceschanged = addVoices;

  let button = document.querySelector("button");
  let input = document.querySelector("textarea");
  let smiley = document.querySelector("img");

  button.addEventListener("click", function () {
    const voices = speechSynthesis.getVoices();
    const utter = new SpeechSynthesisUtterance(input.value);
    const selectedOption = voice.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
            utter.voice = voices[i];
        }
    }
    speechSynthesis.speak(utter);
    smiley.src = "assets/images/smiling-open.png";

    utter.onend = function () { smiley.src = "assets/images/smiling.png"; };
  });

}