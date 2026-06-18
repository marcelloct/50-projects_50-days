document.querySelector(".container").addEventListener("click", (e) => {
  const target = e.target.closest(".panel");
  removeActive();
  target.classList.add("active");
});

const removeActive = () => {
  const panels = document.querySelectorAll(".panel");
  for (const panel of panels) {
    panel.classList.remove("active");
  }
};
