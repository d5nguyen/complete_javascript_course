/**********************
*Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

/* Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/
/**********************
*Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

// Type coercion 
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name? ');
console.log(firstName +' ' + lastName);
/*
* Basic operators
*/
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');

/***************************************
*Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x);

// More operators
x *= 2;  // --> x = x *2 (meaning the previous value of x times 2)
console.log(x);
x += 10
console.log(x);
// to add just another increment to the previous x value, you can use the following:
x++
console.log(x);
*/
/* var johnMass, markMass, johnHeight, markHeight, johnBMI, markBMI;
johnMass = 90;
markMass = 85;
johnHeight = 1.75;
markHeight = 1.9;

johnBMI = johnMass / (johnHeight^2);
markBMI = markMass/ (markHeight^2);
console.log(johnBMI, markBMI);

var johnFatter = johnBMI > markBMI;
console.log(johnFatter);

console.log('Is John Fatter than Mark?' + ' ' + johnFatter);

/**********************************************
* If / else statements
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

/*
var johnMass, markMass, johnHeight, markHeight, johnBMI, markBMI;
johnMass = 90;
markMass = 100;
johnHeight = 1.75;
markHeight = 1.9;

johnBMI = johnMass / (johnHeight^2);
markBMI = markMass/ (markHeight^2);

if (markBMI > johnBMI) {
    console.log(' Mark\'s BMI is higher than John\'s');
} else {
    console.log(' John\'s BMI is lower than Mark\'s');
}    

//var johnFatter = johnBMI > markBMI;
//console.log(johnFatter);

//console.log('Is John Fatter than Mark?' + ' ' + johnFatter);


/*********************************************
*Boolean logic
*/
/*
var firstName = 'John';
var age = 33;

if (age <13) {
    console.log(firstName + 'is a boy.');
} else if ( age >= 13 && age < 20 ) { 
    console.log(firstName + ' is a teenager.')
} else if ( age >=20 && age <30) {
    console.log(firstName + ' is a young man.');    
} else  {
    console.log(firstName + ' is a man.');    
}

/*********************************
* The Ternary Operator and Switch Statement
*/

var firstName = 'John';
var age = 21;

// Ternary operator 
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/* if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
} */

// Switch statement
var job = 'other';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an Uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}
age = 17;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age>= 13 && age < 20:
        console.log(firstName + ' is a teenager.')
        break;
    case age >=20 && age <30:
        console.log(firstName + ' is a young man.');
    default:
        console.log(firstName + ' is a man.'); 
}

/***************************************************
* Truthy and Falsy values and equality operators 
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: all values that are NOT falsy values

var height;

height = 0;
if (height || height === 0) {
    console.log('Variable is defined');
} else { 
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height = '23') {
    console.log('The == operator does type coercion!');
    
}



/**********************************************************
* CODING CHALLENGE 2
*/




avgJohn = (116+94+123)/3;
avgMike = (116+94+123)/3;
avgMary = (97+134+105)/3;
console.log(avgJohn, avgMike, avgMary);



switch(true) {
    case avgJohn > avgMike && avgJohn > avgMary:
        console.log('John\'s team average is the highest.');
        break;
    case avgMike > avgJohn && avgMike > avgMary:
        console.log('Mike\'s team average is the highest.');
        break;
    case avgMary > avgJohn && avgMary > avgMike:
        console.log('Mary\'s team average is the highest.');
        break;
    default: 
        console.log('John, Mike, and Mary\'s team averages are tied.');
}
    