// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let img = document.querySelector("[src='assets/images/smiling.png']");
  let txtarea = document.getElementById("text-to-speak");
  let voiceSelector = document.getElementById("voice-select");
  let btn = document.querySelector("button");

  // Populate the voice list using the SpeechSynthesis API
  function populateVoiceList() {
    if(typeof speechSynthesis === 'undefined') {
      return;
    }
    const voices = speechSynthesis.getVoices();
    for(let i = 0; i < voices.length; i++) {  
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelector.appendChild(option);
    }
  }

  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  // Speak the text in the textarea when the button is clicked
  btn.addEventListener("click", speak);
  function speak(e){
    const utterance = new SpeechSynthesisUtterance(txtarea.value);
    const selectedOption = voiceSelector.selectedOptions[0].getAttribute("data-name");
    const voices = speechSynthesis.getVoices();
    for(let i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    speechSynthesis.speak(utterance);
    img.src = "assets/images/smiling-open.png";
    img.alt = "smiling-open";

    function onEnd(){
      img.src = "assets/images/smiling.png";
      img.alt = "smiling";
    }
    utterThis.onend = onEnd;
  }
}