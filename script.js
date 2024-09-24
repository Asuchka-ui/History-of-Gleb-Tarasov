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

