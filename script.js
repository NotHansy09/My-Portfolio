// Typing Effect for Home Section
document.addEventListener('DOMContentLoaded', () => {
    const typedTextElement = document.querySelector('.typed-text');
    const texts = ['Web Developer', 'Designer', 'Creative Problem Solver'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        const displayText = isDeleting 
            ? currentText.slice(0, charIndex - 1) 
            : currentText.slice(0, charIndex + 1);

        typedTextElement.textContent = displayText;

        if (!isDeleting && displayText === currentText) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && displayText === '') {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            const typingSpeed = isDeleting ? 50 : 100;
            charIndex += isDeleting ? -1 : 1;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    // In a real-world scenario, you'd send this data to a server
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
    
    // Reset the form
    e.target.reset();
});

// Simple scroll-based navigation bar effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});