// Game Guess the Number
// Please note: Now max=99 and min=0 because of testing
// By condition they should be 1000 and 9999

const getRundomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const game = () => {

  let max = 99;
  let min = 10;
  let rundomNumber = getRundomNumber(min, max);
  let arr = String(rundomNumber).split('');
  const result = [... new Set(arr)].join('');

  const iter = (userAnswer, correctAnswer) => {
    if (userAnswer === correctAnswer) {
      alert(`You are winnner!`);
      return;
    } else if (+userAnswer < +correctAnswer) {
      let newUserAnswer = prompt(`Your answer is less than correct. ${compareArrs(userAnswer, correctAnswer)} \nTry again: `); 
      iter(newUserAnswer, result);
  } else {
      let newUserAnswer = prompt(`Your answer is more than correct.${compareArrs(userAnswer, correctAnswer)} \nTry again:`); 
      iter(newUserAnswer, result);
  }

  };
  if (result.length != arr.length) {
      game();
  } else {
    let answer = prompt('Try to guess the number'); 
    const checkUnigue = [... new Set(answer)].join('');
    if (answer.length != checkUnigue.length || answer.length > String(max).length || answer.length < String(min).length) {
      alert(`Please, enter unigue numbers [ ${min} ... ${max} ]!`);
      game();
    } else {
      iter(answer, result);
    }
  }
};

const compareArrs = (a, b) => {
  let result = [];
  const checkUnigue = [... new Set(a)].join('');
  if (a.length != checkUnigue.length) {
    return [...result, `\nPlease, use only unique numbers!`];
  } else {
    const key = a.split('');
    const obj = b.split('');
      for (let i = 0; i < obj.length; i++) {
        if (obj.indexOf(key[i]) != -1) {
          result = (key[i] == obj[i]) ? [...result, `\nYou have BULL: ${key[i]}`] : [...result, `\nYou have COW: ${key[i]}`];
        }
      }
      return result;
  }
  
};

// Task 2
// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
const getAnswerTask1 = () => {
  let n = 0;
  let result = [];
  while (n <= 100) {
    if (isPrime(n)) {
      result = [...result, n];
    } 
    n++;
  }
  document.getElementById('task1').innerHTML = `Result: ${result}`;
};


const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i <= (num / 2)) {
    if (num % i === 0) {
      return false;
    }
    i++;
  }
  return true;
};

// Task 2
// Организовать массив для хранения товаров в корзине
const card = [];
const item1 = {itemID: '1', name: 'book', price: 100, quantity: 1};
const item2 = {itemID: '2', name: 'pen', price: 5, quantity: 1};

const items = {
  '1': {name: 'book', price: 100, quantity: 1},
  '2': {name: 'pen', price: 5, quantity: 1}
};

const addItem = (art) => {


        if (art in card) {
          card[art].quantity++;
          console.log(`card name: ${card[art].name}; card quantity: ${card[art].quantity}`);
        } else {      
            card[art] = items[art];
            console.log(`card name: ${card[art].name}; quantity: ${card[art].quantity}; card.length: ${card.length}`);
      }      
   
};


// Показать содержимое корзины
const getAnswerTask2 = () => {
 
  let info = (card.length === 0) ? 'empty' : '';
    let i = 1;
    for( var key in card ) {
      info = info + `<br>item ${i}: ${card[key].name};
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
  for( var key in arr ) {
    count = count + arr[key].price * arr[key].quantity;
  }
  return count;  
};

// Показать стоимость корзины
const getAnswerTask3 = () => {
  document.getElementById('task3').innerHTML = `Total price: ${countBasketPrice(card)}`;
};

// Task 4
// Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(...){// здесь пусто}
const getAnswerTask4 = () => {
  for (let i = 0; i < 9; i++, alert(`${i}`)) {}
};

// Task 5
// Нарисовать пирамиду с 20 рядами с помощью console.log
const getAnswerTask5 = () => {
  let item = '';

  for (let i = 0; i < 20; i++) {
    item += 'x';
    console.log(item);
  }
};