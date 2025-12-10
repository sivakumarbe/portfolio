// Simple example: log when page loads
console.log("Portfolio loaded");

// Optional: smooth scroll for older browsers
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
// Typing Animation
const texts = ["Aspiring AI Engineer | ML Engineer"];
let index = 0;
let charIndex = 0;
const speed = 120;

const typingElement = document.querySelector(".typing-text");

function typeEffect() {
  if (charIndex < texts[index].length) {
    typingElement.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();
// Skills animation on scroll
const skillCards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.animation =
        `skillFadeUp 0.6s ease forwards ${index * 0.15}s`;
    }
  });
}, { threshold: 0.3 });

skillCards.forEach(card => observer.observe(card));

// Certificates animation
const certificateCards = document.querySelectorAll(".certificate-card");

const certObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.animation =
        `skillFadeUp 0.6s ease forwards ${index * 0.15}s`;
    }
  });
}, { threshold: 0.3 });

certificateCards.forEach(card => certObserver.observe(card));

// Education animation
const educationCards = document.querySelectorAll(".education-card");

educationCards.forEach((card, index) => {
  observer.observe(card);
});


