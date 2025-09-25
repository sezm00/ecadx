# ECADX Project Structure

## 📁 Directory Organization

```
ecadx/
├── 📄 index.html                 # Main landing page with SVG design
├── 📁 styles/                    # CSS stylesheets
│   ├── 📄 main.css              # Main stylesheet (organized & modern)
│   └── 📄 test.css              # Test-specific styles (if needed)
├── 📁 img/                       # Primary image assets
│   ├── 📄 background.png         # Main background image
│   ├── 📄 resizedBG.png         # Resized background
│   ├── 📄 MNKJNL.png            # Logo/branding
│   ├── 📄 JDJDJK.png            # Asset image
│   ├── 📄 Asset 91@300x.png     # Icon asset
│   ├── 📄 Asset83@300x.png      # Icon asset
│   ├── 📄 Asset 90@300x.png     # Icon asset
│   ├── 📄 Asset 88@300x.png     # Icon asset
│   ├── 📄 Asset 82@300x.png     # Icon asset
│   ├── 📄 Asset 81@300x.png     # Icon asset
│   ├── 📄 Asset 80@300x.png     # Icon asset
│   ├── 📄 Asset 79@300x.png     # Icon asset
│   ├── 📄 1280x800.png          # Resolution-specific asset
│   ├── 📄 1920x1080.png        # Resolution-specific asset
│   └── 📄 1080X1920 TO SEZMO.png # Mobile-specific asset
├── 📁 images/                    # Secondary image assets
│   ├── 📄 logo.png              # Company logo
│   ├── 📄 slide1.jpg            # Slider image 1
│   ├── 📄 slide2.jpg            # Slider image 2
│   ├── 📄 slide3.jpg            # Slider image 3
│   ├── 📄 project2.jpeg         # Project showcase
│   ├── 📄 project3.jpeg         # Project showcase
│   ├── 📄 Render1.jpg           # 3D render
│   ├── 📄 rr2.jpeg              # Project image
│   ├── 📄 rrs.jpeg              # Project image
│   ├── 📄 STARCHEM.jpeg         # Client logo
│   ├── 📄 Bajaj.jpg             # Client logo
│   ├── 📄 1 (1).jpg             # Project image
│   ├── 📄 1 (2).jpg             # Project image
│   └── 📄 12.jpeg               # Project image
├── 📁 home/                      # Home page components
├── 📁 about us/                  # About us section
├── 📁 contact us/                # Contact information and forms
├── 📁 Services/                  # Services offered
├── 📁 Projects/                  # Project portfolio
├── 📁 test/                      # Test files (preserved)
├── 📄 test.html                  # Test page (preserved)
├── 📄 xacademy_test.html         # Academy test page (preserved)
├── 📄 xfinance_test.html         # Finance test page (preserved)
├── 📄 image-manager.html         # Image management tool
├── 📄 shared-footer.css          # Shared footer styles
├── 📄 shared-footer.js           # Shared footer functionality
├── 📄 script.js                  # Main JavaScript functionality
├── 📄 README.md                  # Project documentation
└── 📄 PROJECT_STRUCTURE.md       # This file
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #3498db
- **Secondary Blue**: #2980b9
- **Dark Blue**: #2c3e50
- **Light Gray**: #f8f9fa
- **Text Dark**: #333
- **Text Light**: #666
- **White**: #fff

### Typography
- **Font Family**: IBM Plex Sans
- **Headings**: 600 weight
- **Body Text**: 400 weight
- **Responsive scaling**: 3rem → 2.5rem → 2rem → 1.5rem

### Spacing System
- **Base Unit**: 1rem (16px)
- **Small**: 0.5rem (8px)
- **Medium**: 1rem (16px)
- **Large**: 1.5rem (24px)
- **Extra Large**: 2rem (32px)

## 🚀 Features & Functionality

### Core Features
- ✅ Responsive design (mobile-first approach)
- ✅ Modern CSS Grid & Flexbox layouts
- ✅ Smooth scrolling navigation
- ✅ Intersection Observer animations
- ✅ Mobile navigation toggle
- ✅ Form validation
- ✅ Lazy loading images
- ✅ Scroll to top button
- ✅ Parallax effects
- ✅ Accessibility improvements

### JavaScript Modules
- **Navigation**: Mobile menu, smooth scrolling
- **Animations**: Scroll-based, intersection observer
- **Forms**: Validation, error handling
- **Performance**: Lazy loading, throttling
- **Accessibility**: Skip links, keyboard navigation

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
/* Base styles for mobile */

/* Tablet (768px and up) */
@media (min-width: 768px) { ... }

/* Desktop (1024px and up) */
@media (min-width: 1024px) { ... }

/* Large Desktop (1200px and up) */
@media (min-width: 1200px) { ... }
```

## 🔧 Development Guidelines

### CSS Organization
1. **Reset & Base Styles** - Global resets and typography
2. **Layout & Containers** - Grid systems and containers
3. **Components** - Buttons, cards, forms
4. **Sections** - Hero, services, projects, etc.
5. **Responsive Design** - Media queries
6. **Utilities** - Helper classes
7. **Animations** - Keyframes and transitions

### JavaScript Organization
1. **Event Listeners** - DOM ready, scroll, click events
2. **Core Functions** - Navigation, animations, forms
3. **Utility Functions** - Debounce, throttle, helpers
4. **Error Handling** - Global error catching
5. **Performance** - Monitoring and optimization

### File Naming Conventions
- **CSS**: kebab-case (main.css, shared-footer.css)
- **JavaScript**: camelCase (script.js, sharedFooter.js)
- **Images**: descriptive names with dimensions (Asset 89@300x.png)
- **Directories**: kebab-case (about us/, contact us/)

## 📋 Maintenance Tasks

### Regular Cleanup
- [ ] Remove unused CSS classes
- [ ] Optimize image sizes
- [ ] Check for broken links
- [ ] Validate HTML/CSS
- [ ] Test responsive design
- [ ] Update dependencies

### Performance Optimization
- [ ] Minify CSS/JS for production
- [ ] Optimize images (WebP format)
- [ ] Implement CDN for assets
- [ ] Add caching headers
- [ ] Monitor Core Web Vitals

### Accessibility
- [ ] Test with screen readers
- [ ] Check keyboard navigation
- [ ] Verify color contrast
- [ ] Add ARIA labels where needed
- [ ] Test with accessibility tools

## 🚨 Important Notes

1. **SVG Design**: The main SVG in index.html is a crucial part of the UI design and should not be removed
2. **Test Files**: All test files are preserved as they are needed for this version
3. **Image Organization**: Images are organized by purpose and resolution
4. **Responsive Design**: Mobile-first approach with progressive enhancement
5. **Browser Support**: Modern browsers with fallbacks for older versions

## 🔗 External Dependencies

- **Google Fonts**: IBM Plex Sans
- **No external CSS frameworks** (custom design system)
- **Vanilla JavaScript** (no external libraries)
- **Modern CSS features** with fallbacks

## 📞 Support & Contact

For questions about this project structure or development guidelines, refer to the main README.md file or contact the development team.




