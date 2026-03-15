// script.js for hello-world-gradient

(function() {
  'use strict';

  // ===== DOM Content Loaded =====
  document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
  });

  function initializeApp() {
    createParticles();
    initTitleAnimation();
    initInteractiveEffects();
    initMouseTracker();
    initScrollEffects();
  }

  // ===== Particle System =====
  function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random properties
      const size = Math.random() * 6 + 2;
      const left = Math.random() * 100;
      const delay = Math.random() * 20;
      const duration = Math.random() * 10 + 15;
      const opacity = Math.random() * 0.5 + 0.2;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, ${opacity});
        border-radius: 50%;
        left: ${left}%;
        bottom: -20px;
        pointer-events: none;
        animation: particleFloat ${duration}s linear ${delay}s infinite;
      `;

      particlesContainer.appendChild(particle);
    }

    // Add particle animation keyframes if not exists
    if (!document.querySelector('#particle-styles')) {
      const style = document.createElement('style');
      style.id = 'particle-styles';
      style.textContent = `
        @keyframes particleFloat {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // ===== Title Animation =====
  function initTitleAnimation() {
    const title = document.querySelector('.title');
    if (!title) return;

    // Add entrance animation
    title.style.opacity = '0';
    title.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      title.style.transition = 'opacity 1s ease, transform 1s ease';
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }, 100);

    // Add hover effect for individual letters
    const text = title.textContent;
    title.innerHTML = '';
    
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.className = 'title-letter';
      span.style.cssText = `
        display: inline-block;
        transition: transform 0.3s ease, color 0.3s ease;
        animation: letterFloat 3s ease-in-out ${index * 0.1}s infinite;
      `;
      title.appendChild(span);
    });

    // Add letter animation keyframes
    if (!document.querySelector('#letter-styles')) {
      const style = document.createElement('style');
      style.id = 'letter-styles';
      style.textContent = `
        @keyframes letterFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .title-letter:hover {
          transform: translateY(-15px) scale(1.2) !important;
          color: #f093fb;
        }
      `;
      document.head.appendChild(style);
    }
  }

  // ===== Interactive Effects =====
  function initInteractiveEffects() {
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        subtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 600);
    }

    // Add click ripple effect
    document.addEventListener('click', createRipple);
  }

  // ===== Ripple Effect =====
  function createRipple(e) {
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    
    ripple.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      left: ${e.clientX - 10}px;
      top: ${e.clientY - 10}px;
      z-index: 9998;
      animation: rippleExpand 0.6s ease-out forwards;
    `;

    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    // Add ripple animation if not exists
    if (!document.querySelector('#ripple-styles')) {
      const style = document.createElement('style');
      style.id = 'ripple-styles';
      style.textContent = `
        @keyframes rippleExpand {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(20);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // ===== Mouse Tracker for Gradient Effect =====
  function initMouseTracker() {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Create mouse follower
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    follower.style.cssText = `
      position: fixed;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(240, 147, 251, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(follower);

    function animateFollower() {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
      
      follower.style.left = currentX + 'px';
      follower.style.top = currentY + 'px';
      
      requestAnimationFrame(animateFollower);
    }

    animateFollower();

    // Hide follower when mouse leaves window
    document.addEventListener('mouseleave', () => {
      follower.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      follower.style.opacity = '1';
    });
  }

  // ===== Scroll Effects =====
  function initScrollEffects() {
    const title = document.querySelector('.title');
    
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      
      if (title) {
        const opacity = Math.max(0, 1 - scrollY / 500);
        const scale = Math.max(0.8, 1 - scrollY / 2000);
        title.style.opacity = opacity;
        title.style.transform = `scale(${scale})`;
      }
    });
  }

  // ===== Keyboard Easter Egg =====
  let konamiCode = [];
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
      activateRainbowMode();
    }
  });

  function activateRainbowMode() {
    const title = document.querySelector('.title');
    if (!title) return;

    title.style.animation = 'rainbowText 2s linear infinite';

    if (!document.querySelector('#rainbow-styles')) {
      const style = document.createElement('style');
      style.id = 'rainbow-styles';
      style.textContent = `
        @keyframes rainbowText {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }

    // Create confetti
    for (let i = 0; i < 100; i++) {
      createConfetti();
    }
  }

  function createConfetti() {
    const confetti = document.createElement('div');
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#ffd700', '#00ff88'];
    
    confetti.style.cssText = `
      position: fixed;
      width: ${Math.random() * 10 + 5}px;
      height: ${Math.random() * 10 + 5}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}vw;
      top: -20px;
      z-index: 9999;
      pointer-events: none;
      animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
      transform: rotate(${Math.random() * 360}deg);
    `;

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);

    if (!document.querySelector('#confetti-styles')) {
      const style = document.createElement('style');
      style.id = 'confetti-styles';
      style.textContent = `
        @keyframes confettiFall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // ===== Visibility Change Handler =====
  document.addEventListener('visibilitychange', () => {
    const title = document.querySelector('.title');
    if (!title) return;

    if (document.hidden) {
      document.title = 'Come back! 👋';
    } else {
      document.title = 'Hello World';
      // Add a welcome back animation
      title.style.animation = 'none';
      setTimeout(() => {
        title.style.animation = '';
      }, 10);
    }
  });

  // ===== Touch Support for Mobile =====
  if ('ontouchstart' in window) {
    document.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      createRipple({ clientX: touch.clientX, clientY: touch.clientY });
    });
  }

  // ===== Performance Optimization =====
  // Reduce animations when user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  }

})();