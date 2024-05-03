window.addEventListener('DOMContentLoaded', init);

function init() {
  let voiceSelect = document.getElementById("voice-select");

  // Function to populate the voice dropdown with available voices
  function populateVoiceList() {
    let voices = speechSynthesis.getVoices();

    // Clear existing options
    voiceSelect.innerHTML = '';

    // Add default option
    let defaultOption = document.createElement('option');
    defaultOption.value = 'select';
    defaultOption.textContent = 'Select Voice';
    defaultOption.selected = true; // Set as default selected
    voiceSelect.appendChild(defaultOption);

    // Add new options for each voice
    voices.forEach(function(voice, index) {
      let option = document.createElement('option');
      option.value = index;
      option.textContent = voice.name + ' (' + voice.lang + ')';

      voiceSelect.appendChild(option);
    });
  }

  // Populate voice dropdown on page load
  populateVoiceList();

  // Update voice list whenever voices change
  speechSynthesis.onvoiceschanged = function() {
    populateVoiceList();
  };
}
