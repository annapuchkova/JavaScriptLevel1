'use strict';

// Game Guess the Number
// Please note: Now max=9 and min=0 because of testing
// By condition they should be 1000 and 9999

var getRundomNumber = function getRundomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
var game = function game() {
    var answer = prompt('Try to guess the number');
    var max = 9;
    var min = 0;
    var result = getRundomNumber(min, max);

    var iter = function iter(userAnswer, correctAnswer) {
        if (+userAnswer < min || +userAnswer > max || +userAnswer != userAnswer) {
            var newUserAnswer = prompt('Your answer ' + userAnswer + ' is invalid. Please enter integer [' + min + ' ... ' + max + '] only:}');
            iter(newUserAnswer, result);
        } else if (+userAnswer === correctAnswer) {
            alert('Congratulation! You are winner!');
            return;
        } else if (+userAnswer < correctAnswer) {
            var _newUserAnswer = prompt('Your answer is less than correct. Try again: ');
            iter(_newUserAnswer, result);
        } else {
            var _newUserAnswer2 = prompt('Your answer is more than correct. Try again: ');
            iter(_newUserAnswer2, result);
        }
    };
    iter(answer, result);
};

// task 1 solution
// Почему код дает именно такие результаты?

var getAnswerTask1 = function getAnswerTask1() {
    var a = 1,
        b = 1;

    document.getElementById('task1').innerHTML = '\n    let a = 1, b = 1, c, d;<Br>\n    c = ++a; alert(c); // 2<Br>\n    d = b++; alert(d); // 1<Br>\n    1) Firstly ++a, so a = ' + ++a + ';<Br>\n    2) and c = a, so c = ' + a + ';<Br>\n    3) firstly d = b, so d = ' + b++ + ';<Br>\n    4) After that b++, so now b = ' + b + ';<Br>\n    Next:<Br>\n    c = (2+ ++a);<Br>\n    d = (2+ b++);<Br>\n    c = (2 + ++a);<Br>\n    5) ++a, so a = ' + ++a + ';<Br>\n    6) After that c = (2 + ' + a + '), so c = ' + (2 + a) + ';<Br>\n    7) Next d = (2 + ' + b + '), so ' + (2 + b++) + ';<Br>\n    8) Now b++, so b = ' + b;
};

// task 2 solution
// Чему будет равен x?
// var a = 2;
// var x = 1 + (a *= 2);

var getAnswerTask2 = function getAnswerTask2() {
    var a = 2;
    a *= 2;
    var x = 1 + a;
    document.getElementById('task2').innerHTML = '\n    Result: ' + x + '<br>\n    a = a * 2;<br>\n    a = 2 * 2;<br>\n    a = 4;<br>\n    x = 1 + a;<br>\n    x = 1 + 4;<br>\n    x =5';
};

// task 3 solution
// Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом.

var getOperation = function getOperation() {
    var a = +prompt('Enter first number, please');
    var b = +prompt('Enter second number, please');
    var c = void 0;
    var description = void 0;
    if (a >= 0 && b >= 0) {
        c = a - b;
        description = ' a >= 0 && b >= 0; <br> result = a - b;<br>';
    } else if (a < 0 && b < 0) {
        c = a * b;
        description = 'a < 0 && b < 0; <br> result = a * b;<br>';
    } else {
        c = a + b;
        description = 'a < 0 && b >= 0 || a >= 0 && b < 0; <br> result = a + b;<br>';
    }
    document.getElementById('task3').innerHTML = 'a = ' + a + ';<br> b = ' + b + ';<br> ' + description + ' Result is: ' + c;
};

// task 4 solution
// Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15.

var shownListOfNumbers = function shownListOfNumbers() {
    var a = +prompt('Enter number [0 ... 15], please');
    switch (a) {
        case 0:
            document.getElementById('task4').innerHTML = '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15';
            break;
        case 1:
            document.getElementById('task4').innerHTML = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15';
            break;
        case 2:
            document.getElementById('task4').innerHTML = '2,3,4,5,6,7,8,9,10,11,12,13,14,15';
            break;
        case 3:
            document.getElementById('task4').innerHTML = '3,4,5,6,7,8,9,10,11,12,13,14,15';
            break;
        case 4:
            document.getElementById('task4').innerHTML = '4,5,6,7,8,9,10,11,12,13,14,15';
            break;
        case 5:
            document.getElementById('task4').innerHTML = '5,6,7,8,9,10,11,12,13,14,15';
            break;
        case 6:
            document.getElementById('task4').innerHTML = '6,7,8,9,10,11,12,13,14,15';
            break;
        case 7:
            document.getElementById('task4').innerHTML = '7,8,9,10,11,12,13,14,15';
            break;
        case 8:
            document.getElementById('task4').innerHTML = '8,9,10,11,12,13,14,15';
            break;
        case 9:
            document.getElementById('task4').innerHTML = '9,10,11,12,13,14,15';
            break;
        case 10:
            document.getElementById('task4').innerHTML = '10,11,12,13,14,15';
            break;
        case 11:
            document.getElementById('task4').innerHTML = '11,12,13,14,15';
            break;
        case 12:
            document.getElementById('task4').innerHTML = '12,13,14,15';
            break;
        case 13:
            document.getElementById('task4').innerHTML = '13,14,15';
            break;
        case 14:
            document.getElementById('task4').innerHTML = '14,15';
            break;
        case 15:
            document.getElementById('task4').innerHTML = '15';
            break;
        default:
            alert('Enter correct number, please');
            return shownListOfNumbers();
    }
};

var shownListOfNumbersCycle = function shownListOfNumbersCycle() {
    var a = prompt('Enter number [0 ... 15], please');
    if (+a < 0 || +a > 15 || +a != a || !Number.isInteger(+a) || a === '') {
        alert('Enter correct number, please: integer [0 ... 15] only');
        return shownListOfNumbersCycle();
    }
    var result = a;
    for (var i = +a + 1; i <= 15; i++) {
        result = result + ',' + i;
    }
    document.getElementById('task4_2').innerHTML = '' + result;
};

// task 5 solution
// Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.

var getSum = function getSum(a, b) {
    return a + b;
};
var getDiff = function getDiff(a, b) {
    return a - b;
};
var getProd = function getProd(a, b) {
    return a * b;
};
var getQuot = function getQuot(a, b) {
    return a / b;
};

var showOperations = function showOperations() {
    document.getElementById('task5').innerHTML = '\n    const getSum = (a, b) => {<br>\n        return a + b;<br>\n    };<br>\n    const getDiff = (a, b) => {<br>\n        return a - b;<br>\n    };<br>\n    const getProd = (a, b) => {<br>\n        return a * b;<br>\n    };<br>\n    const getQuot = (a, b) => {<br>\n        return a / b;<br>\n    };\n    ';
};

// task 6 solution
// Реализовать функцию с тремя параметрами: 
// function mathOperation(arg1, arg2, operation),
// где arg1, arg2 — значения аргументов, operation — строка с названием 
// операции. В зависимости от переданного значения выполнить одну из 
// арифметических операций (использовать функции из пункта 5) и вернуть 
// полученное значение (применить switch).

var mathOperation = function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return getSum(arg1, arg2);
        case 'difference':
            return getDiff(arg1, arg2);
        case 'product':
            return getProd(arg1, arg2);
        case 'quotient':
            return getQuot(arg1, arg2);
        default:
            alert('please use following words as operation: sum, difference, product or quotient');
            return 'cannot be count';
    }
};

var getMathOperation = function getMathOperation() {
    var arg1 = +prompt('please, first argument', 'numbers only, please');
    var arg2 = +prompt('please, second argument', 'numbers only, please');
    var operation = prompt('please, operation', 'sum, difference, product or quotient');
    document.getElementById('task6').innerHTML = '\n    ' + arg1 + ' ' + operation + ' ' + arg2 + ' = ' + mathOperation(arg1, arg2, operation);
};

// task 7 solution
// Сравнить null и 0. Объяснить результат.

var getCompare = function getCompare() {
    document.getElementById('task7').innerHTML = '\n    null == 0; // ' + (null == 0) + '<br>\n    null === 0; // ' + (null === 0) + '<br>\n    null > 0; // ' + (null > 0) + '<br>\n    null >= 0; // ' + (null >= 0) + '<br>\n    \u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u0443\u044E\u0442 null \u0432 \u0447\u0438\u0441\u043B\u043E, \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u044F \u0435\u0433\u043E \u043A\u0430\u043A 0.<br> \n    \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435 null >= 0 \u0438\u0441\u0442\u0438\u043D\u043D\u043E, \u0430 null > 0 \u043B\u043E\u0436\u043D\u043E.<br>\n    \u0421 \u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B, \u0434\u043B\u044F \u043D\u0435\u0441\u0442\u0440\u043E\u0433\u043E\u0433\u043E \u0440\u0430\u0432\u0435\u043D\u0441\u0442\u0432\u0430 == \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 undefined \u0438 null<br> \n    \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0441\u043E\u0431\u043E\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E: \u044D\u0442\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0438 \u043A \u0447\u0435\u043C\u0443 \u043D\u0435 \u043F\u0440\u0438\u0432\u043E\u0434\u044F\u0442\u0441\u044F,<br>\n    \u043E\u043D\u0438 \u0440\u0430\u0432\u043D\u044B \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0443 \u0438 \u043D\u0435 \u0440\u0430\u0432\u043D\u044B \u043D\u0438\u0447\u0435\u043C\u0443 \u0434\u0440\u0443\u0433\u043E\u043C\u0443. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 null == 0 \u043B\u043E\u0436\u043D\u043E.\n    ';
};

// task 8 solution
// * С помощью рекурсии организовать функцию возведения числа в степень. 
// Формат: function power(val, pow), где val — заданное число, pow –— степень.

var power = function power(val, pow) {
    if (pow === 0) {
        return 1;
    }if (pow > 0) {
        return pow === 1 ? val : val * power(val, pow - 1);
    }if (pow < 0) {
        return pow === 1 ? 1 / val : 1 / val * Math.floor(power(val, pow + 1) * 100000) / 100000;
    }
};

var getPower = function getPower() {
    var val = +prompt('please, enter value', 'positive, negative numbers and O only, please');
    var pow = +prompt('please, enter power', 'positive, negative numbers and O only, please');
    document.getElementById('task8').innerHTML = val + ' ^ ' + pow + ' = ' + power(val, pow);
};