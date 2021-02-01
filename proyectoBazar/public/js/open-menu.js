window.addEventListener('load', () => {
    const burgerButton = document.querySelector('#burger-button');
    const menu = document.querySelector('#menu');

    burgerButton.addEventListener('click', () => {
        menu.classList.toggle('block');
    });
})