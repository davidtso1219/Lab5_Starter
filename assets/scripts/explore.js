// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  const talkButton = document.querySelector('button');
  talkButton.addEventListener('click', pressPlay);
}

function pressPlay() {
  var textareaElement = document.getElementById('text-to-speak');
  var text = textareaElement.value;
  //console.log("Text in textarea: ", text);

  const voiceSelect = document.getElementById('voice-select');
  const selectedOption = voiceSelect.selectedOptions[0];
  const selectedName = selectedOption.getAttribute('data-name');
  const selectedLang = selectedOption.getAttribute('data-lang');
  //console.log("Selected voice: ", selectedName, selectedLang);


  const speaker = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();

  speaker.voice = voices.find(voice => voice.name === selectedName && voice.lang === selectedLang);
  const img = document.querySelector('img');
  speaker.onstart = () => {
    //console.log("Speech has started");
    img.src = 'assets/images/smiling-open.png';
  };
  speaker.onend = () => {
    //console.log("Speech has ended");
    img.src = 'assets/images/smiling.png';
  };
  speechSynthesis.speak(speaker);
}

function populateVoiceList() {
  const voiceSelect = document.getElementById('voice-select');
  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const voice = voices[i];
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  };
}
