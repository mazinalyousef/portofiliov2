// Helper functions for language and formatting

// Get current language
function getCurrentLanguage() {
    return window.currentLanguage || 'en';
}

// Format date based on language
function formatDate(dateString, lang = getCurrentLanguage()) {
    try {
        const date = new Date(dateString);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        
        if (lang === 'ar') {
            return date.toLocaleDateString('ar-SA', options);
        } else {
            return date.toLocaleDateString('en-US', options);
        }
    } catch (error) {
        console.error('Error formatting date:', error);
        return dateString;
    }
}

// Get translated text from object
function getTranslation(obj, lang = getCurrentLanguage()) {
    if (!obj) return '';
    
    if (typeof obj === 'object' && obj[lang] !== undefined) {
        return obj[lang];
    } else if (typeof obj === 'object' && obj['en'] !== undefined) {
        return obj['en'];
    } else if (typeof obj === 'string') {
        return obj;
    }
    
    return '';
}

// Get translated category
function getTranslatedCategory(category, lang = getCurrentLanguage()) {
    const categories = {
        web: { en: 'Web Application', ar: 'تطبيق ويب' },
        desktop: { en: 'Desktop Application', ar: 'تطبيق سطح مكتب' },
        mobile: { en: 'Mobile Application', ar: 'تطبيق موبايل' }
    };
    
    if (categories[category] && categories[category][lang]) {
        return categories[category][lang];
    }
    
    return category;
}

// Get project by ID
function getProjectById(id) {
    if (!window.worksData) {
        console.error('worksData not loaded');
        return null;
    }
    return window.worksData.find(p => p.id === id) || null;
}

// Get projects by category
function getProjectsByCategory(category) {
    if (!window.worksData) return [];
    if (category === 'all') return window.worksData;
    return window.worksData.filter(p => p.category === category);
}