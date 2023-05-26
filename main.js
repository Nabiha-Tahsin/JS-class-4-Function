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

// console.log(peopleAge(prompt('Age:')));




/*
* ASSIGNMENT 2
* Create a function that will return the area of a rectangle, square, triangle 
*/


function areaCal(shape) {

    switch (shape) {
        case 'Rectangle':
            let length = parseInt(prompt('Length:'));
            let width = parseInt(prompt('Width:'));

            console.log('Area = ' + length * width);
            break;

        case 'Square':
            let side = parseInt(prompt('Side Value:'));

            console.log('Area = ' + side * side);
            break;

        case 'Triangle':
            let height = parseInt(prompt('Height:'));
            let base = parseInt(prompt('Base:'));

            console.log('Area = ' + .5 * base * height);
            break;

        default:
            console.log('Invalid Shape');
    
    }

}

// console.log(areaCal(prompt('Type Rectangle or Square or Triangle')));




/*
* ASSIGNMENT 3
* GPA, CGPA, GRADE function for result publishing 
*/


function gpaCal(mark) {
    
    // FOR GET GPA

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

// console.log(gpaCal(parseInt(prompt('Mark:'))));


function gradeCal(mark) {

    // FOR GET GRADE

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
// Mark without prompt
console.log(allSubject(80, 70, 60, 58, 68, 89));
// Mark with prompt
// console.log(allSubject(parseInt(prompt('Bangla:')), parseInt(prompt('English:')), parseInt(prompt('Math:')), parseInt(prompt('Science:')), parseInt(prompt('S Science:')), parseInt(prompt('Religion:')) ));











