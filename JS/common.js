(function () {
    let startTime = performance.now();

    let locationToButtonId = {
        '/portfolio/index.html': 'side_menu_about_me',
        '/portfolio/work_experience.html': 'side_menu_work_exp',
        '/portfolio/projects.html': 'side_menu_projects',
        '/portfolio/education.html': 'side_menu_education'
    }

    window.onload = function () {
        let endTime = performance.now();
        let loadTime = endTime - startTime;
        document.getElementById('loadTime').innerText =
            'Время загрузки страницы: ' + loadTime + ' миллисекунд';

        let cur = (new URL(document.location)).pathname
        document.getElementById(locationToButtonId[cur]).classList.add('side_menu__option_active')
    }
})()



