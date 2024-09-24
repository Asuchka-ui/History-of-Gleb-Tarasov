function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Ошибка:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadPage('info.html'); // Загружаем страницу по умолчанию
});
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
            showAdWidget(page); // Показать виджет рекламы после загрузки страницы
        })
        .catch(error => console.error('Ошибка:', error));
}

function showAdWidget(page) {
    const adWidget = document.getElementById('ad-widget');
    // Проверяем, если загруженная страница "info.html"
    if (page === 'info.html') {
        adWidget.style.display = 'block'; // Показываем виджет
        setTimeout(() => {
            adWidget.classList.add('show'); // Добавляем класс для анимации
        }, 10); // Немного задержки, чтобы увидеть анимацию
    } else {
        adWidget.style.display = 'none'; // Скрываем виджет для других страниц
        adWidget.classList.remove('show'); // Убираем класс анимации
    }
}

function closeAdWidget() {
    const adWidget = document.getElementById('ad-widget');
    adWidget.classList.remove('show'); // Убираем класс анимации
    setTimeout(() => {
        adWidget.style.display = 'none'; // Скрываем виджет после анимации
    }, 500); // Дождаться окончания анимации
}

document.addEventListener("DOMContentLoaded", function() {
    loadPage('info.html'); // Загружаем страницу по умолчанию
});

