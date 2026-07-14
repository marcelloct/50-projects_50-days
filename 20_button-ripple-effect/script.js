const container = document.getElementById("button-container");

container.addEventListener("click", (e) => {
  if (event.target.matches(".ripple")) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    e.target.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  }
});
