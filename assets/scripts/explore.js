// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const synth = window.speechSynthesis;

  const userInput = document.getElementById('text-to-speak');
  const select = document.getElementById('voice-select');
  const button = document.querySelector('button');
  const img = document.querySelector('img');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();


 for(let i = 0; i < voices.length;i++) {
  const option = document.createElement("option");
  option.textContent = `${voices[i].name} (${voices[i].lang})`;
  option.setAttribute("data-lang", voices[i].lang);
  option.setAttribute("data-name", voices[i].name);
  select.appendChild(option);
 }
  

  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }



button.addEventListener('click', () => {
  const utterThis  = new SpeechSynthesisUtterance(userInput.value);
  const selectedOption  = select.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
  if (voices[i].name === selectedOption) {
    utterThis.voice = voices[i];
    
  }
  }


  utterThis.addEventListener("start", () => {
    img.src = 'assets/images/smiling-open.png';
  });

  utterThis.addEventListener("end", () => {
    img.src = 'assets/images/smiling.png';
  });

  synth.speak(utterThis);

});

}