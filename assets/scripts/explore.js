// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  var voiceSelect = document.getElementById("voice-select");
  var text = document.getElementById("text-to-speak");

  var button = document.querySelector("button");
  var image = document.querySelector('img');


  var synthesiser = window.speechSynthesis;

  synthesiser.onvoiceschanged = function() 
  {
    let voices = window.speechSynthesis.getVoices();

    voices.forEach((voice) => {

      var option = document.createElement("option");

      option.textContent = `${voice.name} (${voice.lang})`;

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);

      voiceSelect.appendChild(option);


    });
  };

  text.addEventListener("input", function () 
  {

    text.textContent = this.value;
  })



  button.addEventListener("click", function() 
  {

    var speakWords = new SpeechSynthesisUtterance(text.value);

    var voices = window.speechSynthesis.getVoices();


    speakWords.voice = voices[voiceSelect.value];

    image.src = "assets/images/smiling-open.png";

    

    window.speechSynthesis.speak(speakWords);

    speakWords.onend = () => {
      image.src = "assets/images/smiling.png";
    };


  });



}
