function setLanguage(language) {
    if (language === 'en') {
        // Измените текст на английский
        document.querySelector('.content h1').innerText = "Welcome to my site!";
        document.querySelector('.content p').innerText = "Here you will find information about the project and much more.";
        document.querySelector('.dropdown-content a').innerText = "Video Call"; // Пример для раздела Дополнительно
    } else {
        // Вернуть текст на русский
        document.querySelector('.content h1').innerText = "Добро пожаловать на мой сайт!";
        document.querySelector('.content p').innerText = "Здесь вы найдете информацию о проекте и многое другое.";
        document.querySelector('.dropdown-content a').innerText = "Видеозвонок"; // Пример для раздела Дополнительно
    }
}

