import "./style.css";

class Card {
  constructor(title, autor, dataTime, link, status) {
    this.cardElement = this.create(title, autor, dataTime, link, status);
  }

  create(titleValue, autorValue, dataTimeValue, linkValue, statusValue) {
    const element = document.createRange().createContextualFragment(`<div class="card">
    <h2 class="card__title">${titleValue}</h3>
    <p class="card__autor">${autorValue}</p>
    <p class="card__data-time">${dataTimeValue}</p>
    <a href=${linkValue} onclick="updateStatus(); return false;"class="card__link">Подробнее...</a>
    <p class="card__status">${statusValue}</p>
  </div>`)
    return element;
  }

}

class CardList {
  constructor(container) {
    this.container = container;
  }

  render(cards) {
    messageValue.textContent = Object.keys(cards).length;
    cards.forEach(element => {
      console.log(element);
      this.addCard(element.title,
        element.autor,
        element.dataTime,
        element.link,
        element.status);
    });
  }

  addCard(title, autor, dataTime, link, status) {
    const { cardElement } = new Card(title,
      autor,
      dataTime,
      link,
      status);
    this.container.appendChild(cardElement);
  }
}

const messageButton = document.querySelector('.message__button');
const cardList = document.querySelector('.card-list');
const messageValue = document.querySelector('.message__value');
const container = document.querySelector('.container');
const cardListObj = new CardList(document.getElementById('id-card-list'));

messageButton.addEventListener('click', visibleMessage);

function visibleMessage () {
  cardList.classList.toggle('hide');
  container.classList.toggle('hide');
}

window.addEventListener('load',function()
{
  fetch('./newsList.json').then(response => {
    console.log(response);
    return response.json();
  }).then(data => {
    // Work with JSON data here
    console.log(data);
    return cardListObj.render(data);
  }).catch(err => {
    // Do something for an error here
    console.log("Error Reading data " + err);
  });
})
