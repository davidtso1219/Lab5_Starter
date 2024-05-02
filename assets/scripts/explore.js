// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;

function init() {

  // Call populateVoiceList function
  populateVoiceList();

  speechSynthesis.onvoiceschanged = populateVoiceList;

  var btn = document.querySelector("button");
  btn.addEventListener("click", readText);

}

// Add voices to select list
function populateVoiceList() {
  var sel = document.getElementById("voice-select");
  let voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    sel.appendChild(option);
  }
}

// Read inputted text aloud
function readText(){
  let voices = synth.getVoices();
  var input = document.getElementById("text-to-speak");
  const speach = new SpeechSynthesisUtterance(input.value);

  var sel = document.getElementById("voice-select");
  const selectedOption = sel.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      speach.voice = voices[i];
    }
  }

  var speak_img = document.querySelector("img");

  speach.addEventListener('start', function() {
    speak_img.src = "assets/images/smiling-open.png";
  });

  speach.addEventListener('end', function() {
    speak_img.src = "assets/images/smiling.png";

  });

  synth.speak(speach);
}