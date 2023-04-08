const elementForm = document.querySelector('.form');
const elementDate = document.querySelector("#date-birth");


elementForm.addEventListener('submit', (event) => {
  event.preventDefault();

  localStorage.setItem('nome', document.querySelector('#name').value);
  localStorage.setItem('event-date', dateSelected());
  localStorage.setItem('ticket-type', ticketSelected());
  localStorage.setItem('sector', sectorSelected());

  location.replace('bought-ticket.html');
})



function ticketSelected() {
  const elementItens = document.querySelector('#ticket-type')
  return elementItens.options[elementItens.selectedIndex].innerText;
}


function sectorSelected() {
  const elementItens = document.querySelector('#sectors')
  return elementItens.options[elementItens.selectedIndex].innerText;
}


function dateSelected() {
  const elementItens = document.querySelector('#event-date')
  return elementItens.options[elementItens.selectedIndex].innerText;
}
