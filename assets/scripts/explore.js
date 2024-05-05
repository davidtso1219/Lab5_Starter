// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  var getButton = document.querySelector("button");
  var getText = document.getElementById("text-to-speak");
  var getImg = document.querySelector('img[alt="Smiling face"]');
  var utterance = new SpeechSynthesisUtterance();
  var voiceSelect = document.getElementById("voice-select");
  let voices = [];
  voices = synth.getVoices();
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
      option.setAttribute("value", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  getButton.addEventListener('click', function(){
    getImg.src = "assets/images/smiling-open.png"
    //var utterance = new SpeechSynthesisUtterance(getText.value);
    //speechSynthesis.speak(utterance);
    const utterThis = new SpeechSynthesisUtterance(getText.value);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    } 
      synth.speak(utterThis);
  
  })

  function checkSpeech() {
    if(speechSynthesis.speaking){
      getImg.src = "assets/images/smiling-open.png"
    }else{
      getImg.src = "assets/images/smiling.png"
    }
}

// Call checkVariable() every second
var intervalId = setInterval(checkSpeech, 500); // 1000 milliseconds = 1 second
}