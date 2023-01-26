// let js = "Learn to use Console";
// alert(js);

console.log(40 + 8 + 23 - 10);
console.log("Siri-RTNP");

// LECTURE: Values and Variables
let country = "Thailand";
let continent = "South East Asia";
let population = 77000000;

console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//LECTURE: let, const and var
language = "Thai";

//LECTURE: Basic Operators
console.log("Split half population: " + population / 2);

population++;
console.log("Increase population by one: " + population);

const higherThanFinland = population > 6000000;
console.log("Has more population than Finland: " + higherThanFinland);

// LECTURE: Strings and Template Literals

// const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;

const description = `${country} is in ${continent} 
and its ${population} million people speak ${language}`;
console.log(description);
// able to make multiple line strings

// LECTURE: Taking Decisions: if / else Statements
if (population > 33000000) {
  console.log(`${country}'s population is above average`);
} else {
  let diffPopulation = population - 33000000;
  console.log(
    `${country}'s population is ${diffPopulation} million below average`
  );
}

// LECTURE: Type Conversion and Coercion
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 57); //False
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143 ****

// LECTURE: The Switch Statement
const day = "Saturday";

switch (day) {
  case "Monday": //semicolon here, day==="Monday"
    console.log(`Start working week
Go to work`);
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log(`Still have to work`);
    break;
  case "Friday":
    console.log(`Thanks God, It's Friday!`);
    break;
  case "Saturday":
  case "Sunday":
    console.log(`It's my weekend!`);
    break;
  default:
    console.log(`Not a valid day`);
}

// Convert to if/else statement

if (day === "Monday") {
  console.log(`Have a good Monday`);
} else if (day === "Tuesday" || day === "Wednesday" || day === "Thursday") {
  console.log(`It's ${day}, I hate my job.`);
} else if (day === "Friday") {
  console.log(`I need to call my friend`);
} else if (day === "Saturday" || day === "Sunday") {
  console.log(`I will nap the whole day!`);
}

const age = 15;
const drink = age >= 18 ? "wine 🍷" : "water 💧";
//True : False

console.log(drink);
//output = water

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
// allow to insert this condition in the template literal

// ------------------------------------------------------

console.log(`

---- Coding Challenge ----

`);

//CODEING CHALLENGE #1
const heightMark = 1.88;
const weightMark = 95;
const heightJohn = 1.76;
const weightJohn = 85;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;

// const markHigherBMI =
//   weightMark / heightMark ** 2 > weightJohn / heightJohn ** 2;

// console.log("BMI Mark is: " + bmiMark);
// console.log("BMI John is: " + bmiJohn);
// console.log("BMI Mark is higher: " + markHigherBMI);

//CODEING CHALLENGE #2

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's(${bmiJohn})!`);
} else {
  console.log(`John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`);
}

//CODEING CHALLENGE #3

//Data Test01: No one witn the trophy
// const averageScoreDolphins = (96 + 108 + 89) / 3;
// const averageScoreKoala = (88 + 91 + 110) / 3;

//Data Test02: Koala wins
// const averageScoreDolphins = (97 + 112 + 101) / 3;
// const averageScoreKoala = (109 + 95 + 123) / 3;

// Data Test02: Draw
const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoala = (109 + 95 + 106) / 3;

console.log(
  `Average of Dolphins is ${averageScoreDolphins}, Koala is ${averageScoreKoala} `
);

if (averageScoreDolphins > averageScoreKoala && averageScoreDolphins >= 100) {
  console.log(
    "Dolphins is the WINNER! and the average score is more than 100 🏆"
  );
} else if (
  averageScoreDolphins < averageScoreKoala &&
  averageScoreDolphins >= 100
) {
  console.log("Koala is the WINNER!and the average score is more than 100 🏆");
} else if (
  averageScoreDolphins === averageScoreKoala &&
  averageScoreDolphins >= 100 &&
  averageScoreKoala >= 100
) {
  console.log("Draw and both teams have average score more than 100 🏆");
} else {
  console.log("No one win the trophy 😭");
}

//CODEING CHALLENGE #4

const bill = 430;
const tipp = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tipp}, you had to pay ${
    bill + tipp
  } in total`
);
