let numRnd = Math.floor(Math.random() * 10) + 1; //Random number from 1 & 10
console.log("numRnd equals to: " + numRnd);

console.log("Before Conditional");

if (numRnd > 5) {
  console.log("Conditions is True"); // If statement example
}

if (numRnd % 2 === 0) {
  console.log("even"); // Another If statement example
} else {
  console.log("Your number is uneven");
}
console.log("After Conditional");

console.log(
  "========================================================================================"
);

const dayOfTheWeek = "monday";
// const dayOfTheWeek = prompt("Enter a Day").toLowerCase(); //prompt receives an argument

if (dayOfTheWeek === "monday") {
  // else if statement example
  console.log("Monday Rules!!!");
} else if (dayOfTheWeek === "friday") {
  console.log("Friday Rules THE MOST!!!");
} else if (dayOfTheWeek === "saturday") {
  console.log("Saturday Rules!!!");
} else if (dayOfTheWeek === "sunday") {
  console.log("Sunday Rules!!!");
} else {
  console.log("MEH");
}

console.log(
  "========================================================================================"
);

const age = 10; //Modify this var to see the if statement work
let ageName = "";

// We could use a OR condition ("||") to write less if statement but it will be a little bit more complex

if (age <= 5) {
  console.log("You can go in for FREE!");
} else if (age > 5 && age <= 10) {
  console.log("You're a Child, you pay $10");
} else if (age > 10 && age <= 65) {
  console.log("You're an Adult, you pay $20");
} else if (age > 65) {
  console.log("You're a Senior, you pay $10");
}

// You could just say age is less than something cause anywayt is greater it'll interpret the valor so there is no need for a && operator

if (age < 5) {
  console.log("You can go in for FREE!");
} else if (age < 10) {
  console.log("You're a Child, you pay $10");
} else if (age < 65) {
  console.log("You're an Adult, you pay $20");
}

// OR EXAMPLE (Probably better idk, is more code at the end but definetly more interesting)
console.log(" ");
console.log("The OR WAY");
console.log(" ");

if (age > 65) {
  ageName = "Senior";
} else if (age > 5 && age <= 10) {
  ageName = "Child";
}

if (age <= 5) {
  console.log("You can go in for FREE!");
} else if ((age > 5 && age <= 10) || age > 65) {
  console.log(`You're a ${ageName}, you pay $10`);
} else if (age > 10 && age <= 65) {
  console.log("You're an Adult, you pay $20");
}

console.log(
  "========================================================================================"
);
