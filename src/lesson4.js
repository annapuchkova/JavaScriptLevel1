//Task 1. Game "Quest"

/* Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
десятки и сотни. Например, для числа 245 мы должны получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать 
соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

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
//Task 2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n 
//(номер задается пользователем)
// Game Guess the Number
// Please note: Now max=99 and min=0 because of testing
// By condition they should be 1000 and 9999

const getRundomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const game = () => {

let max = 99; // задаем максимальное случайное число
let min = 10; // задаем минимальное случайное число
let rundomNumber = getRundomNumber(min, max); // получаем случайное число
let arr = String(rundomNumber).split('');  // преобразуем случайное число в массив цифр
const result = [... new Set(arr)].join(''); // преобразуем случайное число в массив с уникальными значениями

const iter = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    alert(`${userAnswer} is correct! You are winnner!`); // если ответ равен загаданному числу
    return;
  } else if (+userAnswer < +correctAnswer) {
    let newUserAnswer = prompt(`Your answer ${userAnswer} is less than correct. ${compareArrs(userAnswer, correctAnswer)} \nTry again: `); 
    iter(newUserAnswer, result);
} else {
    let newUserAnswer = prompt(`Your answer ${userAnswer} is more than correct.${compareArrs(userAnswer, correctAnswer)} \nTry again:`); 
    iter(newUserAnswer, result);
}

};
if (result.length != arr.length) {
    game();  // если разрядность загаданного числа НЕ равна случайному числу, запускаем игру сначала
} else {
  let answer = prompt('Try to guess the number'); // спрашиваем ответ у юзера
  const checkUnigue = [... new Set(answer)].join(''); // проверяем, что юзер ввел только уникальные цифры и число нужной разрядности
  if (answer.length != checkUnigue.length || answer.length > String(max).length || answer.length < String(min).length) {
    alert(`Please, enter unigue numbers [ ${min} ... ${max} ]!`);
    game();
  } else {
    iter(answer, result);
  }
}
};
// проверям есть ли быки и коровы
const compareArrs = (a, b) => {
let result = [];
const checkUnigue = [... new Set(a)].join(''); // проверяем ответ на уникальные цифры
if (a.length != checkUnigue.length) {
  return [...result, `\nPlease, use only unique numbers!`];
} else {
  const key = a.split(''); // преобразуем строку в массив цифр
  const obj = b.split(''); 

    for (let i = 0; i < obj.length; i++) {
      if (obj.indexOf(key[i]) != -1) { // проверяем есть ли цифры ответа в задуманном числе, если есть, то проверяем на какой позиции
        result = (key[i] == obj[i]) ? [...result, `\nYou have BULL: ${key[i]}`] : [...result, `\nYou have COW: ${key[i]}`];
      } 
    }
    return result;
}

};
// Task 3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»
const questions = [
  {question: 'The Ultimate Question of Life, the Universe, and Everything', correctAnswerIndex: '1', answerOptions: ['\n1: 42', '\n2: 43','\n3: 44', '\n4: 45'], tooltip: 'Try to ask google'},
  {question: 'The most massively useful thing an interstellar hitchhiker can have', correctAnswerIndex: '4', answerOptions: ['\n1: guide', '\n2: gun', '\n3: tea', '\n4: towel'], tooltip: 'First letter is T'},
];

const millionaire = () => {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {

    const iter = () => {

      let userAnswer = prompt(`${questions[i].question}
      Enter corrict answer number: ${questions[i].answerOptions}
      \nOr enter 5 to have tooltip.`);

      if (Number.isNaN(+userAnswer) || +userAnswer < 1 || +userAnswer > 5 || userAnswer.length == 0) {
        alert(`'${userAnswer}' is incorrect value. Please enter 1, 2, 3 or 4. Or enter 5 to have tooltip.`);
        iter();
      } else if (userAnswer === '5') {
        alert(`Tooltip: ${questions[i].tooltip}`);
        iter();
      } else if (userAnswer === questions[i].correctAnswerIndex) {
        score = score + 1;
        alert(`It is correct answer! You have ${score} scores.`);
      } else {
        alert(`No, sorry, correct answer is ${questions[i].answerOptions[+questions[i].correctAnswerIndex - 1]}`);
      }
    };
    iter();
  }
  alert(`Game over! You have ${score} scores!`);
};

// Task 4. Организовать массив для хранения товаров в корзине
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

// Task 6.
const getAnswerTask6 = () => {
  var event, ok;

  do {//Выводим первый вопрос
      ok = false;
      event = +prompt(`${works.a00} ${works.a1} ${works.a2} -1 - Выход из игры`);
      if (event == -1) {
          return;
      }
      else {
          ok = isAnswer(works.a0, event);
      }
  } while (!ok);
  switch (event) {
      case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
          do {
              ok = false;
              event = +prompt(`${works.b00} ${works.b1} ${works.b2} -1 - Выход из игры`);
              if (event == -1) {
                  return;
              }
              else {
                  ok = isAnswer(works.b0, event);
              }
          } while (!ok);
          switch (event) {
              case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                  do {
                      ok = false;
                      event = +prompt(`${works.d00} ${works.d1} ${works.d2} -1 - Выход из игры`);
                      if (event == -1) {
                        return;
                      }
                      else {
                          ok = isAnswer(works.d0, event);
                      }
                  } while (!ok);
  
                  break;
              case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                  do {
                      ok = false;
                      event = +prompt(`${works.d00} ${works.d1} ${works.d2} -1 - Выход из игры`);
                      if (event == -1) {
                        return;
                      }
                      else {
                          ok = isAnswer(works.d0, event);
                      }
                  } while (!ok);
  
                  break;
              case -1: // Второе действие
                  break;
              default:
                  alert('Ошибка');
          }
          break;
      case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
          do {
              ok = false;
              event = +prompt(`${works.c00} ${works.c1} ${works.c2} -1 - Выход из игры`);
              if (event == -1) {
                return;
              }
              else {
                  ok = isAnswer(works.c0, event);
              }
          } while (!ok);
          switch (event) {
              case 1: // Второе действие
                  do {
                      ok = false;
                      event = +prompt(`${works.d00} ${works.d1} ${works.d2} -1 - Выход из игры`);
                      if (event == -1) {
                          return;
                      }
                      else {
                          ok = isAnswer(works.d0, event);
                      }
                  } while (!ok);
  
                  break;
              case 2: // Второе действие
                  do {
                      ok = false;
                      event = +prompt(`${works.d00} ${works.d1} ${works.d2} -1 - Выход из игры`);
                      if (event == -1) {
                        return;
                      }
                      else {
                          ok = isAnswer(works.d0, event);
                      }
                  } while (!ok);
  
                  break;
              case -1: // Второе действие
                  break;
              default:
                  alert('Ошибка');
          }
          break;
      case -1: // Первое действие
      return;
      default:
          alert('Ошибка');
  }

//Выводим последний вопрос

      event = +prompt(`${works.e00} ${works.e1} ${works.e2} ${works.e3} ${works.e4} -1 - Выход из игры`);
      if (event == -1) {
        alert('Спасибо за игру');
        return;
      }
      else {
          ok = isAnswer(works.e0, event);
      }

  switch (event) {
      case 1:
        event = +prompt(`${works.a00} \n0 - начать сначала \n-1 - Выход из игры`);
        if (event == -1) {
          return;
        }
        else {
          getAnswerTask6();
        }
      break;
      case 2:
          event = +prompt(`${works.b00} \n0 - начать сначала \n-1 - Выход из игры`);
          if (event == -1) {
            return;
          }
          else {
            getAnswerTask6();
          }
        break;
      case 3:
          event = +prompt(`${works.c00} \n0 - начать сначала \n-1 - Выход из игры`);
          if (event == -1) {
            return;
          }
          else {
            getAnswerTask6();
          }
        break;
      case 4:
          event = +prompt(`${works.d00} \n 0 - начать сначала \n-1 - Выход из игры`);
          if (event == -1) {
            return;
          }
          else {
            getAnswerTask6();
          }
        break;
       
      default: 
      alert('Спасибо за игру');
  }

};
//------------------------------------------
const isAnswer = (q, event) => {
 if (isNaN(event) || !isFinite(event)) {
      alert('Вы ввели недопустимый символ');
      return false;
  }
  else if (event < 1 || event > q) {
      alert('Ваше число выходит из допустимого диапозона');
      return false;
  }
return true;
  
};