const textEl = document.getElementById("auto-text");
const textBar = document.getElementById("text-bar");
const speedEl = document.getElementById("speed");
const text = "We Love Programming!";
let idx = 1;
let speed = 300 / speedEl.value;

window.addEventListener("load", () => {
  setTimeout(() => {
    writeText();
    textBar.style.animation = "none";
  }, 2500);
});

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) idx = 1;

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
