// if statement
let x = 10;
if (x > 5) {
  console.log("x is greater than 5");
}

// if-else statement
let y = 3; // Change variable name from x to y to avoid redeclaration
if (y > 5) {
  console.log("y is greater than 5");
} else {
  console.log("y is not greater than 5");
}

// if-elseif-else statements
let z = 7; // Change variable name from x to z to avoid redeclaration
if (z > 10) {
  console.log("z is greater than 10");
} else if (z > 5) {
  console.log("z is greater than 5 but not greater than 10");
} else {
  console.log("z is 5 or less");
}

// switch case
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("Weekend is almost here!");
    break;
  default:
    console.log("It's a regular day.");
}

