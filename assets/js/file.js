let counter = 0;

const h1 = document.createElement("h1");
h1.setAttribute("id", "counter");
h1.textContent = "Counter";
document.body.appendChild(h1);

const h2 = document.createElement("h2");
h2.setAttribute("id", "start-number");
h2.textContent = 0;
document.body.appendChild(h2);

const div = document.createElement("div");
div.setAttribute("id", "container");
document.body.append(div);

const button1 = document.createElement("button");
button1.setAttribute("id", "decrease-number");
button1.textContent = "-";
div.appendChild(button1);

const button2 = document.createElement("button");
button2.setAttribute("id", "increase-number");
button2.textContent = "+";
div.appendChild(button2);

function minus() {
  if (counter <= 0) {
    return;
  } else {
    counter--;
    h2.textContent = counter;
  }
}

function plus() {
  if (counter === 49) {
    counter++;
    h2.textContent = "your patience is your power!";
  } else {
    counter++;
    h2.textContent = counter;
  }
}

button1.addEventListener("click", minus);
button2.addEventListener("click", plus);
