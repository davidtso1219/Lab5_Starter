// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  window.speechSynthesis.addEventListener('voiceschanged', voicesChangedHandler);
  let voice_select = document.getElementById("voice-select");
  let face = document.querySelector("img");
  let curr_voice;
  let voices = [];
  let synth;
  let utterThis;
  function voicesChangedHandler() {
    // Fetch the list of voices
    voices = window.speechSynthesis.getVoices();
    synth = window.speechSynthesis;
    // Log the list of voices
    console.log(voices);
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-name", voices[i].name);
      voice_select.appendChild(option);
    }
  }

  voice_select.addEventListener('change', function() {
    const selectedOption = voice_select.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        curr_voice = voices[i];
      }
    }

  });
  let button = document.querySelector("button");
  let text_area = document.getElementById("text-to-speak");
  button.addEventListener('click', function() {
    utterThis = new SpeechSynthesisUtterance(text_area.value);
    utterThis.voice = curr_voice;
    utterThis.onstart = function(event) {
      console.log("start");
      face.src = "assets/images/smiling-open.png";
    };
  
    // Function to handle the 'end' event
    utterThis.onend = function(event) {
      console.log("end");
      face.src = "assets/images/smiling.png";
    };
    synth.speak(utterThis);
  });




}