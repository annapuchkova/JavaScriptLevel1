'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var translateTemperature = function translateTemperature() {
    var gradeC = prompt('please, enter Tc', 'numbers only, please');
    if (gradeC == +gradeC) {
        var gradeF = 9 / 5 * Number(gradeC) + 32;
        alert('Tf is: ' + gradeF + ' Tf. \nIs it OK?');
    } else {
        alert('Your grade is incorrect: ' + gradeC + '. \nTry again and enter numbers ONLY!');
        return translateTemperature();
    }
};

var sayHello = function sayHello() {
    var admin = void 0;
    var name = prompt('please, enter your name', 'e.g. Vasily');
    admin = name;
    alert('Helly, ' + admin + '! You are admin now!');
};

var checkResult = function checkResult() {
    var a = 10;
    var b = 20;
    a = a + b;
    b = a - b;
    a = a - b;

    document.getElementById('result').innerHTML = '\n    <b>let a = 10;</b><br>\n    <b>let b = 20;</b><br>\n    a = a + b;<br>\n    b = a - b;<br>\n    a = a - b;<br><br>\n    <b>RESULT:</b><br>\n    <b>a = ' + a + '</b><br>\n    <b>b = ' + b + '</b>';
};

var count = function count() {
    var a = 1000;
    var b = '108';
    var result = a + b;
    document.getElementById('count').innerHTML = '\n    1000 + \'108\' = ' + result + '. Because result is <b>string</b> if at least one of operads is ' + (typeof result === 'undefined' ? 'undefined' : _typeof(result));
};