document.addEventListener('DOMContentLoaded', function() {
    const adBanner = document.querySelector('.ad-banner');
    
    // Показываем рекламу при загрузке страницы
    adBanner.style.display = 'block';

    // Закрыть рекламу по нажатию кнопки
    const closeButton = document.querySelector('.close-btn');
    closeButton.addEventListener('click', function() {
        adBanner.style.display = 'none'; // Скрыть рекламу
    });
});
