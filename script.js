document.addEventListener("DOMContentLoaded", function() {
    const advertisement = document.getElementById("advertisement");

    // Показать рекламу через 1 секунду после загрузки страницы
    setTimeout(function() {
        advertisement.style.opacity = "1"; // Изменить opacity для показа рекламы
    }, 1000);
});

// Функция переключения языка
function switchLanguage(language) {
    if (language === 'ru') {
        // Русский язык
        document.querySelector('header h1').textContent = 'Добро пожаловать на наш сайт';
        document.querySelector('header p').textContent = 'Это пример текста для информационной страницы.';
    } else {
        // Английский язык
        document.querySelector('header h1').textContent = 'Welcome to our website';
        document.querySelector('header p').textContent = 'This is a sample text for the information page.';
    }
}
