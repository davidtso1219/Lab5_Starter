// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
  // all the elements that need to be accessed
  let img = document.querySelector("[src='assets/images/no-image.png']");
  let horn = document.getElementById("horn-select");
  let vol = document.getElementById("volume");
  let vollogo = document.querySelector("[alt='volume level 2']");
  let aud = document.getElementsByClassName("hidden")[0];
  let btn = document.querySelector("button");
  let jsConfetti = new JSConfetti();

  // event listeners for the horn and volume
  horn.addEventListener("change", hornchg);
  function hornchg(e) {
    img.src = "assets/images/" + e.target.value + ".svg";
    img.alt = e.target.value + "img";
    aud.src = "assets/audio/" + e.target.value + ".mp3";
  }

  // event listener for the volume
  vol.addEventListener("change", volchg);
  function volchg(e) {
    if (e.target.value == 0) {
      vollogo.src = "assets/icons/volume-level-0.svg";
      vollogo.alt = "volume level 0";
      aud.volume = 0;
    }
    else if (e.target.value < 33) {
      vollogo.src = "assets/icons/volume-level-1.svg";
      vollogo.alt = "volume level 1";
      aud.volume = e.target.value / 100;
    }
    else if (e.target.value < 66) {
      vollogo.src = "assets/icons/volume-level-2.svg";
      vollogo.alt = "volume level 2";
      aud.volume = e.target.value / 100;
    }
    else {
      vollogo.src = "assets/icons/volume-level-3.svg";
      vollogo.alt = "volume level 3";
      aud.volume = e.target.value / 100;
    }
  }

  // event listener for the button
  btn.addEventListener("click", play);
  function play(e) {
    aud.play();
    if (horn.value == "party-horn"){
      jsConfetti.addConfetti();
    }
  }
}