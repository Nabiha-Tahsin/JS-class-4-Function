/*
* ASSIGNMENT 1
* Create a function that will return children, teenagers, young people, old people from the age 
*/

function peopleAge(age) {
    
    if (age >= 0 && age <= 12) {
        console.log(`You are ${age} years old & your are a Children`);
    }

    else if (age >= 13 && age <= 17) {
        console.log(`You are ${age} years old & your are a Teenager`);
    }

    else if (age >= 18 && age <= 35) {
        console.log(`You are ${age} years old & your are a Young People`);
    }

    else if (age >= 36 && age <= 50) {
        console.log(`You are ${age} years old & your are a Middle Aged People`);
    }

    else if (age >= 51 && age <= 120) {
        console.log(`You are ${age} years old & your are a Old People`);
    }

    else{
        console.log('Invalid Age');
    }
}

console.log('THIS IS ASSIGNMENT 1');
console.log(peopleAge(prompt('Age:')));

//--------------------------------------------- 1 END ---------------------------------------------//


/*
* ASSIGNMENT 2
* Create a function that will return the area of a rectangle, square, triangle 
*/


function areaCal(shape) {
    
    // FIND VALUE FOR SPECIFIC SHAPE FROM PROMPT
    switch (shape) {
        //FOR RECTANGLE SHAPE
        case 'Rectangle':
            let length = parseInt(prompt('Length:'));
            let width = parseInt(prompt('Width:'));

            console.log('Area = ' + length * width);
            break;
            
        //FOR SQUARE SHAPE
        case 'Square':
            let side = parseInt(prompt('Side Value:'));

            console.log('Area = ' + side * side);
            break;

        //FOR TRIANGLE SHAPE
        case 'Triangle':
            let height = parseInt(prompt('Height:'));
            let base = parseInt(prompt('Base:'));

            console.log('Area = ' + .5 * base * height);
            break;

        //FOR DEFAULT
        default:
            console.log('Invalid Shape');
    
    }

}

console.log('THIS IS ASSIGNMENT 2');
console.log(areaCal(prompt('Type Rectangle or Square or Triangle')));

//--------------------------------------------- 2 END ---------------------------------------------//



/*
* ASSIGNMENT 3
* GPA, CGPA, GRADE function for result publishing 
*/


// FOR GET GPA

function gpaCal(mark) {
    
    let gpa;

    if (mark >= 0 && mark <= 33) {
        gpa = 0;
    }
    else if (mark >= 33 && mark <= 39) {
        gpa = 1;
    }
    else if (mark >= 40 && mark <= 49) {
        gpa = 2;
    }
    else if (mark >= 50 && mark <= 59) {
        gpa = 3;
    }
    else if (mark >= 60 && mark <= 69) {
        gpa = 3.5;
    }
    else if (mark >= 70 && mark <= 79) {
        gpa = 4;
    }
    else if (mark >= 80 && mark <= 100) {
        gpa = 5;
    }
    else{
        console.log('Invalid Mark');
    }
    return gpa;
}


// FOR GET GRADE

function gradeCal(mark) {

    let grade;

    if (mark >= 0 && mark <= 33) {
        grade = 'F';
    }
    else if (mark >= 33 && mark <= 39) {
        grade = 'D';
    }
    else if (mark >= 40 && mark <= 49) {
        grade = 'C';
    }
    else if (mark >= 50 && mark <= 59) {
        grade = 'B';
    }
    else if (mark >= 60 && mark <= 69) {
        grade = 'A-';
    }
    else if (mark >= 70 && mark <= 79) {
        grade = 'A';
    }
    else if (mark >= 80 && mark <= 100) {
        grade = 'A+';
    }
    else{
        console.log('Invalid Mark');
    }
    return grade;
}



function allSubject(bn, en, math, s, ss, rel){

    // FOR INDIVIDUAL SUBJECT GPA
    let bn_gpa = gpaCal(bn);
    let en_gpa = gpaCal(en);
    let math_gpa = gpaCal(math);
    let s_gpa = gpaCal(s);
    let ss_gpa = gpaCal(ss);
    let rel_gpa = gpaCal(rel);

    // FOR INDIVIDUAL SUBJECT GRADE
    let bn_grade = gradeCal(bn);
    let en_grade = gradeCal(en);
    let math_grade = gradeCal(math);
    let s_grade = gradeCal(s);
    let ss_grade = gradeCal(ss);
    let rel_grade = gradeCal(rel);

    let cgpa;
    // If Fail in any subject
    if(bn >= 33 && en >= 33 && math >= 33 && s >= 33 && ss >= 33 && rel >= 33){
        cgpa = (bn + en + math + s + ss + rel) / 100
    }
    else{
        cgpa = 'Fail';
    }


    return `
        SUBJECT         MARK        GRADE       GPA
      ------------------------------------------------
        Bangla          ${bn}           ${bn_grade}          ${bn_gpa}
        English         ${en}           ${en_grade}          ${en_gpa}
        Math            ${math}           ${math_grade}          ${math_gpa}
        Science         ${s}           ${s_grade}          ${s_gpa}
        S Science       ${ss}           ${ss_grade}          ${ss_gpa}
        Rel             ${rel}           ${rel_grade}          ${rel_gpa}
      --------------------------------------------------  
        CGPA  = ${cgpa} 
    `

}

console.log('THIS IS ASSIGNMENT 3');
// Mark without prompt
console.log(allSubject(80, 70, 60, 58, 68, 89));

// Mark with prompt
// console.log(allSubject(parseInt(prompt('Bangla:')), parseInt(prompt('English:')), parseInt(prompt('Math:')), parseInt(prompt('Science:')), parseInt(prompt('S Science:')), parseInt(prompt('Religion:')) ));


//--------------------------------------------- 3 END ---------------------------------------------//



/*
* ASSIGNMENT 4
* Create an age calculator function 
*/

function ageCal(birthYear, birthMonth){

    let age = 2023 - birthYear;
    // 6 means current month june(6)
    let month = 6 - birthMonth;

    // Ei year e birth months jodi JUNE er pore hoy mane current months er pore hoy
    if (month < 0) {

        // age-- mane age theke 1 year kombe karon age month ekhono ase ni
        age--;
        // month er sathe 12 + hobe. ex: if current month is 6 and birth Month is 9 then month = 6 - 9 = -3 . Then -3 + 12 = 9. output will be ___ year and 9 months.
        month += 12;
    }

    return ` Your Age is ${age} years and ${month} months ` ;

}

console.log('THIS IS ASSIGNMENT 4');
console.log(ageCal(2004, 9));
// Age from Prompt
// console.log(ageCal(prompt('Your Birth Year'), prompt('Your Birth months in number(1 - 12):')));


//--------------------------------------------- 4 END ---------------------------------------------//


/*
* ASSIGNMENT 5
* Create a BMI function for health 
*/

function bmiCal(weight, height) {
    // BMI FORMULA
    const bmi = weight / (height * height)

    if (bmi < 18.5) {
        console.log(`Your BMI is ${bmi} and you are Under Weight`);
    }
    else if (bmi >= 18.5 && bmi < 25) {
        console.log(`Your BMI is ${bmi} and your Weight is Normal`);
    }
    else if (bmi >= 25 && bmi < 30) {
        console.log(`Your BMI is ${bmi} and you Over Weight`);
    }
    else if (bmi >= 30 && bmi < 35) {
        console.log(`Your BMI is ${bmi} and your Weight is Obesity(Class |)`);
    }
    else if (bmi >= 30 && bmi < 40) {
        console.log(`Your BMI is ${bmi} and your Weight is Obesity(Class ||)`);
    }
    else if (bmi > 40 ) {
        console.log(`Your BMI is ${bmi} and your Weight is Extreme Obesity`);
    }

}

console.log('THIS IS ASSIGNMENT 5');
// Height in meters
bmiCal(45, 1.65);

//--------------------------------------------- 5 END ---------------------------------------------//



/*
* ASSIGNMENT 6
* Create a currency converter function from taka to USD, CAD, POUND, EURO etc 
*/

function currencyCal(type_currency, ammount) {
    
    let rate;
    switch (type_currency) {
        case 'USD':
            rate = 107.20;
            break;
        case 'CAD':
            rate = 78.76;
            break;
        case 'POUND':
            rate = 132.35;
            break;
        case 'EURO':
            rate = 115.04;
            break;
        default:
            rate = 'Invelid Currency'
            break;
    }

    let currency = ammount * rate;
    return currency;
}

console.log('THIS IS ASSIGNMENT 6');
console.log(currencyCal('EURO', 100) + ' TK');

//--------------------------------------------- 6 END ---------------------------------------------//




