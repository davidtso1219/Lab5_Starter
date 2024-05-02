// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectVoice = document.getElementById("voice-select");
  const textInput = document.getElementById("text-to-speak");
  const talkButton = document.querySelector('button');
  const face = document.querySelector('img[src="assets/images/smiling.png"]');

  // Populate Voices Into Dropdown
  // If speechSynthesis does not exist on browser, do nothing
  if (typeof speechSynthesis === undefined) {
    alert("SpeechSynthesis is not supported on this browser.");
    return;
  }

  // Populate Voice Function
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    const voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      selectVoice.appendChild(option);
    }
  }

  // Once browser loads voices, call populateVoiceList
  speechSynthesis.onvoiceschanged = populateVoiceList;

  // Select Voice From Dropdown
  let selectedVoice = 0; // default
  selectVoice.addEventListener("change", (event) => {
    selectedVoice = speechSynthesis.getVoices()[selectVoice.selectedIndex - 1];
  });

  // Press to Talk Button
  talkButton.addEventListener("click", event => {
    const textSpeak = new SpeechSynthesisUtterance(textInput.value);
    textSpeak.voice = selectedVoice;
    speechSynthesis.speak(textSpeak);

    // Face Swap
    textSpeak.onstart = function() {
      face.src = "assets/images/smiling-open.png";
    };
    textSpeak.onend = function() {
      face.src = "assets/images/smiling.png";
    };
  });
}