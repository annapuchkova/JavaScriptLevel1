//Game "Quest"
let result = {};
const quest = () => {
    let userAnswer = prompt(`Please enter number [0 ... 999]`);
    // In case user enters 0000, < 0,  > 999 or empty value:
    if (+userAnswer < 0 || userAnswer.length > 3 || userAnswer.length < 1) {
        console.log(`Your number ${userAnswer} is not correct. So your result:`);
        console.log(result);
        console.log(`Sorry. Let's try again!`);
        document.getElementById('task1').innerHTML = `Result: {}`
    } else {
        let arr = userAnswer.split('').reverse(); // convert string to array
        let newIndex = arr.length; // first added index
        const iter = 3 - newIndex; // determine the number of steps
        
            for (let i = 0; i < iter; i++) { // add missing properties
                arr[newIndex] = '0';
                newIndex++;
            }
    
        result.units = arr[0];
        result.dozens = arr[1];
        result.hundreds = arr[2];
        console.log(result);
        document.getElementById('task1').innerHTML = `Result: 
        units: ${result['units']}, dozens: ${result['dozens']}, hundreds: ${result['hundreds']}`;
    }
};


// Организовать массив для хранения товаров в корзине
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


// Показать содержимое корзины
const getAnswerTask2 = () => {
 
  let info = (card.length === 0) ? 'empty' : '';
    let i = 1;
    for( let key in card ) {
      info = info + `<br>
      item ${i}: ${card[key].name};
      price: ${card[key].price};
      quantity: ${card[key].quantity}`;
      i++;
    }
  document.getElementById('task2').innerHTML = `Your Card: ${info}`;
};

// Task 3
// Организовать функцию countBasketPrice, которая будет считать стоимость корзины

const countBasketPrice = (arr) => {
    let count = 0;
    for( let key in arr ) {
      count = count + arr[key].price * arr[key].quantity;
    }
    return count;  
  };
  
  // Показать стоимость корзины
  const getAnswerTask3 = () => {
    document.getElementById('task3').innerHTML = `Total price: ${countBasketPrice(card)}`;
  };