const kebab = document.querySelector('.kebab-menu__item');
const menu = document.querySelector('.menu');

kebab.addEventListener('click', (event) => {
    if (!kebab.classList.contains('kebab-menu__item_active')) {
        kebab.classList.toggle('kebab-menu__item_active');
        menu.classList.toggle('menu_active');
    } else {
        kebab.classList.toggle('kebab-menu__item_active');
        menu.classList.toggle('menu_active');
    }
});
