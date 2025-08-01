// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});
reveals.forEach((el) => revealObserver.observe(el));

// Back to Top Button
const toTopBtn = document.getElementById("toTopBtn");
window.onscroll = function () {
  toTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
};

toTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Typewriter Effect for Hero Title
const text =
  "Blending AI, Web, and IoT: My Journey into Real-World Tech Projects";
const target = document.querySelector(".display-4");
let i = 0;
function typeWriter() {
  if (i < text.length) {
    target.innerHTML = text.substring(0, i + 1);
    i++;
    setTimeout(typeWriter, 45);
  }
}
window.onload = typeWriter;

// Skill Bar Animation
const skills = document.querySelectorAll("[data-skill]");
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        skillObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);
skills.forEach((skill) => skillObserver.observe(skill));
