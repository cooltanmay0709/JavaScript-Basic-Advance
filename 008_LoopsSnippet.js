// while loops
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do...while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// standard for loop
for (let k = 0; k < 5; k++) {
  console.log(k);
}

// for...of loop for iterating over an array
let colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}

// for...in loop for iterating over properties of an object
let person = {
  name: 'John',
  age: 30,
  job: 'Developer'
};
for (let key in person) {
  console.log(key + ': ' + person[key]);
}

// for...each method for arrays
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});

