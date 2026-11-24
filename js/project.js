// project.js - Project page specific functionality

let currentLightboxIndex = 0;
let currentLightboxImages = [];

// Load project details
function loadProjectDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));
    
    if (!projectId) {
        showError('Project ID not specified');
        return;
    }

    if (!window.worksData) {
        showError('Project data not loaded');
        return;
    }

    const project = window.worksData.find(p => p.id === projectId);
    if (!project) {
        showError('Project not found');
        return;
    }

    displayProjectDetails(project);
}

// Display project details
function displayProjectDetails(project) {
    const projectContent = document.getElementById('projectContent');
    const lang = getCurrentLanguage();
    
    const title = getTranslation(project.title, lang);
    const detailedDescription = project.detailedDescription 
        ? getTranslation(project.detailedDescription, lang)
        : getTranslation(project.description, lang);

    // Generate gallery HTML
    const galleryHTML = project.images && project.images.length > 1 ? `
        <div class="project-gallery">
            <h3 class="gallery-title" data-i18n="projectGallery">Project Gallery</h3>
            <div class="gallery-grid">
                ${project.images.map((img, index) => `
                    <div class="gallery-item" data-index="${index}" tabindex="0" role="button" aria-label="View image ${index + 1}">
                        <img src="${img}" alt="${title} - Image ${index + 1}" class="gallery-img">
                        <div class="gallery-overlay">
                            <i class="fas fa-search-plus"></i>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    // Generate video HTML
    const videoHTML = project.video ? `
        <div class="video-container">
            <h3 class="video-title" data-i18n="projectDemo">Project Demo</h3>
            <div class="video-wrapper">
                <iframe src="${project.video}" 
                        title="${title} Demo" 
                        referrerpolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>
        </div>
    ` : '';

    projectContent.innerHTML = `
        <div class="project-header">
            <h1 class="project-title">${title}</h1>
            <div class="project-meta">
                <span><i class="far fa-calendar"></i> ${formatDate(project.date, lang)}</span>
                <span><i class="far fa-folder"></i> ${getTranslatedCategory(project.category, lang)}</span>
            </div>
            <img src="${project.image}" alt="${title}" class="project-image">
        </div>

        <div class="project-content">
            <div class="project-description">
                <h3 data-i18n="aboutProject">About This Project</h3>
                <p>${detailedDescription}</p>
                ${videoHTML}
                ${galleryHTML}
            </div>

            <div class="project-sidebar">
                <div class="project-tech">
                    <h3 data-i18n="technologiesUsed">Technologies Used</h3>
                    <ul class="tech-list">
                        ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                </div>

                <div class="project-links">
                    <h3 data-i18n="projectLinks">Project Links</h3>
                    ${project.github ? `<a href="${project.github}" target="_blank"><i class="fab fa-github"></i> <span data-i18n="sourceCode">Source Code</span></a>` : ''}
                    ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank"><i class="fas fa-external-link-alt"></i> <span data-i18n="liveDemo">Live Demo</span></a>` : ''}
                    
                </div>
            </div>
        </div>
    `;

    document.title = `${title} | Mazen Alyousef - C# Developer`;
    
    if (typeof applyLanguage !== 'undefined') {
        applyLanguage(lang);
    }
    
    // Initialize lightbox after content is rendered
    setTimeout(initLightbox, 100);
}

// Show error
function showError(message) {
    const projectContent = document.getElementById('projectContent');
    projectContent.innerHTML = `
        <div class="error">
            <i class="fas fa-exclamation-triangle"></i>
            <h2>${message}</h2>
            <p><a href="index.html#works">Return to Projects</a></p>
        </div>
    `;
}

// Handle language change
function handleLanguageChange(lang) {
    loadProjectDetails();
}

// Lightbox functionality
function initLightbox() {
    const lightboxModal = document.getElementById('lightboxModal');
    if (!lightboxModal) return;
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (!galleryItems.length) return;
    
    // Set current images
    const galleryImages = document.querySelectorAll('.gallery-img');
    currentLightboxImages = Array.from(galleryImages).map(img => ({
        src: img.src,
        alt: img.alt
    }));
    
    // Open lightbox
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
            }
        });
    });
    
    // Close lightbox
    document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal.classList.contains('active')) closeLightbox();
    });
    
    // Navigation
    document.getElementById('lightboxPrev')?.addEventListener('click', showPrevImage);
    document.getElementById('lightboxNext')?.addEventListener('click', showNextImage);
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
    });
    
    // Create thumbnails
    createThumbnails();
}

function openLightbox(index) {
    const lightboxModal = document.getElementById('lightboxModal');
    currentLightboxIndex = index;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateLightbox();
    document.getElementById('lightboxClose')?.focus();
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
}

function showPrevImage() {
    if (currentLightboxIndex > 0) {
        currentLightboxIndex--;
        updateLightbox();
    }
}

function showNextImage() {
    if (currentLightboxIndex < currentLightboxImages.length - 1) {
        currentLightboxIndex++;
        updateLightbox();
    }
}

function updateLightbox() {
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxCurrent = document.getElementById('lightboxCurrent');
    const lightboxTotal = document.getElementById('lightboxTotal');
    const currentImage = currentLightboxImages[currentLightboxIndex];
    
    if (!currentImage) return;
    
    lightboxImage.src = currentImage.src;
    lightboxImage.alt = currentImage.alt;
    lightboxCaption.textContent = currentImage.alt;
    lightboxCurrent.textContent = currentLightboxIndex + 1;
    lightboxTotal.textContent = currentLightboxImages.length;
    
    // Update thumbnails
    document.querySelectorAll('.lightbox-thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentLightboxIndex);
    });
}

function createThumbnails() {
    const container = document.getElementById('lightboxThumbnails');
    if (!container) return;
    
    container.innerHTML = '';
    currentLightboxImages.forEach((image, index) => {
        const thumb = document.createElement('img');
        thumb.className = 'lightbox-thumbnail';
        thumb.src = image.src;
        thumb.alt = `Thumbnail ${index + 1}`;
        thumb.addEventListener('click', () => {
            currentLightboxIndex = index;
            updateLightbox();
        });
        container.appendChild(thumb);
    });
}

// Initialize project page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Project page initializing...');
    
    if (!window.worksData) {
        console.error('worksData not loaded!');
        return;
    }
    
    loadProjectDetails();
    if (typeof onLanguageChange !== 'undefined') {
        onLanguageChange(handleLanguageChange);
    }
});

// Expose for debugging
window.loadProjectDetails = loadProjectDetails;