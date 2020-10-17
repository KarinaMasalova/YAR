const kebab = document.querySelector('.kebab-menu__item');
const menu = document.querySelector('.menu');
const aboutUsBtn = document.querySelector('about-us__button');
const screen1 = document.querySelector('screen-1');

window.addEventListener('load', () => {
    kebab.addEventListener('click', () => {
        if (!kebab.classList.contains('kebab-menu__item_active')) {
            kebab.classList.toggle('kebab-menu__item_active');
            menu.classList.toggle('menu_active');
        } else {
            kebab.classList.toggle('kebab-menu__item_active');
            menu.classList.toggle('menu_active');
        }
    });  
});

/*
window.addEventListener('DOMContentLoaded', (event) => {
    function mouseMove(e) {
        aboutUsBtn.style.left = -50 + e.clientX + "px";
        aboutUsBtn.style.top = -50 + e.clientY + "px";
    }
    
    aboutUsBtn.addEventListener('click', (e) => {
        console.log('hi');
        document.addEventListener('mousemove', mouseMove);
    });
    
    screen1.addEventListener('click', (e) => {
        document.removeEventListener('mousemove', mouseMove)
        aboutUsBtn.style.top = "";
        aboutUsBtn.style.left = "";
    });
}); */
