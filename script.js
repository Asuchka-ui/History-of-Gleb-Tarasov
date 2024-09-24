document.addEventListener('DOMContentLoaded', function() {
    const adBanner = document.querySelector('.ad-banner');
    adBanner.style.display = 'block'; // Показываем рекламу при загрузке страницы

    // Закрыть рекламу
    const closeButton = document.querySelector('.close-btn');
    closeButton.addEventListener('click', function() {
        adBanner.style.display = 'none'; // Скрыть рекламу
    });
});

