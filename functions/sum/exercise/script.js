/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const div = (a, b) => {
  if (b === 0) return "NOT ACCEPTED";
  return a / b;
};

const mult = (a, b) => a * b;

console.log("hello from the SUM exercise");
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/
const calculator = (a, b) => {
  console.log(add(a, b));
  console.log(sub(a, b));
  console.log(div(a, b));
  console.log(mult(a, b));
};
calculator(20, 0);
