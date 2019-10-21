'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Game Guess the Number
// Please note: Now max=99 and min=0 because of testing
// By condition they should be 1000 and 9999

var getRundomNumber = function getRundomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
var game = function game() {

  var max = 99;
  var min = 10;
  var rundomNumber = getRundomNumber(min, max);
  var arr = String(rundomNumber).split('');
  var result = [].concat(_toConsumableArray(new Set(arr))).join('');

  var iter = function iter(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
      alert('You are winnner!');
      return;
    } else if (+userAnswer < +correctAnswer) {
      var newUserAnswer = prompt('Your answer is less than correct. ' + compareArrs(userAnswer, correctAnswer) + ' \nTry again: ');
      iter(newUserAnswer, result);
    } else {
      var _newUserAnswer = prompt('Your answer is more than correct.' + compareArrs(userAnswer, correctAnswer) + ' \nTry again:');
      iter(_newUserAnswer, result);
    }
  };
  if (result.length != arr.length) {
    game();
  } else {
    var answer = prompt('Try to guess the number');
    var checkUnigue = [].concat(_toConsumableArray(new Set(answer))).join('');
    if (answer.length != checkUnigue.length || answer.length > String(max).length || answer.length < String(min).length) {
      alert('Please, enter unigue numbers [ ' + min + ' ... ' + max + ' ]!');
      game();
    } else {
      iter(answer, result);
    }
  }
};

var compareArrs = function compareArrs(a, b) {
  var result = [];
  var checkUnigue = [].concat(_toConsumableArray(new Set(a))).join('');
  if (a.length != checkUnigue.length) {
    return [].concat(_toConsumableArray(result), ['\nPlease, use only unique numbers!']);
  } else {
    var key = a.split('');
    var obj = b.split('');
    for (var i = 0; i < obj.length; i++) {
      if (obj.indexOf(key[i]) != -1) {
        result = key[i] == obj[i] ? [].concat(_toConsumableArray(result), ['\nYou have BULL: ' + key[i]]) : [].concat(_toConsumableArray(result), ['\nYou have COW: ' + key[i]]);
      }
    }
    return result;
  }
};

// Task 2
// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
var getAnswerTask1 = function getAnswerTask1() {
  var n = 0;
  var result = [];
  while (n <= 100) {
    if (isPrime(n)) {
      result = [].concat(_toConsumableArray(result), [n]);
    }
    n++;
  }
  document.getElementById('task1').innerHTML = 'Result: ' + result;
};

var isPrime = function isPrime(num) {
  if (num < 2) {
    return false;
  }
  var i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i++;
  }
  return true;
};

// Task 2
// Организовать массив для хранения товаров в корзине
var card = [];
var item1 = { itemID: '1', name: 'book', price: 100, quantity: 1 };
var item2 = { itemID: '2', name: 'pen', price: 5, quantity: 1 };

var items = {
  '1': { name: 'book', price: 100, quantity: 1 },
  '2': { name: 'pen', price: 5, quantity: 1 }
};

var addItem = function addItem(art) {

  if (art in card) {
    card[art].quantity++;
    console.log('card name: ' + card[art].name + '; card quantity: ' + card[art].quantity);
  } else {
    card[art] = items[art];
    console.log('card name: ' + card[art].name + '; quantity: ' + card[art].quantity + '; card.length: ' + card.length);
  }
};

// Показать содержимое корзины
var getAnswerTask2 = function getAnswerTask2() {

  var info = card.length === 0 ? 'empty' : '';
  /*  for (let i = 0; i < card.length; i++) {
      info = info + `<br>item ${i + 1}: ${card[i].name};
      price: ${card[i].price};
      quantity: ${card[i].quantity}`;
    }*/
  var i = 1;
  for (var key in card) {
    info = info + ('<br>item ' + i + ': ' + card[key].name + ';\n      price: ' + card[key].price + ';\n      quantity: ' + card[key].quantity);
    i++;
  }
  document.getElementById('task2').innerHTML = 'Your Card: ' + info;
};

// Task 3
// Организовать функцию countBasketPrice, которая будет считать стоимость корзины

var countBasketPrice = function countBasketPrice(arr) {
  var count = 0;
  for (var key in arr) {
    count = count + arr[key].price * arr[key].quantity;
  }
  return count;
};

// Показать стоимость корзины
var getAnswerTask3 = function getAnswerTask3() {
  document.getElementById('task3').innerHTML = 'Total price: ' + countBasketPrice(card);
};

// Task 4
// Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(...){// здесь пусто}
var getAnswerTask4 = function getAnswerTask4() {
  for (var i = 0; i < 9; i++, alert('' + i)) {}
};

// Task 5
// Нарисовать пирамиду с 20 рядами с помощью console.log
var getAnswerTask5 = function getAnswerTask5() {
  var item = '';

  for (var i = 0; i < 20; i++) {
    item += 'x';
    console.log(item);
  }
};