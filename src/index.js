const kebab = document.querySelector('.kebab-menu__item');
const menu = document.querySelector('.menu');
const menuItem = document.querySelector('.common');

kebab.addEventListener('click', (event) => {
    if (!kebab.classList.contains('kebab-menu__item_active')) {
        kebab.classList.add('kebab-menu__item_active');
        menu.classList.add('menu_active');
    } else {
        kebab.classList.remove('kebab-menu__item_active');
        menu.classList.remove('menu_active');
    }
});
