

//  Организовать массив для хранения товаров в корзине
const card = {};

const items = {
  '1': {name: 'book', price: 50, quantity: 1},
  '2': {name: 'pen', price: 5, quantity: 1},
  '3': {name: 'bag', price: 100, quantity: 1}
};

const addItem = (art) => {
  if (art in card) {
    card[art].quantity++;
    } else {      
        card[art] = items[art];
    }      
};
// * Сделать так, чтобы товары в каталоге выводились при помощи JS

const getCatalog = () => {
    let div = document.getElementById('catalog');
    let ol = document.createElement('ol');
    div.appendChild(ol);

    for (let key in items) {
        let li = document.createElement('li');
        li.innerHTML = `${items[key].name}, ${items[key].price} $`;
        ol.appendChild(li);
      }
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


  // Показать стоимость корзины  и количество товаров
const getAnswerTask3 = () => {
    let cardIsEmpty = `Your Card is empty`;
    let cardIsFull = `${countBasketItems(card)} items in the Card. Total price: ${countBasketPrice(card)}`;
    
  document.getElementById('task3').innerHTML = (Object.keys(card).length == 0) ? cardIsEmpty : cardIsFull;
};