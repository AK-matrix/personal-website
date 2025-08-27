# Arnav Kamath - Personal Website

A modern, responsive personal website built with vanilla HTML, CSS, and JavaScript. Features a dark theme, interactive elements, and smooth animations.

## 🚀 Features

- **Dark Theme**: Modern dark color scheme with light theme toggle
- **Responsive Design**: Works perfectly on all devices (320px - 1920px+)
- **Interactive Elements**: 
  - Typing effect in hero section
  - Parallax background with moving dots
  - Card tilt effects on hover
  - Command palette (⌘K / Ctrl+K)
  - Algorithm sketchpad (Bubble Sort + BFS)
  - Konami code easter egg
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **Performance**: Lightweight (<250KB) with system fonts only
- **SEO Optimized**: Open Graph, Twitter Cards, and JSON-LD

## 🛠️ Tech Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **No Build Tools**: Runs directly from file system
- **No External Dependencies**: All functionality built from scratch
- **CSS Variables**: Easy theme customization
- **Responsive Grid**: CSS Grid and Flexbox for layouts

## 📁 File Structure

```
Personal Website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and themes
├── script.js           # JavaScript functionality
├── assets/             # Images and assets
│   ├── favicon.svg     # Website favicon
│   └── og.svg          # Open Graph image
└── README.md           # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone or download** the repository
2. **Open** `index.html` in your web browser
3. **That's it!** No build steps required

### Customization

All content is configurable through the `siteData` object at the top of `script.js`:

```javascript
const siteData = {
    name: "Your Name",
    bio: "Your bio here...",
    typingPhrases: ["Your", "typing", "phrases"],
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourprofile",
        email: "your.email@example.com"
    },
    skills: ["Skill1", "Skill2", "Skill3"],
    projects: [
        {
            id: "project-1",
            title: "Project Title",
            description: "Project description...",
            stack: "Tech stack used",
            tags: ["tag1", "tag2"],
            thumbnail: "🎯",
            caseStudy: "Detailed case study...",
            github: "https://github.com/..."
        }
    ],
    experience: [
        {
            title: "Job Title",
            company: "Company Name",
            period: "Duration",
            description: "Job description..."
        }
    ]
};
```

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Create a new repository** named `yourusername.github.io`
2. **Upload all files** to the repository
3. **Go to Settings** → **Pages**
4. **Select source**: Deploy from branch
5. **Choose branch**: `main` (or `master`)
6. **Save** and wait for deployment

Your site will be available at `https://yourusername.github.io`

### Alternative Hosting

- **Netlify**: Drag and drop the folder to deploy
- **Vercel**: Connect your GitHub repository
- **Any web server**: Upload files to your hosting provider

## 🎨 Customization Guide

### Colors and Themes

Edit CSS variables in `styles.css`:

```css
:root {
    --bg-primary: #0f1115;        /* Main background */
    --bg-secondary: #1a1d23;      /* Secondary background */
    --accent-primary: #4ea1ff;    /* Primary accent */
    --text-primary: #eaeef2;      /* Main text */
    /* ... more variables */
}
```

### Typography

Font sizes use CSS `clamp()` for fluid typography:

```css
--font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--font-size-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
```

### Animations

All animations respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
    * { transition-duration: 0.01ms !important; }
}
```

## 🔧 Advanced Features

### Command Palette

- **Shortcut**: ⌘K (Mac) / Ctrl+K (Windows/Linux)
- **Features**: Quick navigation, external links, section jumping

### Algorithm Sketchpad

- **Bubble Sort**: Visual sorting algorithm with step-by-step execution
- **BFS Pathfinding**: Breadth-first search on a grid with obstacles
- **Controls**: Play, pause, step, reset, and algorithm switching

### Card Interactions

- **Hover Effects**: Subtle lift and shadow changes
- **Tilt Effect**: 3D tilt on mouse movement (disabled for reduced motion)
- **Filtering**: Click skill chips to filter projects

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1920px+
- **Large Screens**: 1921px+

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: ARIA labels and descriptions
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user preferences
- **Skip Links**: Quick navigation for assistive technology

## 🚀 Performance Tips

- **System Fonts**: No external font loading
- **Optimized Images**: SVG icons and minimal assets
- **Efficient CSS**: CSS Grid and modern layout techniques
- **Minimal JavaScript**: Only essential functionality
- **Lazy Loading**: Images and content load as needed

## 🐛 Troubleshooting

### Common Issues

1. **Site not loading**: Ensure all files are in the same directory
2. **Styling issues**: Check that `styles.css` is properly linked
3. **JavaScript errors**: Open browser console to see error messages
4. **Mobile issues**: Test responsive design in browser dev tools

### Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **CSS Features**: CSS Grid, CSS Variables, Flexbox
- **JavaScript**: ES6+ features (arrow functions, const/let, template literals)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the website.

## 📞 Support

If you need help with customization or deployment:

1. Check the browser console for errors
2. Review the customization guide above
3. Ensure all files are properly linked
4. Test in different browsers

---

**Built with ❤️ using vanilla web technologies**

*No frameworks, no build tools, just pure HTML, CSS, and JavaScript.*
