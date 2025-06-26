document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.navbar-menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const menuLinks = document.querySelectorAll('.navbar-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });

    // Navbar scroll effect and language dropdown background toggle
    const navbar = document.querySelector('.navbar');
    const languageSelect = document.getElementById('language-select');
    const languageSelectMobile = document.getElementById('language-select-mobile');

    function updateNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            languageSelect?.classList.add('scrolled');
            languageSelectMobile?.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
            languageSelect?.classList.remove('scrolled');
            languageSelectMobile?.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNavbarScroll);
    updateNavbarScroll(); // Initial check on page load

    // Leaf animation for hero section
    const leafIcons = ['fa-leaf', 'fa-seedling', 'fa-spa', 'fa-tree'];
    const leafContainer = document.getElementById('leaf-container');

    function createLeaf() {
        const leaf = document.createElement('i');
        const randomIcon = leafIcons[Math.floor(Math.random() * leafIcons.length)];
        leaf.className = `fas ${randomIcon} leaf-animation`;
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.fontSize = (Math.random() * 10 + 10) + 'px';
        leaf.style.animationDuration = (Math.random() * 5 + 5) + 's';
        leaf.style.animationDelay = (Math.random() * 2) + 's';
        leafContainer.appendChild(leaf);

        // Remove leaf after animation completes
        setTimeout(() => {
            leaf.remove();
        }, 10000);
    }

    // Create leaves periodically
    setInterval(createLeaf, 300);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Calendar day click handler
    document.querySelectorAll('.calendar-day').forEach(day => {
        day.addEventListener('click', function() {
            if(this.classList.contains('has-event')) {
                alert('Event on this day! Click the "View All Events" button for details.');
            }
        });
    });

    // Language toggle
    const langElements = document.querySelectorAll('[class^="lang-"]');

    function setLanguage(lang) {
        langElements.forEach(el => {
            if(el.classList.contains(`lang-${lang}`)) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        });
    }

    languageSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
        if(languageSelectMobile) languageSelectMobile.value = e.target.value;
    });

    if(languageSelectMobile) {
        languageSelectMobile.addEventListener('change', (e) => {
            setLanguage(e.target.value);
            if(languageSelect) languageSelect.value = e.target.value;
        });
    }

    // Initialize language on page load
    setLanguage(languageSelect.value);
});
