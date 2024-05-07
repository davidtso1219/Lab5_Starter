function init() {
  window.speechSynthesis.onvoiceschanged = () => {
    const dropdown = document.getElementById('voice-select');
    dropdown.innerHTML = ''; // Clear existing options

    const voices = speechSynthesis.getVoices();

    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = voice.name;
      option.value = voice.name;
      dropdown.appendChild(option);
    });
  };

  // Trigger the onvoiceschanged event to populate the dropdown initially
  window.speechSynthesis.onvoiceschanged();

  const btn = document.querySelector('button');
  const faceImage = document.querySelector('img');

  btn.addEventListener('click', () => {
    const text = document.getElementById('text-to-speak').value;
    const selectedVoice = document.getElementById('voice-select').value;
    speak(text, selectedVoice, faceImage);
  });
}

function speak(text, voiceName, faceImage) {
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  const selectedVoice = voices.find(voice => voice.name === voiceName);
  utterance.voice = selectedVoice;

  faceImage.src = 'assets/images/smiling-open.png';
  utterance.onend = () => {
    // Change the face image back to normal
    faceImage.src = 'assets/images/smiling.png';
  };

  speechSynthesis.speak(utterance);
}

// Call init when the DOM is loaded
window.addEventListener('DOMContentLoaded', init);