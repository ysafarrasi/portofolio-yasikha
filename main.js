// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});
reveals.forEach((el) => observer.observe(el));

// Back to Top Button
// Show/Hide Button
const toTopBtn = document.getElementById("toTopBtn");
window.onscroll = function () {
  toTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
};

// Scroll to top
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
