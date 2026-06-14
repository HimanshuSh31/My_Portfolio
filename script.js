// Dark Mode Toggle
const toggle = document.getElementById('toggle-dark');
const knob = document.getElementById('toggle-knob');
const icon = document.getElementById('toggle-icon');
const html = document.documentElement;

function updateToggleUI(isDark) {
  if (toggle) {
    toggle.setAttribute('aria-checked', isDark ? 'true' : 'false');
  }
  if (knob && icon) {
    if (isDark) {
      knob.classList.remove('translate-x-0');
      knob.classList.add('translate-x-6');
      icon.className = 'fas fa-moon text-indigo-400 text-sm transition-transform duration-300 rotate-[360deg]';
    } else {
      knob.classList.remove('translate-x-6');
      knob.classList.add('translate-x-0');
      icon.className = 'fas fa-sun text-amber-500 text-sm transition-transform duration-300 rotate-0';
    }
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  html.classList.add('dark');
}

// Initial toggle sync
updateToggleUI(html.classList.contains('dark'));

if (toggle) {
  toggle.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateToggleUI(isDark);
  });
}

// Function to reveal sections in viewport
function revealSections() {
  document.querySelectorAll('.section-container').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      el.classList.add('reveal');
    }
  });
}

// Function to update scroll progress
function updateScrollProgress() {
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressWidth = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = `${progressWidth}%`;
  }
}

// Function to update back to top button visibility
function updateBackToTop() {
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    const scrollTop = window.scrollY;
    backToTop.classList.toggle('hidden', scrollTop < 300);
  }
}

// Combined Scroll and Init Handlers
function handleScrollAndInit() {
  updateScrollProgress();
  revealSections();
  updateBackToTop();
}

window.addEventListener('scroll', handleScrollAndInit);
window.addEventListener('DOMContentLoaded', handleScrollAndInit);

// Run immediately in case DOM is already loaded or interactive
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  handleScrollAndInit();
}

const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Custom Toast Notification Alerts
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `flex items-center gap-3 px-5 py-3.5 rounded-2xl border bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-xl pointer-events-auto transition-all duration-300 transform translate-y-4 opacity-0 text-sm font-semibold text-gray-800 dark:text-gray-100`;

  let icon = '';
  if (type === 'success') {
    toast.classList.add('border-green-500/30');
    icon = `<i class="fas fa-circle-check text-green-500 text-lg"></i>`;
  } else {
    toast.classList.add('border-red-500/30');
    icon = `<i class="fas fa-circle-exclamation text-red-500 text-lg"></i>`;
  }

  toast.innerHTML = `${icon} <span>${message}</span>`;
  container.appendChild(toast);

  // Trigger entering transition
  setTimeout(() => {
    toast.classList.add('toast-visible');
  }, 10);

  // Trigger leaving transition and remove from DOM
  setTimeout(() => {
    toast.classList.remove('toast-visible');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// Contact Form Handler with Custom Toast
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
      const data = new FormData(e.target);
      const response = await fetch('https://formspree.io/f/xjkowqyp', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        e.target.reset();
        showToast('Your message has been sent successfully!', 'success');
      } else {
        showToast('Failed to send. Try again later.', 'error');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      showToast('Failed to send due to a network error.', 'error');
    }
  });
}

// Mouse Spotlight Card Glow
function initSpotlightGlow() {
  const glowCards = document.querySelectorAll('.glow-card');
  glowCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// Typing Animation in Hero
const words = [
  "intelligent AI systems.",
  "data-driven simulations.",
  "interactive gameplay brokerages.",
  "robust software architectures."
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
  const typedTextSpan = document.getElementById('typed-text');
  if (!typedTextSpan) return;
  
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = 80;
  if (isDeleting) {
    typeSpeed /= 2;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000; // Pause showing complete phrase
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500; // Pause before typing next phrase
  }

  setTimeout(typeAnimation, typeSpeed);
}

// Certification Categorized Filtering
function initCertFiltering() {
  const filterContainer = document.getElementById('cert-filter-container');
  if (!filterContainer) return;
  
  const filterBtns = filterContainer.querySelectorAll('.filter-btn');
  const certCards = document.querySelectorAll('.cert-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active states and ARIA pressed states
      filterBtns.forEach(b => {
        b.classList.remove('active-filter');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active-filter');
      btn.setAttribute('aria-pressed', 'true');

      const filterValue = btn.getAttribute('data-filter');

      certCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            if (card.style.opacity === '0') {
              card.style.display = 'none';
            }
          }, 300);
        }
      });
    });
  });
}

// Interactive Particle Network Background
function initHeroParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const section = canvas.parentElement;

  let width = canvas.width = section.offsetWidth;
  let height = canvas.height = section.offsetHeight;

  const particles = [];
  const maxParticles = window.innerWidth < 768 ? 25 : 55;
  const connectionDistance = 110;
  let mouse = { x: null, y: null, radius: 140 };

  window.addEventListener('resize', () => {
    width = canvas.width = section.offsetWidth;
    height = canvas.height = section.offsetHeight;
  });

  section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  section.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.5 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse gravitational attraction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 0.5;
          this.y -= (dy / dist) * force * 0.5;
        }
      }
    }

    draw() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Populate particles
  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Draw connecting lines between particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * 0.12;
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }

      // Draw lines connecting to mouse coordinates
      if (mouse.x !== null && mouse.y !== null) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const alpha = (1 - dist / mouse.radius) * 0.18;
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// Initialize features on load
window.addEventListener('DOMContentLoaded', () => {
  initSpotlightGlow();
  initCertFiltering();
  initHeroParticles();
  initMobileMenu();
  initActiveNavObserver();
  initStatsCounter();
  setTimeout(typeAnimation, 1000);
});

// Fallback init
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initSpotlightGlow();
  initCertFiltering();
  initHeroParticles();
  initMobileMenu();
  initActiveNavObserver();
  initStatsCounter();
  setTimeout(typeAnimation, 1000);
}

// ─── Mobile Hamburger Menu ───────────────────────────────────────────────────
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  let isOpen = false;

  function openMenu() {
    isOpen = true;
    menu.style.maxHeight = menu.scrollHeight + 'px';
    btn.classList.add('hamburger-open');
    btn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    isOpen = false;
    menu.style.maxHeight = '0';
    btn.classList.remove('hamburger-open');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', () => {
    isOpen ? closeMenu() : openMenu();
  });

  // Close when a link is clicked
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ─── Active Navbar Link Intersection Observer ────────────────────────────────
function initActiveNavObserver() {
  const navLinks = document.querySelectorAll('.nav-link');
  if (!navLinks.length) return;

  const sectionIds = Array.from(navLinks).map(l => l.getAttribute('data-section')).filter(Boolean);
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  function setActive(id) {
    navLinks.forEach(link => {
      if (link.getAttribute('data-section') === id) {
        link.classList.add('active-nav');
      } else {
        link.classList.remove('active-nav');
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }
  );

  sections.forEach(section => observer.observe(section));
}

// ─── Animated Stats Counter ──────────────────────────────────────────────────
function initStatsCounter() {
  const strip = document.getElementById('stats-strip');
  if (!strip) return;

  const statItems = strip.querySelectorAll('.stat-item');
  const statCounts = strip.querySelectorAll('.stat-count');
  let animated = false;

  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const isDecimal = el.hasAttribute('data-decimal');
    const decimals = parseInt(el.getAttribute('data-decimal') || '0', 10);
    const duration = 1600;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      if (isDecimal && decimals > 0) {
        // e.g. target=917, decimals=2 → display as "9.17"
        const divisor = Math.pow(10, decimals);
        el.textContent = (current / divisor).toFixed(decimals) + suffix;
      } else {
        el.textContent = current + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          statItems.forEach(item => item.classList.add('stat-visible'));
          statCounts.forEach(el => animateCount(el));
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(strip);
}
