const questions = document.querySelectorAll('.questions-list-item');
questions.forEach( element => {
    element.addEventListener('click', () => {
        element.children[1].classList.toggle('item-response-closed');
        element.children[0].children[0].classList.toggle('image-closed');
    })
})
