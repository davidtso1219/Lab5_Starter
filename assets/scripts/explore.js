// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById("voice-select");
  const textToSpeech = document.getElementById("text-to-speak");
  const speechSynthesis = window.speechSynthesis;
  const emoji = document.getElementsByTagName("img")[0];
  const speechSynthesisUtterance = new SpeechSynthesisUtterance();
  const buttons = document.getElementsByTagName("button");

  speechSynthesis.onvoiceschanged = textHolderFromScript;

  voiceSelect.addEventListener("change", updateVoiceSelect);
  textToSpeech.addEventListener("input", speakNow);
  Array.from(buttons).forEach(button => button.addEventListener("click", speakAloud));

  speechSynthesisUtterance.addEventListener("start", talkingEmoji);
  speechSynthesisUtterance.addEventListener("end", smilingEmoji);

  function textHolderFromScript() {
    const voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; 
    voices.forEach(voice => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) option.textContent += " - DEFAULT";
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    });
  }

  function updateVoiceSelect() {
    const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute("data-name");
    speechSynthesisUtterance.voice = speechSynthesis.getVoices().find(voice => voice.name === selectedVoiceName);
  }

  function speakNow() {
    speechSynthesisUtterance.text = textToSpeech.value.trim();
  }

  function talkingEmoji() {
    emoji.src = "assets/images/smiling-open.png";
  }

  function smilingEmoji() {
    emoji.src = "assets/images/smiling.png";
  }

  function speakAloud() {
    speechSynthesis.speak(speechSynthesisUtterance);
  }
}
