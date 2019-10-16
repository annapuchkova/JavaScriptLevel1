

const translateTemperature = () => {
    const gradeC = prompt('please, enter Tc', 'numbers only, please');  
    if (gradeC == +gradeC) {
        const gradeF = (9 / 5) * Number(gradeC) + 32;
        alert(`Tf is: ${gradeF} Tf. \nIs it OK?`);
    } else {
        alert(`Your grade is incorrect: ${gradeC}. \nTry again and enter numbers ONLY!`);
        return translateTemperature();
    }  
};

const sayHello = () => {
    let admin;
    let name = prompt('please, enter your name', 'e.g. Vasily');
    admin = name;
    alert(`Helly, ${admin}! You are admin now!`);
};

const checkResult = () => {
    let a = 10;
    let b = 20;
    a = a + b;
    b = a - b;
    a = a - b;

    document.getElementById('result').innerHTML = `
    <b>let a = 10;</b><br>
    <b>let b = 20;</b><br>
    a = a + b;<br>
    b = a - b;<br>
    a = a - b;<br><br>
    <b>RESULT:</b><br>
    <b>a = ${a}</b><br>
    <b>b = ${b}</b>`;
};

const count = () => {
    const a = 1000;
    const b = '108'
    const result = a + b;
    document.getElementById('count').innerHTML =`
    1000 + '108' = ${result}. Because result is <b>string</b> if at least one of operads is ${typeof result}`;
};