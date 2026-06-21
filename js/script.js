// ===== NAVBAR TOGGLE (Mobile) =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// ===== CLOSE NAVBAR ON LINK CLICK (Mobile) =====
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
        }
    });
});

// ===== ANIMATED COUNTER =====
const counters = document.querySelectorAll('.stat-number');

const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'));
    let current = 0;
    const increment = target / 60;
    const duration = 2000; // 2 seconds
    const stepTime = duration / 60;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.textContent = target + (el.getAttribute('data-count') === '98' ? '%' : '+');
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current) + (el.getAttribute('data-count') === '98' ? '%' : '+');
        }
    }, stepTime);
};

// ===== INTERSECTION OBSERVER FOR COUNTERS =====
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                animateCounter(el);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
} else {
    // Fallback for older browsers
    counters.forEach(counter => {
        animateCounter(counter);
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== FORM HANDLING (for contact/post-job pages) =====
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = '⏳ পাঠানো হচ্ছে...';
        btn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            alert('✅ আপনার তথ্য সফলভাবে জমা হয়েছে!');
            form.reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1500);
    });
});

// ===== SEARCH FUNCTIONALITY (for services page) =====
const searchInput = document.getElementById('searchInput');
const serviceCards = document.querySelectorAll('.service-card');

if (searchInput && serviceCards.length) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        serviceCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? 'block' : 'none';
        });
    });
}

// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '⬆';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #EA580C;
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(234, 88, 12, 0.4);
    display: none;
    transition: all 0.3s ease;
    z-index: 999;
`;

document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// ===== CONSOLE WELCOME =====
console.log('🧹 Kamer Bedi');
console.log('কাজের মানুষ, সম্মানের মানুষ');
console.log('📧 info@kamerbedi.com');
console.log('🌐 https://kamerbedi.vercel.app');