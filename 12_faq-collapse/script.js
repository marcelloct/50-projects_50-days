const toggles = document.querySelectorAll(".faq-toggle");
const faq = document.querySelector(".faq-container");

// toggles.forEach((toggle) => {
//   toggle.addEventListener("click", () => {
//     toggle.parentNode.classList.toggle("faq-active");
//   });
// });

function collapseAll() {
  for (let toggle of toggles) {
    toggle.parentNode.classList.remove("faq-active");
  }
}

faq.addEventListener("click", (e) => {
  if (!e.target.closest(".faq")) return;
  collapseAll();
  const div = e.target.closest(".faq");
  div.classList.toggle("faq-active");
});
