// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  const voiceSelect = document.querySelector("select");
  const speakButton = document.querySelector("button");
  const textBox = document.querySelector("textarea");

  let voices = [];
  //voicelist populating code from https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis#examples
  function populateVoiceList() {
    voices = synth.getVoices();
    console.log(voices.length);
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      
      //changed this line to make grabbing the right voice object easier for tts method.
      option.textContent = i + ". " + `${voices[i].name} (${voices[i].lang})`;

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

  speakButton.addEventListener("click", function tts(){
    let textToSpeak = textBox.value;

    let stopIndex = voiceSelect.value.indexOf('.');
    let voiceToUse = voices.at(voiceSelect.value.substring(0, stopIndex));

    let utterance = new SpeechSynthesisUtterance();
    utterance.voice = voiceToUse;
    utterance.text = textToSpeak;
    
    synth.speak(utterance);
  });
}