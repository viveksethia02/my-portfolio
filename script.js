// Theme Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggle.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌓';
});

// Scroll Fade-in
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Tilt effect
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const { offsetX, offsetY, target } = e;
    const { offsetWidth, offsetHeight } = target;
    const rotateX = ((offsetY / offsetHeight) - 0.5) * 15;
    const rotateY = ((offsetX / offsetWidth) - 0.5) * -15;
    target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener("mouseleave", (e) => {
    e.target.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});
