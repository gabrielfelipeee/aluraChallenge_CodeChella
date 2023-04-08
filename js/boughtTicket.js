const elementName = document.querySelector('#bought-ticket-name');
const elementTypeTicket = document.querySelector('#bought-ticket_ticket-type');
const elementSector = document.querySelector('#bought-ticket_sector');
const elementDate = document.querySelector('#bought-ticket_date');



elementName.innerHTML = localStorage.getItem('nome');
elementTypeTicket.innerHTML = localStorage.getItem('ticket-type');
elementSector.innerHTML = localStorage.getItem('sector');
elementDate.innerHTML = localStorage.getItem('event-date');
