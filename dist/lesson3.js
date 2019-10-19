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