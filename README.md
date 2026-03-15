# Hello World Gradient

A stunning, modern "Hello World" webpage featuring elegant gradient animations, interactive particles, and smooth visual effects. This project demonstrates how a simple greeting can be transformed into an immersive visual experience.

![Hello World Gradient](https://img.shields.io/badge/Hello-World-gradient?style=for-the-badge&labelColor=667eea&color=764ba2)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## ✨ Features

- **Animated Gradient Background** - Smooth, continuously shifting gradient colors that create a dynamic atmosphere
- **Floating Orbs** - Soft, blurred decorative elements that add depth and movement
- **Particle System** - Delicate floating particles that rise gently across the screen
- **Interactive Mouse Follower** - A glowing cursor effect that responds to your movement
- **Letter Animations** - Each letter in the title has its own subtle floating animation
- **Hover Effects** - Interactive letter highlighting on title hover
- **Responsive Design** - Looks beautiful on all screen sizes from mobile to desktop
- **Toast Notifications** - Elegant feedback messages for user interactions
- **Feature Cards** - Highlighted features with icons and descriptions
- **Smooth Transitions** - All elements animate smoothly for a polished feel

## 🚀 Quick Start

1. **Clone or Download** the project files
2. **Open** `index.html` in any modern web browser
3. **Enjoy** the visual experience!

hello-world-gradient/
├── index.html      # Main HTML structure
├── style.css       # All styles and animations
├── script.js       # Interactive features and effects
└── README.md       # This file

## 🎨 Design Elements

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Purple Blue | `#667eea` | Primary gradient start |
| Deep Purple | `#764ba2` | Gradient middle |
| Pink | `#f093fb` | Gradient end / accents |
| Coral | `#f5576c` | Secondary accents |

### Typography

- **Title**: 3rem - 8rem (responsive), weight 800
- **Subtitle**: 1.25rem - 1.75rem, weight 300
- **Body**: 1rem, regular weight

## 🛠️ Customization

### Changing the Gradient

Edit the CSS variables in `style.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}
```

### Adjusting Animation Speed

Modify the animation durations:

```css
@keyframes gradientShift {
  /* Change 15s to speed up or slow down */
  animation: gradientShift 15s ease infinite;
}
```

### Particle Count

In `script.js`, adjust the particle count:

```javascript
const particleCount = 50; // Increase or decrease as desired
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 🎯 Performance

- **No external dependencies** - Pure HTML, CSS, and JavaScript
- **Lightweight** - Total size under 15KB
- **GPU-accelerated animations** - Smooth 60fps performance
- **Optimized particle system** - Efficient DOM manipulation

## 📄 File Overview

### index.html
Contains the semantic HTML structure including:
- Background animation elements
- Main hero section with title and subtitle
- Feature cards
- Call-to-action buttons
- Toast notification component

### style.css
Comprehensive styles featuring:
- CSS custom properties for easy theming
- Keyframe animations for all moving elements
- Responsive breakpoints for all screen sizes
- Glassmorphism effects on buttons and cards

### script.js
JavaScript functionality including:
- Dynamic particle generation
- Mouse tracking and follower effect
- Title letter animation initialization
- Button click handlers with toast notifications
- Scroll-based effects

## 🌟 Inspiration

This project was inspired by the idea that even the simplest concept—a "Hello World" greeting—can become an engaging, memorable experience with thoughtful design and subtle animations.

## 📝 License

This project is open source and available for personal and commercial use.

---

<p align="center">
  Made with 💜 and gradients
</p>