window.addEventListener('DOMContentLoaded', init);

function init() {
  const img = document.querySelector('img');
  const select = document.getElementById('voice-select');
  const button = document.querySelector('button');
  const textarea = document.getElementById('text-to-speak');
  const synth = window.speechSynthesis;

  let voices = [];

  // This function will attempt to populate the voice list
  function populateVoiceList() {
    voices = synth.getVoices();
    if (voices.length > 0) {
      select.innerHTML = '<option value="select" disabled selected>Select Voice:</option>'; // Clear and reset default
      voices.forEach(voice => {
        const option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        if (voice.default) {
          option.textContent += ' -- DEFAULT';
        }
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        select.appendChild(option);
      });
    } else {
      // Schedule another attempt if voices are still not loaded
      setTimeout(populateVoiceList, 100);
    }
  }

  // Trigger voice loading by synth.speak() hack
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  // Try to populate voices immediately
  populateVoiceList();

  // Hack: force loading voices by initiating a speech synthesis
  if (voices.length === 0) {
    const dummyUtterance = new SpeechSynthesisUtterance('');
    synth.speak(dummyUtterance);
    synth.cancel(); // Immediately cancel the speech synthesis
  }

  button.addEventListener('click', function() {
    const text = textarea.value;
    const voiceName = select.selectedOptions[0].getAttribute('data-name');
    speak(text, voiceName);
  });

  function speak(text, voiceName) {
    if (synth.speaking) {
      console.error('SpeechSynthesis is already speaking.');
      return;
    }
    if (text !== '') {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voices.find(voice => voice.name === voiceName);
      utterance.onstart = function() {
        img.src = 'assets/images/smiling-open.png';
      };
      utterance.onend = function() {
        img.src = 'assets/images/smiling.png';
      };
      synth.speak(utterance);
    }
  }
}
