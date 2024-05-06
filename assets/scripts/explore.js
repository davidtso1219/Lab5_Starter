// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO
  const synthesis = window.speechSynthesis;
  const voices_select = document.getElementById("voice-select");
  const input_text = document.getElementById("text-to-speak");
  const btn = document.getElementsByTagName("button")[0];
  const pic = document.getElementsByTagName("img")[0];
  var voices = []

  synthesis.onvoiceschanged = function() {
    voices = synthesis.getVoices();

    //fill out the language to the select box
    for(var i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voices_select.appendChild(option);
    }

    const utter = new SpeechSynthesisUtterance("");

    //open smile when start to speak
    utter.addEventListener("start", function() {
      pic.setAttribute("src", "./assets/images/smiling-open.png");
    })

    //smile when end to speak
    utter.addEventListener("end", function() {
      pic.setAttribute("src", "./assets/images/smiling.png");
    })

    //Speak the word when click the button
    btn.addEventListener("click", function() {
      utter.text = input_text.value;
      const select_option = voices_select.selectedOptions[0].getAttribute("data-name");
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === select_option) {
          utter.voice = voices[i];
        }
      }
      synthesis.speak(utter);
    })
  }


}