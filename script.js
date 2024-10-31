const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a'); // Все ссылки в меню

// Открытие/закрытие бургер-меню
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

// Закрытие бургер-меню при нажатии на любую из ссылок
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// Получаем все ссылки, которые содержат хеш (ссылки на внутренние якоря)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки

        // Находим блок по указанному href и плавно скроллим к нему
        const targetId = this.getAttribute('href'); // получаем значение href (например, #about)
        const targetElement = document.querySelector(targetId); // находим элемент по ID

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Плавная анимация прокрутки
            });
        }
    });
});


