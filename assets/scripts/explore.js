window.addEventListener('DOMContentLoaded', init);

function init() {
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }
    const speakButton = document.querySelector('#explore button');
    speakButton.addEventListener('click', Voice);   
}

function populateVoiceList() {
  
  const voiceSelect = document.getElementById('voice-select');
  voiceSelect.innerHTML = '';
  const voices = window.speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    //option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.textContent = `${voices[i].name}`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    // option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }

}

function Voice() {
  //event.preventDefault();
  const textToSpeak = document.getElementById('text-to-speak').value;
  const voiceSelect = document.getElementById('voice-select');
  const selected = voiceSelect.value;

  const utterTxt = new SpeechSynthesisUtterance(textToSpeak);
  const voices = window.speechSynthesis.getVoices();

  let curr = null;
  for (let i = 0; i < voices.length; i++) {
      if (voices[i].name == selected) {
          curr = voices[i];
          break;
      }
  }
  utterTxt.voice = curr;
  console.log(curr);

  const face = document.querySelector('#explore img');
    utterTxt.onend = function() {
      face.src = 'assets/images/smiling.png';
  };
    
  utterTxt.onstart = function() {
      face.src = 'assets/images/smiling-open.png';
  };

 
  window.speechSynthesis.speak(utterTxt);

}

