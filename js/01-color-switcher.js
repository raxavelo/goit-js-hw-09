const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let myInterval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  changeBodyColor();
  startBtn.setAttribute("disabled", true);
  myInterval = setInterval(changeBodyColor, 1000);
});

stopBtn.addEventListener("click", (event) => {
  event.preventDefault();
  clearInterval(myInterval);
  startBtn.removeAttribute("disabled");
});
