let counter = 0;
let decreaseNumber = document.getElementById("decrease-number");
let increaseNumber = document.getElementById("increase-number");
let startNumber = document.getElementById("start-number");

function minus() {
  if (counter <= 0) {
    return;
  } else {
    counter--;
    startNumber.textContent = counter;
  }
}

function plus() {
  if (counter === 49) {
    counter++;
    startNumber.textContent = "your patience is your power!";
  } else {
    counter++;
    startNumber.textContent = counter;
  }
}

decreaseNumber.addEventListener("click", minus);
increaseNumber.addEventListener("click", plus);
