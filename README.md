# Professional Portfolio Website

A modern, responsive portfolio website for **Ngo Hai Minh Nguyen** - Backend Engineer & Full-Stack Developer.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Elements**: Animated skill bars, scroll effects, and hover animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized performance with minimal dependencies
- **Easy to Customize**: Well-organized code structure for easy modifications

## 🚀 Quick Start

1. **Open the website**: Simply open `index.html` in your web browser
2. **No build process required**: This is a static website using vanilla HTML, CSS, and JavaScript

### Local Development

You can use any local server to run the website. Here are some options:

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

#### Using Node.js (if installed):
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server

# Then open http://localhost:8080 in your browser
```

#### Using VS Code:
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

## 📁 File Structure

```
Portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and animations
└── README.md          # Documentation (this file)
```

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #ec4899;    /* Accent color */
    --accent-color: #06b6d4;       /* Additional accent */
}
```

### Updating Content

1. **Personal Information**: Edit the HTML in `index.html`
2. **Projects**: Update the project cards in the Projects section
3. **Skills**: Modify skill bars and tags in the Skills section
4. **Experience**: Update timeline items in the Experience section

### Adding Your Photo

Replace the placeholder icon in the hero section:

```html
<!-- Find this in index.html -->
<div class="image-placeholder">
    <i class="fas fa-user-circle"></i>
</div>

<!-- Replace with -->
<div class="image-placeholder">
    <img src="your-photo.jpg" alt="Minh Nguyen">
</div>
```

Then add this CSS to `styles.css`:

```css
.image-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
```

### Adding Social Links

Update the social links in the hero and footer sections:

```html
<a href="https://github.com/yourusername" target="_blank" class="social-link">
    <i class="fab fa-github"></i>
</a>
<a href="https://linkedin.com/in/yourusername" target="_blank" class="social-link">
    <i class="fab fa-linkedin"></i>
</a>
```

## 🎯 Sections Overview

1. **Hero/Home**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and career objective
3. **Skills**: Technical skills with animated progress bars
4. **Experience**: Work history in timeline format
5. **Projects**: Showcase of key projects with descriptions
6. **Education**: Academic background
7. **Contact**: Multiple ways to get in touch

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Optional Features (Commented in Code)

The following features are available but commented out in `script.js`. Uncomment them to enable:

- **Typing Effect**: Animated typing for hero subtitle
- **Cursor Trail**: Custom cursor with trail effect
- **Dark Mode Toggle**: Switch between light and dark themes
- **Dynamic Greeting**: Time-based greeting message

## 🚀 Deployment

### GitHub Pages (Free)

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to Settings > Pages
4. Select main branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify (Free)

1. Create account at [Netlify](https://netlify.com)
2. Drag and drop your folder
3. Your site is live instantly with a custom URL

### Vercel (Free)

1. Create account at [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

## 📝 Customization Tips

### SEO Optimization

1. Update meta tags in `<head>`:
   ```html
   <meta name="description" content="Your custom description">
   <meta name="keywords" content="your, keywords, here">
   ```

2. Add Open Graph tags for social media sharing:
   ```html
   <meta property="og:title" content="Your Name - Portfolio">
   <meta property="og:description" content="Your description">
   <meta property="og:image" content="your-image-url.jpg">
   ```

### Performance Optimization

- Images: Compress and optimize all images before adding
- Fonts: Consider hosting Google Fonts locally for faster loading
- Icons: Font Awesome is loaded from CDN, consider using only needed icons

## 🎨 Design Inspiration

This portfolio uses:
- **Color Scheme**: Modern gradient with purple and pink accents
- **Typography**: Inter font family for clean, professional look
- **Layout**: Grid and Flexbox for responsive design
- **Animations**: CSS transitions and JavaScript Intersection Observer

## 📧 Contact Information

- **Email**: nguyennhm.l.1922@gmail.com
- **Phone**: 0814570507
- **Location**: TDM City, Binh Duong

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🙏 Credits

- **Font Awesome**: Icons library
- **Google Fonts**: Inter font family
- **Design**: Custom design by Minh Nguyen

---

**Built with ❤️ and code**

For questions or support, feel free to reach out via email!

