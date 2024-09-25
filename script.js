const languageSwitcher = document.getElementById('language-switcher');
const allElements = document.querySelectorAll('[data-translate]');

const translations = {
    'en': {
        'info': 'Information',
        'biography': 'Biography',
        'gallery': 'Gallery',
        'about': 'About Us',
        'extra': 'Extras',
        'footer': '© 2024 Shurix',
        'welcome': 'Welcome to our website!'
    },
    'ru': {
        'info': 'Информация',
        'biography': 'Биография',
        'gallery': 'Галерея',
        'about': 'О нас',
        'extra': 'Дополнительно',
        'footer': '© 2024 Shurix',
        'welcome': 'Добро пожаловать на наш сайт!'
    }
};

function setLanguage(language) {
    allElements.forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        if (translations[language][translationKey]) {
            element.innerText = translations[language][translationKey];
        }
    });
}

languageSwitcher.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
});

// Set default language on page load
window.onload = function() {
    setLanguage('ru');  // Default to Russian
};
