'use strict';

//Game "Quest"
var result = {};
var quest = function quest() {
    var userAnswer = prompt('Please enter number [0 ... 999]');
    // In case user enters 0000, < 0,  > 999 or empty value:
    if (+userAnswer < 0 || userAnswer.length > 3 || userAnswer.length < 1) {
        console.log('Your number ' + userAnswer + ' is not correct. So your result:');
        console.log(result);
        console.log('Sorry. Let\'s try again!');
        document.getElementById('task1').innerHTML = 'Result: {}';
    } else {
        var arr = userAnswer.split('').reverse(); // convert string to array
        var newIndex = arr.length; // first added index
        var iter = 3 - newIndex; // determine the number of steps

        for (var i = 0; i < iter; i++) {
            // add missing properties
            arr[newIndex] = '0';
            newIndex++;
        }

        result.units = arr[0];
        result.dozens = arr[1];
        result.hundreds = arr[2];
        console.log(result);
        document.getElementById('task1').innerHTML = 'Result: \n        units: ' + result['units'] + ', dozens: ' + result['dozens'] + ', hundreds: ' + result['hundreds'];
    }
};

// Организовать массив для хранения товаров в корзине
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

// Показать содержимое корзины
var getAnswerTask2 = function getAnswerTask2() {

    var info = card.length === 0 ? 'empty' : '';
    var i = 1;
    for (var key in card) {
        info = info + ('<br>\n      item ' + i + ': ' + card[key].name + ';\n      price: ' + card[key].price + ';\n      quantity: ' + card[key].quantity);
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