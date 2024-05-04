// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const textArea = document.getElementById("text-to-speak");
  const speakButton = document.querySelector("button");
  const image = document.querySelector("[alt='Smiling face']");
  const voiceSelect = document.getElementById("voice-select");

  // Get all voices and add them to possible selection  
  function populateVoiceSelect() {
    if (typeof speechSynthesis === "undefined") {
      return;
  }
    const voices = speechSynthesis.getVoices();

    for (let i = 0; i < voices.length; i++){
      const option = document.createElement("option");
      
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceSelect();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceSelect;
  }

  // Speech part and changing smiley face
  speakButton.addEventListener("click", function() {
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    const voices = speechSynthesis.getVoices();
    for(let i = 0; i < voices.length; i++){
      if(voices[i].name === selectedOption){
        utterThis.voice = voices[i];
      }
    }

    speechSynthesis.speak(utterThis);
    image.src = "assets/images/smiling-open.png";
    image.alt = "Smiling face speaking";
  

    function onEnd() {
        image.src = "assets/images/smiling.png";
        image.alt = "Smiling face not speaking";
    } 
    utterThis.onend = onEnd;
  });
}