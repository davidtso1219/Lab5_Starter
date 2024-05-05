// explore.js

speechSynthesis.addEventListener('voiceschanged', init);

let utteranceId = 0;
let smileyElem;
let ttsElem;

function closeMouth(id) {
    if (id === utteranceId) {
        smileyElem.src = "assets/images/smiling.png";
    }
}

function openMouth() {
    smileyElem.src = "assets/images/smiling-open.png";
}

function init() {
    smileyElem = document.querySelector("#explore > img");
    ttsElem = document.getElementById("text-to-speak");

    ((select) => {
        const children = speechSynthesis.getVoices()
            .filter(({ lang }) => lang.startsWith("en"))
            .map(({ name, lang }) => {
                const option = document.createElement("option");

                option.setAttribute("value", name);
                option.setAttribute("alt", name);
                option.innerText = `${name} (${lang})`;

                return option;
            });
        select.replaceChildren(...children);

        document.querySelector("#explore > button").addEventListener("click", (event) => {
            const utterance = new SpeechSynthesisUtterance(ttsElem.value);
            utterance.voice = speechSynthesis.getVoices()
                .filter(({ name }) => name === select.value)[0];

            openMouth();
            speechSynthesis.speak(utterance);
            utterance.addEventListener("end", closeMouth.bind(this, ++utteranceId));
        });
    })(document.getElementById("voice-select"));
}
