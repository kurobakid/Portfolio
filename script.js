// ============================================
// NAVIGATION & SCROLL EFFECTS
// ============================================

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow on scroll
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for fade-in animations
const animatedElements = document.querySelectorAll(`
    .about-content,
    .skill-category,
    .timeline-item,
    .project-card,
    .education-card,
    .contact-card
`);

animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ============================================
// SKILL BARS ANIMATION
// ============================================

const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.getAttribute('data-progress');
            entry.target.style.width = progress + '%';
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ============================================
// TYPING EFFECT (Optional Enhancement)
// ============================================

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect on hero subtitle
// const heroSubtitle = document.querySelector('.hero-subtitle');
// if (heroSubtitle) {
//     const originalText = heroSubtitle.textContent;
//     typeWriter(heroSubtitle, originalText, 80);
// }

// ============================================
// CURSOR TRAIL EFFECT (Optional)
// ============================================

let mouseX = 0;
let mouseY = 0;
let cursorCircles = [];

// Uncomment to enable cursor trail effect
// function createCursorTrail() {
//     for (let i = 0; i < 5; i++) {
//         const circle = document.createElement('div');
//         circle.classList.add('cursor-circle');
//         document.body.appendChild(circle);
//         cursorCircles.push({
//             element: circle,
//             x: 0,
//             y: 0
//         });
//     }
// }

// document.addEventListener('mousemove', (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });

// function animateCursorTrail() {
//     let x = mouseX;
//     let y = mouseY;
    
//     cursorCircles.forEach((circle, index) => {
//         circle.x += (x - circle.x) * 0.3;
//         circle.y += (y - circle.y) * 0.3;
        
//         circle.element.style.left = circle.x + 'px';
//         circle.element.style.top = circle.y + 'px';
//         circle.element.style.scale = (cursorCircles.length - index) / cursorCircles.length;
        
//         x = circle.x;
//         y = circle.y;
//     });
    
//     requestAnimationFrame(animateCursorTrail);
// }

// createCursorTrail();
// animateCursorTrail();

// ============================================
// PARALLAX EFFECT ON HERO
// ============================================

const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// ============================================
// THEME TOGGLE (Dark/Light Mode) - Optional
// ============================================

// Uncomment to enable dark mode toggle
// const themeToggle = document.createElement('button');
// themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
// themeToggle.classList.add('theme-toggle');
// document.body.appendChild(themeToggle);

// themeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     const icon = themeToggle.querySelector('i');
    
//     if (document.body.classList.contains('dark-mode')) {
//         icon.classList.remove('fa-moon');
//         icon.classList.add('fa-sun');
//         localStorage.setItem('theme', 'dark');
//     } else {
//         icon.classList.remove('fa-sun');
//         icon.classList.add('fa-moon');
//         localStorage.setItem('theme', 'light');
//     }
// });

// // Check for saved theme preference
// const savedTheme = localStorage.getItem('theme');
// if (savedTheme === 'dark') {
//     document.body.classList.add('dark-mode');
//     themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
// }

// ============================================
// COUNTER ANIMATION FOR STATS (Optional)
// ============================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// CONTACT FORM VALIDATION (If you add a form)
// ============================================

// const contactForm = document.querySelector('#contact-form');
// if (contactForm) {
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         const name = contactForm.querySelector('#name').value;
//         const email = contactForm.querySelector('#email').value;
//         const message = contactForm.querySelector('#message').value;
        
//         if (!name || !email || !message) {
//             alert('Please fill in all fields');
//             return;
//         }
        
//         if (!isValidEmail(email)) {
//             alert('Please enter a valid email address');
//             return;
//         }
        
//         // Here you would typically send the form data to a server
//         console.log('Form submitted:', { name, email, message });
//         alert('Thank you for your message! I will get back to you soon.');
//         contactForm.reset();
//     });
// }

// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// ============================================
// PRELOADER (Optional)
// ============================================

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
});

// ============================================
// DYNAMIC GREETING BASED ON TIME
// ============================================

function getGreeting() {
    const hour = new Date().getHours();
    
    if (hour < 12) {
        return 'Good Morning';
    } else if (hour < 18) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
}

// Uncomment to add dynamic greeting
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const greeting = getGreeting();
//     heroTitle.innerHTML = `${greeting}! I'm <span class="gradient-text">Minh Nguyen</span>`;
// }

// ============================================
// BACK TO TOP BUTTON
// ============================================

const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.classList.add('back-to-top');
backToTopButton.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// COPY EMAIL TO CLIPBOARD
// ============================================

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Optional: Add copy to clipboard functionality
        // e.preventDefault();
        // const email = link.href.replace('mailto:', '');
        // navigator.clipboard.writeText(email).then(() => {
        //     alert('Email copied to clipboard!');
        // });
    });
});

// ============================================
// CONSOLE EASTER EGG
// ============================================

console.log(`
%c
 __  __ _       _       _   _                                 
|  \\/  (_)     | |     | \\ | |                                
| \\  / |_ _ __ | |__   |  \\| | __ _ _   _ _   _  ___ _ __    
| |\\/| | | '_ \\| '_ \\  | . \` |/ _\` | | | | | | |/ _ \\ '_ \\   
| |  | | | | | | | | | | |\\  | (_| | |_| | |_| |  __/ | | |  
|_|  |_|_|_| |_|_| |_| |_| \\_|\\__, |\\__,_|\\__, |\\___|_| |_|  
                               __/ |       __/ |              
                              |___/       |___/               

%cHey there! 👋
Thanks for checking out my portfolio.
Looking for a developer? Let's connect!

Email: nguyennhm.l.1922@gmail.com
`,
'color: #6366f1; font-weight: bold;',
'color: #64748b; font-size: 14px; line-height: 1.5;'
);

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedHighlight = debounce(highlightNavigation, 10);
window.addEventListener('scroll', debouncedHighlight);

// ============================================
// LAZY LOADING IMAGES (If you add images)
// ============================================

// const images = document.querySelectorAll('img[data-src]');

// const imageObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const img = entry.target;
//             img.src = img.dataset.src;
//             img.classList.add('loaded');
//             observer.unobserve(img);
//         }
//     });
// });

// images.forEach(img => imageObserver.observe(img));

// ============================================
// COLLAPSIBLE SECTIONS
// ============================================

function toggleCollapse(element) {
    const card = element.closest('.collapsible-card');
    card.classList.toggle('active');
}

// ============================================
// INITIALIZE COLLAPSIBLES
// ============================================

function initializeCollapsibles() {
    // All items collapsed by default (cleaner initial view)
    // Users can click to expand details they're interested in
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully! ✨');
    
    // Initialize collapsible sections
    initializeCollapsibles();
    
    // Remove loading class if exists
    document.body.classList.remove('loading');
});

