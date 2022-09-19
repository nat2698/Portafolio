const buttom_responsive = document.querySelector('.btn');
const menu = document.querySelector('.navbar');
const menu_items = document.querySelectorAll('.navbar a');

menu_items.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('responsive_active');
        menu.classList.add('navbar');
    });
});

buttom_responsive.addEventListener('click', () => {
    menu.classList.toggle('responsive_active');
    menu.classList.toggle('navbar');
    // console.log('click');
});