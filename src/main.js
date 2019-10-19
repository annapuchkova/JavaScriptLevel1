// Game Guess the Number
// Please note: Now max=9 and min=0 because of testing
// By condition they should be 1000 and 9999

const getRundomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const game = () => {
  let answer = prompt('Try to guess the number'); 
  let max = 9;
  let min = 0;
  const result = getRundomNumber(min, max);

  const iter = (userAnswer, correctAnswer) => {
    if ((+userAnswer < min) || (+userAnswer > max) || (+userAnswer != userAnswer)) {
        let newUserAnswer = prompt(`Your answer ${userAnswer} is invalid. Please enter integer [${min} ... ${max}] only:}`); 
        iter(newUserAnswer, result);
    } else  if (+userAnswer === correctAnswer) {
        alert(`Congratulation! You are winner!`);
        return;
    } else if (+userAnswer < correctAnswer) {
        let newUserAnswer = prompt(`Your answer is less than correct. Try again: `); 
        iter(newUserAnswer, result);
    } else {
        let newUserAnswer = prompt(`Your answer is more than correct. Try again: `); 
        iter(newUserAnswer, result);
    }

  };
iter(answer, result);
};

// task 1 solution
// Почему код дает именно такие результаты?

const getAnswerTask1 = () => {
    let a = 1, b = 1;

    document.getElementById('task1').innerHTML = `
    let a = 1, b = 1, c, d;<Br>
    c = ++a; alert(c); // 2<Br>
    d = b++; alert(d); // 1<Br>
    1) Firstly ++a, so a = ${++a};<Br>
    2) and c = a, so c = ${a};<Br>
    3) firstly d = b, so d = ${b++};<Br>
    4) After that b++, so now b = ${b};<Br>
    Next:<Br>
    c = (2+ ++a);<Br>
    d = (2+ b++);<Br>
    c = (2 + ++a);<Br>
    5) ++a, so a = ${++a};<Br>
    6) After that c = (2 + ${a}), so c = ${(2 + a)};<Br>
    7) Next d = (2 + ${b}), so ${2 + b++};<Br>
    8) Now b++, so b = ${b}`;
};

// task 2 solution
// Чему будет равен x?
// var a = 2;
// var x = 1 + (a *= 2);

const getAnswerTask2 = () => {
    let a = 2;
    a *= 2;
    const x = 1 + a;
    document.getElementById('task2').innerHTML = `
    Result: ${x}<br>
    a = a * 2;<br>
    a = 2 * 2;<br>
    a = 4;<br>
    x = 1 + a;<br>
    x = 1 + 4;<br>
    x =5`;
};

// task 3 solution
// Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом.

const getOperation = () => {
    const a = +prompt('Enter first number, please'); 
    const b = +prompt('Enter second number, please'); 
    let c;
    let description;
    if (a >= 0 && b >= 0) {
        c = a - b;
        description = ` a >= 0 && b >= 0; <br> result = a - b;<br>`;
    } else if (a < 0 && b < 0) {
        c = a * b;
        description = `a < 0 && b < 0; <br> result = a * b;<br>`;
    } else {
        c = a + b;
        description = `a < 0 && b >= 0 || a >= 0 && b < 0; <br> result = a + b;<br>`;
    }
    document.getElementById('task3').innerHTML = `a = ${a};<br> b = ${b};<br> ${description} Result is: ${c}`;
};

// task 4 solution
// Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15.
// Первое решение с помощью switch.
// Второе решение с циклом.

const shownListOfNumbers = () => {
    const a = +prompt('Enter number [0 ... 15], please'); 
    switch(a) {
        case 0:
            document.getElementById('task4').innerHTML = `0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15`;
            break;
        case 1:
            document.getElementById('task4').innerHTML = `1,2,3,4,5,6,7,8,9,10,11,12,13,14,15`;
            break;
        case 2:
            document.getElementById('task4').innerHTML = `2,3,4,5,6,7,8,9,10,11,12,13,14,15`;
            break;
       case 3:
            document.getElementById('task4').innerHTML = `3,4,5,6,7,8,9,10,11,12,13,14,15`;
            break;
        case 4:
            document.getElementById('task4').innerHTML = `4,5,6,7,8,9,10,11,12,13,14,15`;
            break;
        case 5:
            document.getElementById('task4').innerHTML = `5,6,7,8,9,10,11,12,13,14,15`;
            break;
        case 6:
            document.getElementById('task4').innerHTML = `6,7,8,9,10,11,12,13,14,15`;
            break;
        case 7:
            document.getElementById('task4').innerHTML = `7,8,9,10,11,12,13,14,15`;
            break;
        case 8:
            document.getElementById('task4').innerHTML = `8,9,10,11,12,13,14,15`;
            break;
        case 9:
            document.getElementById('task4').innerHTML = `9,10,11,12,13,14,15`;
            break;
        case 10:
            document.getElementById('task4').innerHTML = `10,11,12,13,14,15`;
            break;
        case 11:
            document.getElementById('task4').innerHTML = `11,12,13,14,15`;
            break;
        case 12:
            document.getElementById('task4').innerHTML = `12,13,14,15`;
            break;
        case 13:
            document.getElementById('task4').innerHTML = `13,14,15`;
            break;
        case 14:
            document.getElementById('task4').innerHTML = `14,15`;
            break;
        case 15:
            document.getElementById('task4').innerHTML = `15`;
            break;
        default:
            alert('Enter correct number, please');
            return shownListOfNumbers();
    }
};

const shownListOfNumbersCycle = () => {
    const a = prompt('Enter number [0 ... 15], please'); 
    if (+a < 0 || +a > 15 || +a != a || !Number.isInteger(+a) || a === '') {
        alert('Enter correct number, please: integer [0 ... 15] only');
        return shownListOfNumbersCycle();
    }
    let result = a;
    for (let i = +a + 1; i <= 15; i++) {
        result = result + ',' + i;
    }
    document.getElementById('task4_2').innerHTML = `${result}`;
};

// task 5 solution
// Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.

const getSum = (a, b) => {
    return a + b;
};
const getDiff = (a, b) => {
    return a - b;
};
const getProd = (a, b) => {
    return a * b;
};
const getQuot = (a, b) => {
    return a / b;
};

const showOperations = () => {
    document.getElementById('task5').innerHTML = `
    const getSum = (a, b) => {<br>
        return a + b;<br>
    };<br>
    const getDiff = (a, b) => {<br>
        return a - b;<br>
    };<br>
    const getProd = (a, b) => {<br>
        return a * b;<br>
    };<br>
    const getQuot = (a, b) => {<br>
        return a / b;<br>
    };
    `;
};

// task 6 solution
// Реализовать функцию с тремя параметрами: 
// function mathOperation(arg1, arg2, operation),
// где arg1, arg2 — значения аргументов, operation — строка с названием 
// операции. В зависимости от переданного значения выполнить одну из 
// арифметических операций (использовать функции из пункта 5) и вернуть 
// полученное значение (применить switch).

const mathOperation = (arg1, arg2, operation) => {
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

const getMathOperation = () => {
    const arg1 = +prompt('please, first argument', 'numbers only, please');  
    const arg2 = +prompt('please, second argument', 'numbers only, please'); 
    const operation = prompt('please, operation', 'sum, difference, product or quotient');
    document.getElementById('task6').innerHTML = `
    ${arg1} ${operation} ${arg2} = ${mathOperation(arg1, arg2, operation)}`;
};

// task 7 solution
// Сравнить null и 0. Объяснить результат.

const getCompare = () => {
    document.getElementById('task7').innerHTML = `
    null == 0; // ${null == 0}<br>
    null === 0; // ${null === 0}<br>
    null > 0; // ${null > 0}<br>
    null >= 0; // ${null >= 0}<br>
    Сравнения преобразуют null в число, рассматривая его как 0.<br> 
    Поэтому выражение null >= 0 истинно, а null > 0 ложно.<br>
    С другой стороны, для нестрогого равенства == значений undefined и null<br> 
    действует особое правило: эти значения ни к чему не приводятся,<br>
    они равны друг другу и не равны ничему другому. Поэтому null == 0 ложно.
    `;
};

// task 8 solution
// * С помощью рекурсии организовать функцию возведения числа в степень. 
// Формат: function power(val, pow), где val — заданное число, pow –— степень.

const power = (val, pow) => {
    if (pow === 0) {
        return 1;
    } if (pow > 0) {
        return (pow === 1) ? val : val * power(val, pow - 1);
    } if (pow < 0) {
        return (pow === 1) ? 1 / val : (1 / val) * Math.floor(power(val, pow + 1) * 100000) / 100000;   
    }
    
};

const getPower = () => {
    const val = +prompt('please, enter value', 'positive, negative numbers and O only, please');  
    const pow = +prompt('please, enter power', 'positive, negative numbers and O only, please'); 
    document.getElementById('task8').innerHTML = `${val} ^ ${pow} = ${power(val, pow)}`;
};

