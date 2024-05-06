document.addEventListener("DOMContentLoaded", function () {
  populateVoiceList();
  document.querySelector("button").addEventListener("click", function () {
    
    var textToSpeak = document.getElementById("text-to-speak").value;

    
    var selectedVoiceIndex = document.getElementById("voice-select").selectedIndex;
    var selectedVoice = window.speechSynthesis.getVoices()[selectedVoiceIndex];

    
    var utterance = new SpeechSynthesisUtterance(textToSpeak);

    
    utterance.voice = selectedVoice;

    
    utterance.onstart = function() {
      
      document.querySelector("img").src = "assets/images/smiling-open.png";
    };

    
    utterance.onend = function() {
      
      document.querySelector("img").src = "assets/images/smiling.png";
    };

    
    window.speechSynthesis.speak(utterance);
  });
});

function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const select = document.getElementById("voice-select");
  select.innerHTML = "";

  function updateVoices() {
    const voices = speechSynthesis.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
  
      option.setAttribute("value", voice.name);
      select.appendChild(option);
    });
  }

  updateVoices();
  speechSynthesis.onvoiceschanged = updateVoices;
}
