// index.js - Index page specific functionality

let currentFilter = 'all';
let filterInitialized = false;

// Display works on index page
function displayWorks(works, lang = getCurrentLanguage()) {
    const worksGrid = document.getElementById('worksGrid');
    if (!worksGrid) return;
    
    worksGrid.innerHTML = '';

    // Remove duplicates
    const uniqueIds = new Set();
    const uniqueWorks = [];
    works.forEach(work => {
        if (!uniqueIds.has(work.id)) {
            uniqueIds.add(work.id);
            uniqueWorks.push(work);
        }
    });

    uniqueWorks.forEach(work => {
        const title = getTranslation(work.title, lang);
        const description = getTranslation(work.description, lang);
        const categoryLabel = getTranslatedCategory(work.category, lang);
        const imageUrl = work.image.startsWith('images/') && work.image.includes('main') 
            ? work.image 
            : `https://placehold.co/800x600/10b981/ffffff?text=${encodeURIComponent(title)}`;
        
        const workCard = document.createElement('div');
        workCard.className = 'work-card';
        workCard.setAttribute('data-category', work.category);
        
        const techTagsHTML = work.technologies && work.technologies.length > 0 ? `
            <div class="work-tech-tags">
                ${work.technologies.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        ` : '';

        workCard.innerHTML = `
            <div class="work-img-wrapper">
                <img src="${imageUrl}" alt="${title}" class="work-img" loading="lazy">
                <span class="work-category-badge">${categoryLabel}</span>
            </div>
            <div class="work-content">
                <h3 class="work-title">${title}</h3>
                <p class="work-date"><i class="far fa-calendar-alt"></i> ${formatDate(work.date, lang)}</p>
                <p class="work-description">${description}</p>
                ${techTagsHTML}
                <div class="work-links">
                    <a href="project.html?id=${work.id}" class="work-link">
                        <span data-i18n="viewProject">View Project</span>
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
        
        worksGrid.appendChild(workCard);
    });
    
    // Re-apply translations
    if (typeof applyLanguage !== 'undefined') {
        applyLanguage(lang);
    }
}

// Filter works
function filterWorks(filter, lang = getCurrentLanguage()) {
    currentFilter = filter;
    const worksToDisplay = filter === 'all' 
        ? (window.worksData || []) 
        : (window.worksData || []).filter(work => work.category === filter);
    displayWorks(worksToDisplay, lang);
}

// Setup filter buttons
function setupFilterButtons() {
    if (filterInitialized) return;
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterWorks(button.getAttribute('data-filter'));
        });
    });
    
    filterInitialized = true;
}

// Handle language change
function handleLanguageChange(lang) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        const filter = button.getAttribute('data-filter');
        const translationKey = `filter${filter.charAt(0).toUpperCase() + filter.slice(1)}`;
        if (translations[lang] && translations[lang][translationKey]) {
            button.textContent = translations[lang][translationKey];
        }
    });
    
    filterWorks(currentFilter, lang);
}

// Active navigation link
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    function updateActiveNav() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}` || href.endsWith(`#${current}`)) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
}

// Handle initial anchor on page load
function handleInitialAnchor() {
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const targetElement = document.getElementById(hash);
        
        if (targetElement) {
            setTimeout(() => {
                const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }, 300);
        }
    }
}

// Initialize index page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Index page initializing...');
    
    // Make sure data is loaded
    if (!window.worksData) {
        console.error('worksData not loaded!');
        return;
    }
    
    setupFilterButtons();
    filterWorks('all');
    
    if (typeof onLanguageChange !== 'undefined') {
        onLanguageChange(handleLanguageChange);
    }
    
    if (typeof getCurrentLanguage !== 'undefined') {
        handleLanguageChange(getCurrentLanguage());
    }
    
    initActiveNav();
    handleInitialAnchor();
});

// Handle page restore from cache
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        filterWorks(currentFilter);
        handleInitialAnchor();
    }
});

// Expose for debugging
window.filterWorks = filterWorks;
window.displayWorks = displayWorks;