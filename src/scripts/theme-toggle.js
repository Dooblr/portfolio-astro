// src/scripts/theme-toggle.js

// Theme toggle functionality (using in-memory state)
let currentTheme = 'light';
const root = document.documentElement;

function updateTheme(theme) {
  currentTheme = theme;
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    updateToggleButtons('☀');
  } else {
    root.removeAttribute('data-theme');
    updateToggleButtons('☾');
  }
}

function updateToggleButtons(icon) {
  const buttons = [
    document.getElementById('theme-toggle'),
    document.getElementById('theme-toggle-mobile')
  ];
  buttons.forEach(btn => {
    if (btn) btn.textContent = icon;
  });
}

function initializeTheme() {
  const toggleBtns = [
    document.getElementById('theme-toggle'),
    document.getElementById('theme-toggle-mobile')
  ];
  
  toggleBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        updateTheme(newTheme);
      });
    }
  });

  // Mobile navigation toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  let isMenuOpen = false;

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      navMenu.classList.toggle('active', isMenuOpen);
      navToggle.textContent = isMenuOpen ? '✕' : '☰';
    });

    // Close mobile menu when clicking on a link
    navMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        isMenuOpen = false;
        navMenu.classList.remove('active');
        navToggle.textContent = '☰';
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTheme);