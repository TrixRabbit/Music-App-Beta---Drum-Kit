var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
  var dog = document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    buttonAnimation(buttonInnerHTML);
    switch (buttonInnerHTML) {
      case ("w"):
        var crash = new Audio('/Users/Hasan/Desktop/Web Development/Drum Kit Starting Files/sounds/crash.mp3');
        crash.play();
        break;

      case ("s"):
        var kickBass = new Audio("/Users/Hasan/Desktop/Web Development/Drum Kit Starting Files/sounds/kick-bass.mp3");
        kickBass.play();
        break;

      case ("a"):
        var snare = new Audio("/Users/Hasan/Desktop/Web Development/Drum Kit Starting Files/sounds/snare.mp3")
        snare.play();
        break;

      case ("d"):
        var tom1 = new Audio("/Users/Hasan/Desktop/Web Development/Drum Kit Starting Files/sounds/tom-1.mp3")
        tom1.play();
        break;

      case ("j"):
        var tom2 = new Audio("sounds/tom-2.mp3")
        tom2.play();
        break;

      case ("k"):
        var tom3 = new Audio("/Users/Hasan/Desktop/Web Development/Drum Kit Starting Files/sounds/tom-3.mp3")
        tom3.play();
        break;

      case ("l"):
        var tom4 = new Audio("/Users/Hasan/Desktop/Web Development/Drum Kit Starting Files/sounds/tom-4.mp3")
        tom4.play();
        break;
      default:
        var crash = new Audio('/Users/Hasan/Desktop/Web Development/Drum Kit Starting Files/sounds/crash.mp3');
        audio.play();
    }


  });
}
document.addEventListener("keydown", function Event() {
  var eventC = console.log(event);
  buttonAnimation(event.code);
  function makeSound(){
  switch (event.code) {
    case ("KeyW"):
      var crash = new Audio('/Users/Hasan/Desktop/Web Development/Drum Kit Starting Files/sounds/crash.mp3');
      crash.play();
      break;

    case ("KeyS"):
      var kickBass = new Audio("/Users/Hasan/Desktop/Web Development/Drum Kit Starting Files/sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case ("KeyA"):
      var snare = new Audio("/Users/Hasan/Desktop/Web Development/Drum Kit Starting Files/sounds/snare.mp3")
      snare.play();
      break;

    case ("KeyD"):
      var tom1 = new Audio("/Users/Hasan/Desktop/Web Development/Drum Kit Starting Files/sounds/tom-1.mp3")
      tom1.play();
      break;

    case ("KeyJ"):
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play();
      break;

    case ("KeyK"):
      var tom3 = new Audio("/Users/Hasan/Desktop/Web Development/Drum Kit Starting Files/sounds/tom-3.mp3")
      tom3.play();
      break;

    case ("KeyL"):
      var tom4 = new Audio("/Users/Hasan/Desktop/Web Development/Drum Kit Starting Files/sounds/tom-4.mp3")
      tom4.play();
      break;
    default:
      var crash = new Audio('/Users/Hasan/Desktop/Web Development/Drum Kit Starting Files/sounds/crash.mp3');
      audio.play();
  }}
});

function buttonAnimation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
document.querySelector('activeButton').classList.Add(".pressed");
}
