// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var selector = document.getElementById('horn-select');
  var audio = document.querySelector('audio');

  selector.addEventListener('change', function(){
      var selectedHorn = selector.value; 
      var image = document.querySelector('img');

      image.src = 'assets/images/' + selectedHorn + '.svg';
      audio.src = 'assets/audio/' + selectedHorn + '.mp3';
  });

  var button = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  button.addEventListener('click', function(){
    if(selector.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
    audio.play();
  });

  var slider = document.querySelector('input[type="range"]');
  var speakerImage = document.getElementById('volume-controls').querySelector('img');

  slider.addEventListener('input', function(){
      var value = Number(slider.value);
      audio.volume = value / 100;
      if(value >= 67){
        speakerImage.src = 'assets/icons/volume-level-3.svg';
      }
      else if(value >= 33){
        speakerImage.src = 'assets/icons/volume-level-2.svg';
      }
      else if(value >= 1){
        speakerImage.src = 'assets/icons/volume-level-1.svg';
      }
      else {
        speakerImage.src = 'assets/icons/volume-level-0.svg';
      }
  });


}