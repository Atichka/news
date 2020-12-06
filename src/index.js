import "./style.css";

const messageButton = document.querySelector('.message__button');
const cardList = document.querySelector('.card-list');

messageButton.addEventListener('click', visibleMessage);

function visibleMessage () {
  cardList.classList.toggle('card-list__hide');
}
