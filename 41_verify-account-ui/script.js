const codes = document.querySelectorAll(".code");
const btn = document.getElementById("confirm");
const form = document.querySelector("form");

codes[0].focus();

codes.forEach((code, i) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[i].value = "";
      setTimeout(() => codes[i + 1].focus(), 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => codes[i - 1].focus(), 10);
    }
  });
});

form.addEventListener("input", () => {
  // Check if every field has trimmed text (is not empty)
  const allFilled = Array.from(codes).every((code) => code.value.trim() !== "");

  // Set disabled to false if all filled, true if any are empty
  btn.disabled = !allFilled;
});
