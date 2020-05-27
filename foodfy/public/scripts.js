const modalBase = document.querySelector('.modal-base')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', () => modalBase.classList.add('active'))
}

document.querySelector('.close-modal').addEventListener('click', () => modalBase.classList.remove('active'))
