// Функция переключения языка
function switchLanguage(language) {
    if (language === 'ru') {
        document.querySelector('header h1').textContent = 'Добро пожаловать на наш сайт';
        // Добавьте остальные переводы для текста на странице
    } else if (language === 'en') {
        document.querySelector('header h1').textContent = 'Welcome to our website';
        // Добавьте переводы для текста на английский
    }
}

// Вызываем переключение языка по умолчанию
switchLanguage('ru'); // Установить русский язык по умолчанию
