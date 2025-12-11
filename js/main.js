// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && 
        mobileMenuButton && !mobileMenuButton.contains(e.target) && 
        !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
    }
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });

    // Scroll to top when clicked
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
            
            // Scroll to the target element
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Account for fixed header
                behavior: 'smooth'
            });
            
            // Update URL without page jump
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                location.hash = targetId;
            }
        }
    });
});

// Form submission handling for contact form
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm && formMessage) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For this example, we'll simulate a successful submission
        
        // Show success message
        showFormMessage('Message sent successfully!', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// Helper function to show form messages
function showFormMessage(message, type) {
    if (!formMessage) return;
    
    formMessage.textContent = message;
    formMessage.className = ''; // Clear previous classes
    
    if (type === 'error') {
        formMessage.classList.add('text-red-600');
    } else if (type === 'success') {
        formMessage.classList.add('text-green-600');
    }
    
    // Clear message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = '';
    }, 5000);
}

// Project filtering functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-indigo-100', 'text-indigo-700');
                btn.classList.add('bg-white', 'text-gray-700');
            });

            // Add active class to clicked button
            button.classList.remove('bg-white', 'text-gray-700');
            button.classList.add('bg-indigo-100', 'text-indigo-700');

            const filter = button.getAttribute('data-filter');

            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    // Add animation class
                    card.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('opacity-100', 'translate-y-0');
            element.classList.remove('opacity-0', 'translate-y-8');
        }
    });
};

// Initialize animations
window.addEventListener('load', () => {
    // Add animation classes to elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        element.classList.add('transition-all', 'duration-500', 'ease-out', 'opacity-0', 'translate-y-8');
    });
    
    // Trigger initial animation check
    animateOnScroll();
});

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
            
            // Scroll to the target element
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Account for fixed header
                behavior: 'smooth'
            });
            
            // Update URL without page jump
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                location.hash = targetId;
            }
        }
    });
});

// Add active class to current navigation link
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation.split('/').pop()) {
        link.classList.add('text-indigo-600', 'font-semibold');
        link.classList.remove('text-gray-700');
    }
});

// Add animation for skill bars
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0';
        
        // Animate after a short delay
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
};

// Initialize skill bars animation when skills section is in view
const skillsSection = document.getElementById('skills');

if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(skillsSection);
}

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    const image = card.querySelector('img');
    
    if (image) {
        card.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    }
});
