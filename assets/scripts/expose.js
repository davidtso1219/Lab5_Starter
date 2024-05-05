// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectElement = document.querySelector("select");
  const image = document.querySelector("img");
  const audio = document.querySelector("audio");

  selectElement.addEventListener("change", (event) => {
    image.src = `assets/images/${event.target.value}.svg`;
    audio.src = `assets/audio/${event.target.value}.mp3`;
  });

}