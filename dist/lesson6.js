'use strict';

//  Организовать массив для хранения товаров в корзине
var card = {};

var items = {
  '1': { name: 'book', price: 50, quantity: 1 },
  '2': { name: 'pen', price: 5, quantity: 1 },
  '3': { name: 'bag', price: 100, quantity: 1 }
};

// Показать содержимое корзины
var getCard = function getCard() {

  var info = Object.keys(card).length == 0 ? 'empty' : '';
  var i = 1;
  for (var key in card) {
    info = info + ('<br>\n        item ' + i + ': ' + card[key].name + ';\n        price: ' + card[key].price + ';\n        quantity: ' + card[key].quantity);
    i++;
  }
  document.getElementById('card').innerHTML = 'Your Card: ' + info;
};
window.addEventListener('load', getCard());
// Показать стоимость корзины  и количество товаров
var getAnswerTask3 = function getAnswerTask3() {
  var cardIsEmpty = 'Your Card is empty';
  var cardIsFull = countBasketItems(card) + ' items in the Card. Total price: ' + countBasketPrice(card);

  document.getElementById('total').innerHTML = Object.keys(card).length == 0 ? cardIsEmpty : cardIsFull;
};

var addItem = function addItem(art) {

  if (art in card) {
    card[art].quantity++;
  } else {
    card[art] = items[art];
  }
  getCard();
  getAnswerTask3();
};
// * Сделать так, чтобы товары в каталоге выводились при помощи JS

var getCatalog = function getCatalog() {
  var div = document.getElementById('catalog');
  var existElement = document.getElementById('olId'); // проверяем, что каталог еще не показан - ищем ID списка
  if (typeof existElement == 'undefined' || existElement == null) {
    var ol = document.createElement('ol');
    ol.id = 'olId';
    div.appendChild(ol);

    for (var key in items) {
      var li = document.createElement('li');
      li.innerHTML = items[key].name + ', ' + items[key].price + ' $';
      ol.appendChild(li);
      var changeValue = document.getElementById('catalogButton');
      changeValue.value = "Hide Catalog";
    }
  } else {
    var _changeValue = document.getElementById('catalogButton');
    _changeValue.value = "Show Catalog";
    div.innerHTML = '';
  }
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

// Галерея

var images = void 0;
var init = function init() {
  images = document.getElementsByClassName("small_picture");

  for (var i = 0; i < images.length; i++) {
    images[i].onclick = changeBigPicture;
  }
};

var selectedItemID = void 0;

var changeBigPicture = function changeBigPicture(eventObj) {

  var appDiv = document.getElementById("big_picture"); //получаем ID Divа с большой картинкой
  appDiv.innerHTML = ""; // выводим пустое значение на месте большой картинки
  var eventElement = eventObj.target; // получаем target для маленькой картинки, по которой кликнули
  var imageNameParts = eventElement.id.split("_"); //получаем ID маленькой картинки без _ (image и номер)
  var src = "img/gallery/big/" + imageNameParts[1] + ".jpg"; // подставляем этот номер в адрес большой картинки
  var imageDomElement = document.createElement("img"); // создаем новый IMG
  imageDomElement.src = src; // добавляем ему созданный адрес
  imageDomElement.className = "big_picture"; // добавляем ему css класс
  imageDomElement.id = '' + imageNameParts[1]; // присваеваем ID большой картинке. ID будет = номеру из маленькой картинки 
  selectedItemID = +imageDomElement.id; // создаем переменную, равную ID большой картинки, преобразованному в цисло
  imageDomElement.onerror = noImg; // добавляем событие, на случай если картинки нет по этому адресу
  appDiv.appendChild(imageDomElement); // добавляем новый img в див для большой картинки

  var navDiv = document.getElementById("nav"); // делаем видимым блок навигации
  navDiv.style.visibility = "visible";
};

//вывод No picture, если большой картинки нет
var noImg = function noImg() {
  var appDiv2 = document.getElementById("big_picture");
  appDiv2.innerHTML = "";
  var y = document.createElement("span");
  y.className = "no_picture";
  y.innerHTML = "No picture";
  appDiv2.appendChild(y);
  //  appDiv2.innerHTML = "No picture"; 
};

// кнопки навигации
var frw = function frw() {
  selectedItemID++;
  if (selectedItemID > images.length) {
    selectedItemID = 1;
  }
  selectItem();
};

var bck = function bck() {
  selectedItemID--;
  if (selectedItemID == 0) {
    selectedItemID = images.length;
  }
  selectItem();
};

var selectItem = function selectItem() {
  var x = document.getElementById('image_' + selectedItemID);
  x.click();
};

window.onload = init;