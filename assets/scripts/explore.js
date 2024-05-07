// explore.js
var voices;
var voiceChoice;
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  voices = document.getElementById("voice-select");
  speechSynthesis.addEventListener("voiceschanged", function(){
  voiceChoice = speechSynthesis.getVoices();
    
  function addVoices(curr){
    var addedVoice = document.createElement("option");
    addedVoice.value = curr.name;
    addedVoice.textContent = curr.name.concat(" (", curr.lang, ")");
    voices.add(addedVoice); 
  }
  voiceChoice.forEach(addVoices); 
  });

  const synth = window.speechSynthesis;
  var input = document.getElementById("text-to-speak");
  const button = document.querySelector("button");
  function speak(){
    const toUtter = new SpeechSynthesisUtterance(input.value);
    const selectedVoiceName = voices.value;
    const selectedVoice = voiceChoice.find(voice => voice.name === selectedVoiceName);
    toUtter.voice = selectedVoice; 
    synth.speak(toUtter);
    let image = document.querySelector("img");
    image.src = "assets/images/smiling-open.png";
    toUtter.addEventListener("end", function(){
      image.src = "assets/images/smiling.png";
    });
  }
  button.addEventListener("click", speak);
}