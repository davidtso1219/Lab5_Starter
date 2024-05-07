// explore.js

window.addEventListener('DOMContentLoaded', init);

  function init() {
      const img = document.querySelector('img');
      const textArea = document.getElementById('text-to-speak');
      const voiceSelect = document.getElementById('voice-select');
      const button = document.querySelector('button');
      let voices = [];
  
      function populateVoiceList() {
          voices = speechSynthesis.getVoices();
          voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
          voices.forEach((voice) => {
              const option = document.createElement('option');
              option.textContent = `${voice.name} (${voice.lang})`;
              option.setAttribute('data-name', voice.name);
              option.setAttribute('data-lang', voice.lang);
              voiceSelect.appendChild(option);
          });
      }
  
      populateVoiceList();
      if (speechSynthesis.onvoiceschanged !== undefined) {
          speechSynthesis.onvoiceschanged = populateVoiceList;
      }
  
      button.addEventListener('click', () => {
          const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
          const utterance = new SpeechSynthesisUtterance(textArea.value);
          const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
          
          utterance.voice = selectedVoice;
          utterance.onstart = () => {
              img.src = 'assets/images/smiling-open.png';
          };
          utterance.onend = () => {
              img.src = 'assets/images/smiling.png';
          };
          speechSynthesis.speak(utterance);
      });
  } 
