// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var relPath = "assets/"
  var select = document.getElementById("horn-select");
  var audio = document.querySelector(".hidden");
  function selectHandler(){
    let currOption = select.value;
    //updateimage to curroption image and sound
    let image = document.querySelector("img");
    image.src = relPath.concat("images/", currOption, ".svg");
    audio.src = relPath.concat("audio/", currOption, ".mp3");
  }
  select.addEventListener("change", selectHandler);
  
  
  var vol = document.getElementById("volume");
  function volumeHandler(){
    let volImg = document.getElementById("volume-controls").querySelector("img");
    audio.volume = vol.value / 100;
    if(vol.value >= 67){
      volImg.src = relPath.concat("icons/volume-level-3.svg");
    } else if(vol.value >= 33){
      volImg.src = relPath.concat("icons/volume-level-2.svg");
    } else if(vol.value >= 1){
      volImg.src = relPath.concat("icons/volume-level-1.svg");
    } else{
      volImg.src = relPath.concat("icons/volume-level-0.svg");
    } 
  }
  vol.addEventListener("input", volumeHandler);

  //button
  var button = document.querySelector("button");
  const jsConfetti = new JSConfetti();
  button.addEventListener("click", function(){
    audio.play();
    jsConfetti.addConfetti();
  });
}