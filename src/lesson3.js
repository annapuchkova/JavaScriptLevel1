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