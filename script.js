function switchLanguage(lang) {
    const elements = {
        'ru': {
            'title': 'Информация',
            'welcome': 'Добро пожаловать на наш сайт! Здесь вы можете найти информацию о нашем проекте, его целях и возможностях.',
            'tech': 'Мы используем современные технологии для создания удобного интерфейса и полезных функций.',
            'sections': 'На сайте доступны разделы с биографией, галереей и информацией о компании.',
            'language': 'Вы можете переключать язык интерфейса на русский или английский.'
        },
        'en': {
            'title': 'Information',
            'welcome': 'Welcome to our website! Here you can find information about our project, its goals, and capabilities.',
            'tech': 'We use modern technologies to create a user-friendly interface and useful features.',
            'sections': 'Sections with biography, gallery, and company information are available on the site.',
            'language': 'You can switch the interface language to Russian or English.'
        }
    };

    const titles = document.querySelector('h1');
    const paragraphs = document.querySelectorAll('main p');

    titles.innerText = elements[lang]['title'];
    paragraphs[0].innerText = elements[lang]['welcome'];
    paragraphs[1].innerText = elements[lang]['tech'];
    paragraphs[2].innerText = elements[lang]['sections'];
    paragraphs[3].innerText = elements[lang]['language'];
}
