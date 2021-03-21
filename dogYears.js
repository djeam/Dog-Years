//This is my age in human years
const myAge = 15;

//Accounts for the first two years of dog's life
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;

//the number of dog years accounted for by your later years
laterYears *= 4;

//earlyYears added to laterYears
let myAgeInDogYears = earlyYears + laterYears;

//my name in a string
const myName = 'Dennis Quaid'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);