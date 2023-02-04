//////////////////////////////////////////////////////////////////////////////////////////////

"use strict";

//////////////////////////////////////////////////////////////////////////////////////////////

// const private = 10;
// above is the example of a preserved word which is caught by strict mode

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(3, 2);
// console.log(appleOrangeJuice);

//////////////////////////////////////////////////////////////////////////////////////////////

//:::::Function declaration
const age1 = calcAge(1991);
//function devlaration allows us to call a function before we define function body while function expression can not
function calcAge(birthYear) {
  return 2023 - birthYear;
}

//////////////////////////////////////////////////////////////////////////////////////////////

//:::::Function expression
//expression product value
//function is a value, not a type
//function without a name is an anonymous function
//we store a function within a variable
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

//:::::Arrow Function
//also a function expression but in a short form
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
//or
const retirement = (birthYear, firstName) => {
  const retireAge = 65 - (2023 - birthYear);
  return `${firstName} retires in ${retireAge} years`;
};
console.log(retirement(1991, "Fern"));
console.log(retirement(1996, "Teresa"));

//::::Calling a function within a function

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} peices of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
//output "Juice with 8 peices of apple and 12 pieces of orange."

//////////////////////////////////////////////////////////////////////////////////////////////

//::::Arrays

// There are 2 ways to create arrays
const friends = ["Austin", "Bobby", "Claire", "David", "Elsa"];
const birthYears = new Array(1985, 1991, 1996, 2010);

//Not allow to replace the whole array but allow to operate an individual element within it
console.log(friends);
friends[4] = "Katie";
console.log(friends);

//array can store any type of value as much as we want. And any kind of expression
const calcAgeAgain = (birthYear) => 2023 - birthYear;
const testArrays = ["Siri", calcAgeAgain(1991), friends, 100 - 50 === 100];
console.log(testArrays);

//To check the length of the array = 4
console.log(friends.length);

//To point to the last array element = 3
//Array object position start counting from 0
console.log(friends[friends.length - 1]);

//Practice
const ages = [
  calcAgeAgain(birthYears[0]),
  calcAgeAgain(birthYears[1]),
  calcAgeAgain(birthYears[2]),
  calcAgeAgain(birthYears[birthYears.length - 1]),
];
console.log(ages);

//To add a new element at the last position of the array
//Return the length of the array
friends.push("Iris");
console.log(friends);

//To insert a new element at the first position of the array
friends.unshift("Zero");
console.log(friends);

//To delete an element at the first position of the array
friends.shift();
console.log(friends);

//To delete an element from the last position of the array
//Return the removed element
friends.pop();
console.log(friends);

//To search/find an element in the array, return position number
console.log(friends.indexOf("Bobby")); //return element position
console.log(friends.indexOf("Siri")); //return -1 = no exist

//ES6: to prove if it is within the array, return Boolean
//Checking with a strict equlity which means "1" inequal to 1
console.log(friends.includes("Bobby")); //return True
console.log(friends.includes("Siri")); //return False

if (friends.includes("Claire")) {
  console.log(`You have a friend called Claire`);
}

//////////////////////////////////////////////////////////////////////////////////////////////

//::::Objects
//Can add properties to object elements
//the order in objects doesn't matter (defined by properties) while the order of element in array matters a lot
const exampleArray = [
  "Robert",
  "Gow",
  2023 - 2015,
  "student",
  ["Scott", "Alex", "May"],
];

const exampleObject = {
  firstName: "Robert",
  lastName: "Gow",
  age: 2023 - 2015,
  job: "student",
  family: ["Scott", "Alex", "May"],
};

console.log(exampleObject.firstName);
//this Dot notation doesn't allow to add an expression
console.log(exampleObject["firstName"]);
//this bracket notation allow us to add an expression for example:
const interestedIN = prompt(
  "Tell me what do you want to know wheter age or job?"
);
//when user input something that doesn't exist. It will return undefined which is falsy (False)
if (exampleObject[interestedIN]) {
  console.log(exampleObject[interestedIN]); //Dot notation doesn't work in this case.
} else {
  alert("Wrong request :(");
}
// to add a new property
exampleObject.location = "Australia";
exampleObject["hobby"] = "Eat and Play";
console.log(exampleObject);
// to point out an array position within an object
let hisFather;
console.log(
  `${exampleObject.firstName} family has ${exampleObject.family.length} members, and his father is called ${exampleObject.family[0]}}`
);

// // to have an object method
// const Siri = {
//   personName: "Siri",
//   birthYear: 1991,
//   calcAge: function () {
//     return 2023 - this.birthYear;
//   },
// };

// console.log(Siri.calcAge());

// // comparable to
// const calcAge5 = function (birthYear) {
//   return 2023 - birthYear;
// };

// // to call the method
// console.log(Siri.calcAge(1991));
// console.log(Siri["calcAge"](1991));

// to have an object method

//instead of calling this function many times, we can create a new property and later on call it.

const Siri = {
  personName: "Siri",
  birthYear: 1991,
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  drivingLicense: false,
  //// drivingReport: function () {
  ////   if (this.drivingLicense) {
  ////     return (this.report = "has a");
  ////   } else {
  ////     return (this.report = "has No");
  ////   }
  //// },
  drivingReport: function () {
    return `${Siri.personName} is ${Siri.calcAge()} years old, and she has ${
      this.drivingLicense ? "a" : "No"
    } driving license.`;
  },
};

// console.log(Siri.calcAge());
// console.log(Siri.calcAge());
// console.log(Siri.calcAge());
// the function needed to run once to add a new property, then we can utilize it
console.log(Siri.calcAge());
console.log(Siri.drivingReport());
console.log(Siri);

//////////////////////////////////////////////////////////////////////////////////////////////

//::::: "For" Loop
// rep++ is rep = rep + 1
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repitiion ${rep} 🏋️‍♀️`);
}

// to utilize loops with array
const years = [1989, 1990, 1991, 2010, 2040];
const ageArray = [];
for (let i = 0; i <= years.length; i++) {
  // ageArray[i] = 2023 - years[i];
  ageArray.push(2023 - years[i]);
}
console.log(ageArray);

// to loop backward
for (let i = years.length; i >= 0; i--) {
  console.log(i, years[i]);
}

// loop in loop
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(` ----- Exercise ${exercise} -------`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(` Exercise ${exercise}: Lifting wright repetition ${rep} 🏋️‍♂️`);
  }
}

//WHILE LOOP:
let rep = 1;
while (rep <= 10) {
  console.log(rep);
  rep++;
}

//Role the dice until we get 6
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) {
    console.log(`Loop is about to end`);
  }
}

//CONTINUE: this mean get only string values from the array
for (let i = 0; i <= exampleArray.length; i++) {
  if (typeof exampleArray[i] !== "string") continue;
  console.log(exampleArray[i], typeof exampleArray[i]);
}

//BREAK: as soon as the condition is met, it break the loop
for (let i = 0; i <= exampleArray.length; i++) {
  if (typeof exampleArray[i] == "number") break;
  console.log(exampleArray[i], typeof exampleArray[i]);
}

//////////////////////////////////////////////////////////////////////////////////////////////

//::::: JavaScript Fundamentals – Part 2
//:: Coding Challenge 1

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (averageDolphins, averageKoalas) => {
  if (averageDolphins >= 2 * averageKoalas) {
    return `Dolphins win 🐬 (${averageDolphins} vs ${averageKoalas})`;
  } else if (averageKoalas >= 2 * averageDolphins) {
    return `Koalas win 🐨 (${averageKoalas} vs ${averageDolphins})`;
  } else {
    return `Nobody wins 😭`;
  }
};

// test data 1
let averageDolphins = calcAverage(43, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(averageDolphins, averageKoalas));

console.log(checkWinner(100, 300));

// test data 2
averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(averageDolphins, averageKoalas));

// //:: Coding Challenge 2
// const calcTip = (billValue) => {
//   const tipCharge =
//     billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
//   //   return `The tip is ${tip} from the bill ${billValue}, you have to pay ${
//   //     tip + billValue
//   //   } in total`;
//   return tipCharge;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

//:: Coding Challenge 3

const Mark = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.resultBMI = this.weight / this.height ** 2;
    return this.resultBMI;
  },
};

const John = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.resultBMI = this.weight / this.height ** 2;
    return this.resultBMI;
  },
};
console.log(Mark.calcBMI(), John.calcBMI());

// const compareBMI =
//   Mark.resultBMI > John.resultBMI
//     ? `Mark's BMI (${Mark.resultBMI}) is higher than John's BMI (${John.resultBMI})!`
//     : `John's BMI (${John.resultBMI}) is higher than Mark's (${Mark.resultBMI})!`;
// console.log(compareBMI);

console.log(
  `${
    Mark.resultBMI > John.resultBMI
      ? `${Mark.fullName}'s BMI (${Mark.resultBMI}) is higher than ${John.fullName}'s BMI (${John.resultBMI})!`
      : `${John.fullName}'s BMI (${John.resultBMI}) is higher than ${Mark.fullName}'s (${Mark.resultBMI})!`
  }`
);

//:: Coding Challenge 4
const calcTip = (billValue) => {
  const tipCharge =
    billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
  //   return `The tip is ${tip} from the bill ${billValue}, you have to pay ${
  //     tip + billValue
  //   } in total`;
  return tipCharge;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  // tips[i] = calcTip(bills[i]);
  // totals[i] = bills[i] + tips[i];
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
  console.log(
    `Bill ${i + 1}: ${bills[i]}, Tip: ${tips[i]}, Total: ${totals[i]}`
  );
}

console.table(exampleObject);
