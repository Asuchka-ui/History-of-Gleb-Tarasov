// Функция для скрытия рекламы
function closeAd() {
    document.getElementById('ad-container').style.display = 'none';
}

// Функция для смены языка
function setLanguage(language) {
    const elements = document.querySelectorAll('[data-en], [data-ru]');

    elements.forEach(el => {
        const text = el.getAttribute(`data-${language}`);
        if (text) {
            el.textContent = text;
        }
    });
}
