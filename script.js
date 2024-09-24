// script.js
function changeLanguage() {
    const language = document.getElementById('language').value;
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
}

// Пример перевода
const translations = {
    ru: {
        title: "Добро пожаловать на сайт",
        biographyTitle: "Биография",
        galleryTitle: "Галерея",
        aboutTitle: "О нас",
        additionalTitle: "Дополнительно",
        languageLabel: "Выберите язык:",
        welcomeText: "Здесь вы найдете информацию о нашем проекте.",
        exampleText: "Это пример сайта с несколькими страницами."
        // Добавьте другие переводы по мере необходимости
    },
    en: {
        title: "Welcome to the website",
        biographyTitle: "Biography",
        galleryTitle: "Gallery",
        aboutTitle: "About Us",
        additionalTitle: "Additional",
        languageLabel: "Select language:",
        welcomeText: "Here you will find information about our project.",
        exampleText: "This is an example of a website with several pages."
        // Добавьте другие переводы по мере необходимости
    }
};
