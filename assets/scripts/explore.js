window.addEventListener('DOMContentLoaded', init);

function init() {

  // Global variables
  let voices = [];
  const img = document.querySelector("img");
  const voiceSelect = document.getElementById("voice-select");
  const textToSpeak = document.getElementById("text-to-speak");
  const talkButton = document.querySelector("button");

  // Function to populate the voice dropdown
  function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = "<option value='' disabled selected>Select Voice:</option>";

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index; // Assigning index for simplicity
      voiceSelect.appendChild(option);
    });
  }

  // Populate voices initially and update on change
  window.addEventListener("load", function(){
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }
  });

  // Function to speak the text and change the image
  function speakText() {
    const text = textToSpeak.value;
    const selectedVoiceIndex = voiceSelect.value;

    if (selectedVoiceIndex === "" || text.trim() === "") {
      alert("Please select a voice and enter text to speak.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[selectedVoiceIndex];

    // Change to open mouth image when speaking
    img.src = "assets/images/simling-open.png";

    utterance.onstart = () => {
      // Change image to indicate speaking
      img.src = "assets/images/smiling-open.png";
    };

    utterance.onend = () => {
      // Change back to smiling face once speech is done
      img.src = "assets/images/smiling.png";
    };

    // Speak the utterance
    speechSynthesis.speak(utterance);
  }

  // Add event listener to button
  talkButton.addEventListener("click", speakText);
}