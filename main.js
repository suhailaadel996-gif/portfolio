<!-- Dark Mode Script -->
<script>
function updateContactDarkMode(isDark) {
  document.querySelectorAll('#contact .dark-mode-bg').forEach(el => {
    el.style.backgroundColor = isDark ? '#1f1f1f' : '#f8f9fa';
  });
  document.querySelectorAll('#contact .dark-mode-text').forEach(el => {
    el.style.color = isDark ? '#f1f1f1' : '#212529';
  });
  document.querySelectorAll('#contact .dark-mode-input').forEach(el => {
    el.style.backgroundColor = isDark ? '#121212' : '#fff';
    el.style.color = isDark ? '#f1f1f1' : '#212529';
    el.style.borderColor = isDark ? '#444' : '#ced4da';
  });

  // Button style
  document.querySelectorAll('#contact button').forEach(btn => {
    btn.classList.toggle('btn-dark', isDark);
    
    btn.classList.toggle('btn-primary', !isDark);
  });
}

// Listen to dark mode toggle
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  updateContactDarkMode(isDark);
});

// Initialize on page load
updateContactDarkMode(document.body.classList.contains('dark-mode'));

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for your message! I will contact you soon.');
  this.reset();
});
</script>



<!-- AOS Animation Library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
<script>
  AOS.init({ duration: 1000, once: true });
</script>


<!-- Footer -->
<footer class="text-center py-3">
  &copy; 2026 Ahmed Hashim. All Rights Reserved.
</footer>

<!-- Scripts -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
<script>
  AOS.init({ duration: 1000, once: true });

  // Dark Mode Toggle
  const toggle = document.getElementById('darkModeToggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    toggle.classList.toggle('fa-sun');
  });

  // Particles.js
  particlesJS('particles-js', {
    "particles": {
      "number": { "value": 60 },
      "color": { "value": "#007bff" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5, "random": true },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#007bff", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 2 }
    },
    "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" } }, "modes": { "repulse": { "distance": 100 } } },
    "retina_detect": true
  });
</script>
