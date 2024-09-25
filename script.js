const languageSwitcher = document.getElementById('language-switcher');
const translations = {
    'en': {
        'info': 'Information',
        'biography': 'Biography',
        'gallery': 'Gallery',
        'about': 'About Us',
        'extra': 'Extras',
        'welcome': 'Welcome to our website!'
    },
    'ru': {
        'info': 'Информация',
        'biography': 'Биография',
        'gallery': 'Галерея',
        'about': 'О нас',
        'extra': 'Дополнительно',
        'welcome': 'Добро пожаловать на наш сайт!'
    }
};

function setLanguage(language) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    localStorage.setItem('selectedLanguage', language);
}

// Проверяем и загружаем выбранный язык
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru';
    setLanguage(savedLanguage);
    languageSwitcher.value = savedLanguage;
});

// Изменение языка
languageSwitcher.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
});

