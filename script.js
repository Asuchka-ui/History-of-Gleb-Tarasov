// Инициализация языка по умолчанию
let currentLanguage = 'ru';

// Функция для установки языка
function setLanguage(lang) {
    currentLanguage = lang;
    if (lang === 'ru') {
        document.querySelector('h1').innerText = 'Название вашего сайта';
        document.querySelector('h2').innerText = 'О сайте';
        document.querySelector('button:nth-of-type(1)').innerText = 'Русский';
        document.querySelector('button:nth-of-type(2)').innerText = 'English';
        // Дополните остальные элементы
    } else if (lang === 'en') {
        document.querySelector('h1').innerText = 'Website Title';
        document.querySelector('h2').innerText = 'About the Site';
        document.querySelector('button:nth-of-type(1)').innerText = 'Russian';
        document.querySelector('button:nth-of-type(2)').innerText = 'English';
        // Дополните остальные элементы
    }
}

// Установка языка по умолчанию при загрузке
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
});
