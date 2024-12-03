let hour = 17;
let names1 = "Ralp";

if (hour > 5 && hour < 13) {
  console.log(`Good Morning ${names1}!`);
} else if (hour > 12 && hour < 18) {
  console.log(`Good Afternoon ${names1}!`);
} else {
  console.log(`Good night ${names1}!`);
}

let age = 70;
const isHoliday = true;

if ((age <= 6 || age >= 65) && isHoliday != true) {
  console.log(`Discount`);
} else console.log(`No discount`);

let randomNumber = Math.random();
let result = "";
let guess = "tails";

if (randomNumber < 0.5) {
  result = "heads";
} else result = "tails";

// if (guess === result) {
//   console.log(`You win!`);
// } else console.log(`You lose!`);

guess === result ? console.log(`You win!`) : console.log(`You lose!`);

// -------------------------------------------------------

let names = "Ralp";
let cost = 5 + 2 * 3 + 9;

console.log(`My name is: ${names}`);
console.log(`Cost of food: $${cost}`);

let tax = cost * 0.1;
console.log(`Tax: $${tax}`);

let totalCost = cost + tax;
console.log(`Total cost: $${totalCost}`);

let cartQuantity = 0;

let calculation = "";
