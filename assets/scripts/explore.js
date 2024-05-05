// explore.js

window.addEventListener('DOMContentLoaded', init);
// Requirements:

// On page load, all of the available voices that you can use for your SpeechSynthesizer should be loaded and populate the “Select Voice” dropdown. (These are browser specific, so you might get different ones browser to browser).
// When you click the “Press to Talk” button, the following should happen:
// The text that you have typed into the “Text to speak here” textarea should be spoken out loud using the voice that you have selected
// Only while the synthesizer is speaking, the face should swap to being open mouthed (included in the images folder)
const synth = window.speechSynthesis;
let voices = [];

speechSynthesis.addEventListener('voiceschanged', () => {
  const voiceSelect = document.getElementById('voice-select')
  voices = synth.getVoices()
  voices.forEach(voice => {
    const option = document.createElement('option')
    option.textContent = `${voice.name} (${voice.lang})`
    option.setAttribute('data-lang', voice.lang)
    option.setAttribute('data-name', voice.name)
    voiceSelect.appendChild(option)
  })
});

function init() {
  const img = document.querySelector('img')
  document.querySelector('button').addEventListener('click', () => {
    const text = document.getElementById('text-to-speak').value
    const utter = new SpeechSynthesisUtterance(text)
    const selectedVoice = document.getElementById('voice-select').selectedOptions[0].getAttribute('data-name')
    utter.voice = voices.find(voice => voice.name === selectedVoice)
    img.src = 'assets/images/smiling-open.png'
    synth.speak(utter)
    utter.addEventListener('end', () => {
      img.src = 'assets/images/smiling.png'
    })
  })
}