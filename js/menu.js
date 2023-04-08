const menu = document.querySelector('.icon-menu');
menu.addEventListener('click', () => {
    const listMenuInvisible = document.querySelector('.list-menu');

    listMenuInvisible.classList.toggle('list-menu-invisible');
})
