const sections = document.querySelectorAll("section");
const nav = document.querySelector(".nav");
const navUl = document.querySelector(".nav ul");
const navLinks = document.querySelectorAll(".nav ul li a");

// Observer options
const observerOptions = {
  root: null, // uses the viewport
  rootMargin: "-20% 0px -60% 0px", // triggers when section is in the upper-middle of the screen
  threshold: 0,
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    // Only track sections entering the specified viewport area
    if (entry.isIntersecting) {
      const activeId = entry.target.getAttribute("id");

      // Remove 'active' class from all links and add to the matching one
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${activeId}`) {
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
      });
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section));

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

navUl.addEventListener("click", (e) => {
  navLinks.forEach((link) => {
    link.classList.remove("current");
  });

  if (e.target.matches("a")) {
    e.target.classList.add("current");
  }
});
