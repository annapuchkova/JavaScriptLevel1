'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//Task 1. Game "Quest"

/* Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
десятки и сотни. Например, для числа 245 мы должны получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать 
соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

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
//Task 2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n 
//(номер задается пользователем)
// Game Guess the Number
// Please note: Now max=99 and min=0 because of testing
// By condition they should be 1000 and 9999

var getRundomNumber = function getRundomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
var game = function game() {

  var max = 99; // задаем максимальное случайное число
  var min = 10; // задаем минимальное случайное число
  var rundomNumber = getRundomNumber(min, max); // получаем случайное число
  var arr = String(rundomNumber).split(''); // преобразуем случайное число в массив цифр
  var result = [].concat(_toConsumableArray(new Set(arr))).join(''); // преобразуем случайное число в массив с уникальными значениями

  var iter = function iter(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
      alert(userAnswer + ' is correct! You are winnner!'); // если ответ равен загаданному числу
      return;
    } else if (+userAnswer < +correctAnswer) {
      var newUserAnswer = prompt('Your answer ' + userAnswer + ' is less than correct. ' + compareArrs(userAnswer, correctAnswer) + ' \nTry again: ');
      iter(newUserAnswer, result);
    } else {
      var _newUserAnswer = prompt('Your answer ' + userAnswer + ' is more than correct.' + compareArrs(userAnswer, correctAnswer) + ' \nTry again:');
      iter(_newUserAnswer, result);
    }
  };
  if (result.length != arr.length) {
    game(); // если разрядность загаданного числа НЕ равна случайному числу, запускаем игру сначала
  } else {
    var answer = prompt('Try to guess the number'); // спрашиваем ответ у юзера
    var checkUnigue = [].concat(_toConsumableArray(new Set(answer))).join(''); // проверяем, что юзер ввел только уникальные цифры и число нужной разрядности
    if (answer.length != checkUnigue.length || answer.length > String(max).length || answer.length < String(min).length) {
      alert('Please, enter unigue numbers [ ' + min + ' ... ' + max + ' ]!');
      game();
    } else {
      iter(answer, result);
    }
  }
};
// проверям есть ли быки и коровы
var compareArrs = function compareArrs(a, b) {
  var result = [];
  var checkUnigue = [].concat(_toConsumableArray(new Set(a))).join(''); // проверяем ответ на уникальные цифры
  if (a.length != checkUnigue.length) {
    return [].concat(_toConsumableArray(result), ['\nPlease, use only unique numbers!']);
  } else {
    var key = a.split(''); // преобразуем строку в массив цифр
    var obj = b.split('');

    for (var i = 0; i < obj.length; i++) {
      if (obj.indexOf(key[i]) != -1) {
        // проверяем есть ли цифры ответа в задуманном числе, если есть, то проверяем на какой позиции
        result = key[i] == obj[i] ? [].concat(_toConsumableArray(result), ['\nYou have BULL: ' + key[i]]) : [].concat(_toConsumableArray(result), ['\nYou have COW: ' + key[i]]);
      }
    }
    return result;
  }
};
// Task 3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»
var questions = [{ question: 'The Ultimate Question of Life, the Universe, and Everything', correctAnswerIndex: '1', answerOptions: ['\n1: 42', '\n2: 43', '\n3: 44', '\n4: 45'], tooltip: 'Try to ask google' }, { question: 'The most massively useful thing an interstellar hitchhiker can have', correctAnswerIndex: '4', answerOptions: ['\n1: guide', '\n2: gun', '\n3: tea', '\n4: towel'], tooltip: 'First letter is T' }];

var millionaire = function millionaire() {
  var score = 0;

  var _loop = function _loop(i) {

    var iter = function iter() {

      var userAnswer = prompt(questions[i].question + '\n      Enter corrict answer number: ' + questions[i].answerOptions + '\n      \nOr enter 5 to have tooltip.');

      if (Number.isNaN(+userAnswer) || +userAnswer < 1 || +userAnswer > 5 || userAnswer.length == 0) {
        alert('\'' + userAnswer + '\' is incorrect value. Please enter 1, 2, 3 or 4. Or enter 5 to have tooltip.');
        iter();
      } else if (userAnswer === '5') {
        alert('Tooltip: ' + questions[i].tooltip);
        iter();
      } else if (userAnswer === questions[i].correctAnswerIndex) {
        score = score + 1;
        alert('It is correct answer! You have ' + score + ' scores.');
      } else {
        alert('No, sorry, correct answer is ' + questions[i].answerOptions[+questions[i].correctAnswerIndex - 1]);
      }
    };
    iter();
  };

  for (var i = 0; i < questions.length; i++) {
    _loop(i);
  }
  alert('Game over! You have ' + score + ' scores!');
};

// Task 4. Организовать массив для хранения товаров в корзине
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
  document.getElementById('task3').innerHTML = countBasketItems(card) + ' items in the Card. Total price: ' + countBasketPrice(card);
};

// Task 6.
var getAnswerTask6 = function getAnswerTask6() {
  var event, ok;

  do {
    //Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + ' ' + works.a1 + ' ' + works.a2 + ' -1 - \u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0438\u0433\u0440\u044B');
    if (event == -1) {
      return;
    } else {
      ok = isAnswer(works.a0, event);
    }
  } while (!ok);
  switch (event) {
    case 1:
      // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
      do {
        ok = false;
        event = +prompt(works.b00 + ' ' + works.b1 + ' ' + works.b2 + ' -1 - \u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0438\u0433\u0440\u044B');
        if (event == -1) {
          return;
        } else {
          ok = isAnswer(works.b0, event);
        }
      } while (!ok);
      switch (event) {
        case 1:
          // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
          do {
            ok = false;
            event = +prompt(works.d00 + ' ' + works.d1 + ' ' + works.d2 + ' -1 - \u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0438\u0433\u0440\u044B');
            if (event == -1) {
              return;
            } else {
              ok = isAnswer(works.d0, event);
            }
          } while (!ok);

          break;
        case 2:
          // Второе действие   Если ввели 2 то также переходим на 4 окно
          do {
            ok = false;
            event = +prompt(works.d00 + ' ' + works.d1 + ' ' + works.d2 + ' -1 - \u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0438\u0433\u0440\u044B');
            if (event == -1) {
              return;
            } else {
              ok = isAnswer(works.d0, event);
            }
          } while (!ok);

          break;
        case -1:
          // Второе действие
          break;
        default:
          alert('Ошибка');
      }
      break;
    case 2:
      // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
      do {
        ok = false;
        event = +prompt(works.c00 + ' ' + works.c1 + ' ' + works.c2 + ' -1 - \u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0438\u0433\u0440\u044B');
        if (event == -1) {
          return;
        } else {
          ok = isAnswer(works.c0, event);
        }
      } while (!ok);
      switch (event) {
        case 1:
          // Второе действие
          do {
            ok = false;
            event = +prompt(works.d00 + ' ' + works.d1 + ' ' + works.d2 + ' -1 - \u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0438\u0433\u0440\u044B');
            if (event == -1) {
              return;
            } else {
              ok = isAnswer(works.d0, event);
            }
          } while (!ok);

          break;
        case 2:
          // Второе действие
          do {
            ok = false;
            event = +prompt(works.d00 + ' ' + works.d1 + ' ' + works.d2 + ' -1 - \u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0438\u0433\u0440\u044B');
            if (event == -1) {
              return;
            } else {
              ok = isAnswer(works.d0, event);
            }
          } while (!ok);

          break;
        case -1:
          // Второе действие
          break;
        default:
          alert('Ошибка');
      }
      break;
    case -1:
      // Первое действие
      return;
    default:
      alert('Ошибка');
  }

  //Выводим последний вопрос

  event = +prompt(works.e00 + ' ' + works.e1 + ' ' + works.e2 + ' ' + works.e3 + ' ' + works.e4 + ' -1 - \u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0438\u0433\u0440\u044B');
  if (event == -1) {
    alert('Спасибо за игру');
    return;
  } else {
    ok = isAnswer(works.e0, event);
  }

  switch (event) {
    case 1:
      event = +prompt(works.a00 + ' \n0 - \u043D\u0430\u0447\u0430\u0442\u044C \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \n-1 - \u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0438\u0433\u0440\u044B');
      if (event == -1) {
        return;
      } else {
        getAnswerTask6();
      }
      break;
    case 2:
      event = +prompt(works.b00 + ' \n0 - \u043D\u0430\u0447\u0430\u0442\u044C \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \n-1 - \u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0438\u0433\u0440\u044B');
      if (event == -1) {
        return;
      } else {
        getAnswerTask6();
      }
      break;
    case 3:
      event = +prompt(works.c00 + ' \n0 - \u043D\u0430\u0447\u0430\u0442\u044C \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \n-1 - \u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0438\u0433\u0440\u044B');
      if (event == -1) {
        return;
      } else {
        getAnswerTask6();
      }
      break;
    case 4:
      event = +prompt(works.d00 + ' \n 0 - \u043D\u0430\u0447\u0430\u0442\u044C \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \n-1 - \u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0438\u0433\u0440\u044B');
      if (event == -1) {
        return;
      } else {
        getAnswerTask6();
      }
      break;

    default:
      alert('Спасибо за игру');
  }
};
//------------------------------------------
var isAnswer = function isAnswer(q, event) {
  if (isNaN(event) || !isFinite(event)) {
    alert('Вы ввели недопустимый символ');
    return false;
  } else if (event < 1 || event > q) {
    alert('Ваше число выходит из допустимого диапозона');
    return false;
  }
  return true;
};