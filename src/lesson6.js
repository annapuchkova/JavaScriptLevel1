

//  Организовать массив для хранения товаров в корзине
const card = {};

const items = {
  '1': {name: 'book', price: 50, quantity: 1},
  '2': {name: 'pen', price: 5, quantity: 1},
  '3': {name: 'bag', price: 100, quantity: 1}
};

// Показать содержимое корзины
const getCard = () => {
 
    let info = (Object.keys(card).length == 0) ? 'empty' : '';
      let i = 1;
      for( let key in card ) {
        info = info + `<br>
        item ${i}: ${card[key].name};
        price: ${card[key].price};
        quantity: ${card[key].quantity}`;
        i++;
      }
    document.getElementById('card').innerHTML = `Your Card: ${info}`;
  };
  window.addEventListener('load', getCard());
    // Показать стоимость корзины  и количество товаров
const getAnswerTask3 = () => {
    let cardIsEmpty = `Your Card is empty`;
    let cardIsFull = `${countBasketItems(card)} items in the Card. Total price: ${countBasketPrice(card)}`;
    
  document.getElementById('total').innerHTML = (Object.keys(card).length == 0) ? cardIsEmpty : cardIsFull;
};


let buttonsCard;
const init2 = () => {
  buttonsCard = document.getElementsByClassName("sbuttonsCard");

    for (let i = 1; i <= ibuttonsCard.length; i++) {
      let art = 
      buttonsCard[i].onclick = addItem(i);

     }
};



const addItem = (art) => {
    
  if (art in card) {
    card[art].quantity++;
    } else {      
        card[art] = items[art];
    }      
    getCard();
    getAnswerTask3();
};
// * Сделать так, чтобы товары в каталоге выводились при помощи JS

const getCatalog = () => {
    let div = document.getElementById('catalog');
    let existElement = document.getElementById('olId');  // проверяем, что каталог еще не показан - ищем ID списка
    if (typeof(existElement) == 'undefined' || existElement == null) {
    let ol = document.createElement('ol');
    ol.id = 'olId';
    div.appendChild(ol);

    for (let key in items) {
        let li = document.createElement('li');
        li.innerHTML = `${items[key].name}, ${items[key].price} $`;
        ol.appendChild(li);
        let changeValue = document.getElementById('catalogButton');
        changeValue.value = "Hide Catalog";
      }
    } else {
        let changeValue = document.getElementById('catalogButton');
        changeValue.value = "Show Catalog";
        div.innerHTML = '';
    }

};



// Организовать функцию countBasketPrice, которая будет считать стоимость корзины

const countBasketItems = (arr) => {
    let count = 0;
    for( let key in arr ) {
      count = count + arr[key].quantity;
    }
    return count;  
  };
  
const countBasketPrice = (arr) => {
  let count = 0;
  for( let key in arr ) {
    count = count + arr[key].price * arr[key].quantity;
  }
  return count;  
};


// Галерея

let images;
const init = () => {
    images = document.getElementsByClassName("small_picture");

    for (let i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;

     }
};

let selectedItemID;

const changeBigPicture = (eventObj) => {

    let appDiv = document.getElementById("big_picture"); //получаем ID Divа с большой картинкой
    appDiv.innerHTML = "";    // выводим пустое значение на месте большой картинки
    let eventElement = eventObj.target; // получаем target для маленькой картинки, по которой кликнули
    let imageNameParts = eventElement.id.split("_"); //получаем ID маленькой картинки без _ (image и номер)
    let src = "img/gallery/big/" + imageNameParts[1] + ".jpg"; // подставляем этот номер в адрес большой картинки
    let imageDomElement = document.createElement("img"); // создаем новый IMG
    imageDomElement.src = src; // добавляем ему созданный адрес
    imageDomElement.className = "big_picture"; // добавляем ему css класс
    imageDomElement.id = `${imageNameParts[1]}`; // присваеваем ID большой картинке. ID будет = номеру из маленькой картинки 
    selectedItemID = +imageDomElement.id; // создаем переменную, равную ID большой картинки, преобразованному в цисло
    imageDomElement.onerror = noImg; // добавляем событие, на случай если картинки нет по этому адресу
    appDiv.appendChild(imageDomElement); // добавляем новый img в див для большой картинки

    let navDiv = document.getElementById("nav");  // делаем видимым блок навигации
    navDiv.style.visibility = "visible";
};

//вывод No picture, если большой картинки нет
const noImg = () => {
    let appDiv2 = document.getElementById("big_picture");
    appDiv2.innerHTML = "";
    let noPick = document.createElement("span");
    noPick.className = "no_picture"; 
    noPick.innerHTML = "No picture"; 
    appDiv2.appendChild(noPick);
};

// кнопки навигации

//selected ID  - id большой картинки, которая показана в данный момент
// если картинка последняя, то кнопка Вперед покажет первую картинку
// если картинка не последняя, то вызываем selectItem для имитации клика по следующей
const frw = () => {
  selectedItemID++;
  if (selectedItemID > images.length) {
    selectedItemID = 1;
  }
  selectItem();
};

const bck = () => {
  selectedItemID--;
  if (selectedItemID == 0) {
    selectedItemID = images.length;
  }
  selectItem();
};

//имитируем клик на предыдущей/следующей картинке
const selectItem = () => {
  let nextClick = document.getElementById(`image_${selectedItemID}`);
  nextClick.click();
};

 window.onload = init;