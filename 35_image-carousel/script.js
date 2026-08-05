const imgs = document.getElementById("imgs");
const prevBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let i = 0;
let interval = setInterval(run, 2000);

function run() {
  i++;
  changeImage();
}

function changeImage() {
  if (i > img.length - 1) {
    i = 0;
  } else if (i < 0) {
    i = img.length - 1;
  }

  imgs.style.transform = `translateX(${-i * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

prevBtn.addEventListener("click", () => {
  i--;
  changeImage();
  resetInterval();
});

nextBtn.addEventListener("click", () => {
  i++;
  changeImage();
  resetInterval();
});
