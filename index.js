function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.toggle("pressed");
  setTimeout(function () {
    activeButton.classList.toggle("pressed");
  }, 100);
}

function makeSound(buttonInnerHTML) {
  switch (buttonInnerHTML) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

let buttonsLength = document.querySelectorAll(".drum").length;
for (let i = 0; i < buttonsLength; i++) {
  //Adding Event for Mouse Clicks' checker for the specific (ith) button
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Adding Event of keyboard keys' checker for the entire html document
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
