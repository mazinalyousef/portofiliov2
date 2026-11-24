// Language and Theme Management
let currentLanguage = 'en';

// Language change callbacks
const languageChangeCallbacks = [];

function onLanguageChange(callback) {
    languageChangeCallbacks.push(callback);
}

// Initialize language from localStorage or browser preference
function initLanguage() {
    const savedLanguage = localStorage.getItem('language');
    const browserLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
    currentLanguage = savedLanguage || browserLang;
    
    applyLanguage(currentLanguage);
    updateLanguageToggle();
    triggerLanguageChange();
    
    // Set global variable for helpers.js
    window.currentLanguage = currentLanguage;
}

// Toggle between languages
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLanguage);
    window.currentLanguage = currentLanguage; // Update global
    
    applyLanguage(currentLanguage);
    updateLanguageToggle();
    triggerLanguageChange();
}

// Trigger all language change callbacks
function triggerLanguageChange() {
    languageChangeCallbacks.forEach(callback => {
        try {
            callback(currentLanguage);
        } catch (error) {
            console.error('Language change callback error:', error);
        }
    });
}

// Update language toggle button text
function updateLanguageToggle() {
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
        langToggle.textContent = currentLanguage === 'en' ? 'العربية' : 'English';
    }
}

// Apply language to the page
function applyLanguage(lang) {
    // Update HTML direction and language
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholder texts
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}

// Theme Toggle Functions
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const themeIcon = themeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-theme');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    } else {
        document.body.classList.remove('dark-theme');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
}

function toggleTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const themeIcon = themeToggle.querySelector('i');
    
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        localStorage.setItem('theme', 'dark');
    } else {
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        localStorage.setItem('theme', 'light');
    }
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    themeToggle.addEventListener('click', toggleTheme);
}

// Mobile Menu Functions - SIMPLIFIED VERSION
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (!mobileMenuBtn || !navLinks) {
        console.log('Mobile menu elements not found');
        return;
    }
    
    // Simple toggle function
    function toggleMobileMenu() {
        const isOpen = navLinks.classList.contains('active');
        
        if (isOpen) {
            // Close menu
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            
            // Update icon
            const menuIcon = mobileMenuBtn.querySelector('i');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        } else {
            // Open menu
            navLinks.classList.add('active');
            document.body.classList.add('menu-open');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            
            // Update icon
            const menuIcon = mobileMenuBtn.querySelector('i');
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        }
    }
    
    // Setup overlay click to close
    const overlay = document.getElementById('mobileMenuOverlay');
    if (overlay) {
        overlay.addEventListener('click', toggleMobileMenu);
    }
    
    // Setup close button
    const closeBtn = document.getElementById('mobileCloseBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Setup menu button click
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking links
    const menuLinks = navLinks.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            
            // Update icon
            const menuIcon = mobileMenuBtn.querySelector('i');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });
    
    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
}

// Setup language toggle
function setupLanguageToggle() {
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing...');
    initLanguage();
    initTheme();
    setupThemeToggle();
    setupLanguageToggle();
    initMobileMenu();
});


// Get current language (overrides helpers.js version for consistency)
function getCurrentLanguage() {
    return window.currentLanguage || 'en';
}
// Make sure global functions are available
window.getCurrentLanguage = getCurrentLanguage;
window.onLanguageChange = onLanguageChange;
window.applyLanguage = applyLanguage;