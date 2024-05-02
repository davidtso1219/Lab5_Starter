// expose.js

document.addEventListener('DOMContentLoaded', function(){
  let imageNames = ["air-horn", "car-horn", "party-horn"];
  let window = document.getElementById('window');
  let dropdown = document.getElementById("horn-select");
  var image = document.getElementById("horn-image");
  

  dropdown.addEventListener("change", function(){
    var selectedOpt = dropdown.value;
    var imagePath = "";

    if(selectedOpt == "air-horn"){
      imagePath = "assets/images/air-horn.svg"
    }
    else if(selectedOpt == "car-horn"){
      imagePath = "assets/images/car-horn.svg";
    }
    else if(selectedOpt == "party-horn"){
      imagePath = "assets/images/party-horn.svg";
    }
    else{
      imagePath = "assets/images/no-image.png"; 
    }
    image.src = imagePath;
  });

  // function init() {
  //     // TODO

      
  // }
    
    function updateImage(){
      document.body.style.soundImage = images[currentOption]//need to find a way to integrate witj option selected
    }

});