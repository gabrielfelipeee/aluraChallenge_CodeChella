const menu = document.querySelector('.icon-menu');
menu.addEventListener('click', () => {
    const listMenuInvisible = document.querySelector('.list-menu');

    listMenuInvisible.classList.toggle('list-menu-invisible');
})


// Exibir perguntas frequentes
const questions = document.querySelectorAll('.questions-list-item');
questions.forEach( element => {
    element.addEventListener('click', () => {
        element.children[1].classList.toggle('item-response-closed');
        element.children[0].children[0].classList.toggle('image-closed');
    })
})
