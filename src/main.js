

const translateTemperature = () => {
    const gradeC = prompt('please, enter Tc', 'numbers only, please');
    let name = prompt('please, enter your name', 'e.g. Vasily');
    let admin = name;
    if (gradeC == +gradeC) {
        const gradeF = (9 / 5) * Number(gradeC) + 32;
        alert(`Tf is: ${gradeF}. \nIs it OK, ${admin}?`);
    } else {
        alert(`${admin}, your grade is incorrect: ${gradeC}. \nTry again and enter numbers ONLY!`);
        return translateTemperature();
    }  
};