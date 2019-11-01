'use strict';

//  Организовать массив для хранения товаров в корзине
var card = {};

var items = {
  '1': { name: 'book', price: 50, quantity: 1 },
  '2': { name: 'pen', price: 5, quantity: 1 },
  '3': { name: 'bag', price: 100, quantity: 1 }
};

var addItem = function addItem(art) {
  if (art in card) {
    card[art].quantity++;
  } else {
    card[art] = items[art];
  }
};
// * Сделать так, чтобы товары в каталоге выводились при помощи JS

var getCatalog = function getCatalog() {
  var div = document.getElementById('catalog');
  var ol = document.createElement('ol');
  div.appendChild(ol);

  for (var key in items) {
    var li = document.createElement('li');
    li.innerHTML = items[key].name + ', ' + items[key].price + ' $';
    ol.appendChild(li);
  }
};

// Показать содержимое корзины
var getCard = function getCard() {

  var info = Object.keys(card).length == 0 ? 'empty' : '';
  var i = 1;
  for (var key in card) {
    info = info + ('<br>\n      item ' + i + ': ' + card[key].name + ';\n      price: ' + card[key].price + ';\n      quantity: ' + card[key].quantity);
    i++;
  }
  document.getElementById('card').innerHTML = 'Your Card: ' + info;
};

// Организовать функцию countBasketPrice, которая будет считать стоимость корзины

var countBasketItems = function countBasketItems(arr) {
  var count = 0;
  for (var key in arr) {
    count = count + arr[key].quantity;
  }
  return count;
};

var countBasketPrice = function countBasketPrice(arr) {
  var count = 0;
  for (var key in arr) {
    count = count + arr[key].price * arr[key].quantity;
  }
  return count;
};

// Показать стоимость корзины  и количество товаров
var getAnswerTask3 = function getAnswerTask3() {
  var cardIsEmpty = 'Your Card is empty';
  var cardIsFull = countBasketItems(card) + ' items in the Card. Total price: ' + countBasketPrice(card);

  document.getElementById('task3').innerHTML = Object.keys(card).length == 0 ? cardIsEmpty : cardIsFull;
};