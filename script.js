function loadPage(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Сеть не ответила: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
            showAdBanner(page); // Показать рекламный баннер после загрузки страницы
        })
        .catch(error => console.error('Ошибка:', error));
}

function showAdBanner(page) {
    const adBanner = document.querySelector('.ad-banner');
    // Проверяем, если загруженная страница "info.html"
    if (page === 'info.html') {
        adBanner.style.display = 'block'; // Показываем рекламный баннер
    } else {
        adBanner.style.display = 'none'; // Скрываем рекламный баннер для других страниц
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadPage('info.html'); // Загружаем страницу по умолчанию
});

