//////////////////////////////////////////
// INTRODUCTION
/////////////////////////////////////////
// #1
// document.write("<p class='el'>Ahmed</p>");

// let el = document.querySelector(".el");

// el.style.color = "blue";
// el.style.fontSize = "80px";
// el.style.fontWeight = "bold";
// el.style.textAlign = "center";
// el.style.fontFamily = "arial";

// #2
// console.log(
//   "%cAhmed %cEid %cZalat",
//   "color:red;font-size:40px",
//   "color:green;font-size:40px;font-weight:bold",
//   "color:white;font-size:40px;background:blue"
// );

// #3
// console.group("Group 1");
// console.log("Message one");
// console.log("Message two");
// console.group("Child Group");
// console.log("Message one");
// console.log("Message two");
// console.group("Grand Child Group");
// console.log("Message one");
// console.log("Message two");
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.group("Group 2");
// console.log("Message one");
// console.log("Message two");

// #4
// console.table(["Ahmed", "Eid", "Wesam", "Sara", "Reham"]);

// #5
// first single line comment
// console.log("Iam In Console");
// document.write("Iam In Page");

// second Multiple line comment
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/

//////////////////////////////////////////
// DATA TYPES AND VARIABLES
/////////////////////////////////////////
// #1
// let numberOne = 10;
// let numberTwo = 20;

// console.log(numberOne + "" + numberTwo);
// console.log(typeof (numberOne + "" + numberTwo));
// console.log(`${numberOne}${numberTwo}`);
// console.log(typeof `${numberOne}${numberTwo}`);
// console.log(numberTwo + "\n" + numberOne);
// console.log(`${numberTwo}
// ${numberOne}`);

// #2
// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object

// #3
// `I'm In
// \\
// Love \\ """ '''
// ++ With ++
// \"""\"""
// ""JavaScript""``
// console.log(
//   '`I\'m In\n\\\\\nLove \\\\ """ \'\'\'\n++ With ++\n\\"""\\"""\n""Javascript""``'
// );

// #4
// let a = 21;
// let b = 20;

// console.log("_" + `${a}_${b}`.repeat(4) + "_"); // _21_2021_2021_2021_20_

// #5
// let titleName = "Ahmed",
//   descriptionContent = "Ahmed Eid",
//   dateTime = "10/12/2022";

// let markup = `
//   <div>
//     <h3>Hello, ${titleName}</h3>
//     <p>${descriptionContent}</p>
//     <span>${dateTime}</span>
//   </div>
// `;

// document.write(markup.repeat(4));

//////////////////////////////////////////
// OPERATORS
/////////////////////////////////////////
// #1
// Replace ? With Arithmetic Operators
// console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0

// #2
// let num = 3;

// // Solution One
// console.log(num + num); // 6
// // Solution Two
// console.log(num * (true + true)); // 6
// // Soultion Three
// console.log(++num + true + true); // 6
// // Soultion Four
// console.log(num ** (true + true) % 10); // 6
// // Solution Five
// console.log(--num * --num); // 6
// // Solution Six
// console.log(num ** num + true + true); // 6

// #3
// let num = "10";

// Solution One
// console.log(+num + +num); // 20
// Solution Two
// console.log(Number(num) + Number(num)); // 20
// Solution Three
// console.log(-(-num + -num)); // 20
// Solution Four
// console.log(num * (true + true)); // 20

// #4
// let points = 10;

// Write Your Code Here
// points++;
// points++;
// points++;
// console.log(points); // 13
// Write Your Code Here
// points--;
// points--;
// points--;
// points--;
// points--;
// console.log(points); // 8;

// #5
// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);

/*
  [++a] [+]
  [++a]
  value: 11
  Explain: pre increment
  [+]
  Explain: add operrator

  [+b++] [+]
  [+b++]
  value: 20
  Explain: post increment
  [+]
  Explain: add operrator

  [+c++] [-]
  [+c++]
  value: 80
  Explain: post increment
  [-]
  Explain: minus operrator

  [+a++]
  [+a++]
  value: 11
  Explain: post increment

  a = 12
  b = 21
  c = 81
*/

// console.log(++a + -b + +c++ - -a++ + +a);
/*
  [++a] [+]
  [++a]
  value: 13
  Explain: pre increment
  [+]
  Explain: add operrator

  [-b] [+]
  [-b]
  value: -21
  Explain: negative number because -
  [+]
  Explain: add operrator

  [+c++] [-]
  [+c++]
  value: 81
  Explain: post increment
  [-]
  Explain: minus operrator

  [-a++] [+]
  [-a++]
  value: -13
  Explain: post increment and negate it because -
  [+]
  Explain: add operrator

  [+a]
  [+a]
  value: 14
  Explain: make the negative number positive

  a = 14
  b = 21
  c = 82
*/

// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [--c] [+]
  [--c]
  value: 81
  Explain: pre decrement
  [+]
  Explain: add operator

  [+b] [+]
  [+b]
  value: 21
  Explain: positive number
  [+]
  Explain: add operator

  [--a] [*]
  [--a]
  value: 13
  Explain: pre decrement
  [*]
  Explain: multiply operator

  [+b++] [-]
  [+b++]
  value: 21
  Explain: post increment
  [-]
  Explain: minus operrator

  [+b] [*]
  [+b]
  value: 22
  Explain: positive number
  [*]
  Explain: multiply operator

  [a] [+]
  [a]
  value: 13
  Explain: number
  [+]
  Explain: add operrator

  [--a] [-]
  [++a]
  value: 12
  Explain: pre decrement
  [-]
  Explain: minus operrator

  [+true]
  [+true]
  value: 1
  Explain: return 1
*/

// #6
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d * +e); // 2000
// console.log(-d + ++f + ++e * ++g); //173

//////////////////////////////////////////
// NUMBERS
/////////////////////////////////////////
// #1
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000
// console.log(1e5); // 100000
// console.log(10 ** 5); // 100000
// console.log(10e5 - 9e5); // 100000
// console.log(1e6 / 10); // 100000
// console.log(1e3 * 1e2); // 100000
// console.log(1e5 % 1e6); // 100000
// console.log(Math.pow(10, 5)); // 100000

// #2
// console.log(Number.MIN_SAFE_INTEGER * -1); // 9007199254740991

// #3
// console.log(
//   ((Number.MAX_SAFE_INTEGER - Number.MIN_SAFE_INTEGER) /
//     -Number.MIN_SAFE_INTEGER +
//     (Number.MAX_SAFE_INTEGER - Number.MIN_SAFE_INTEGER) /
//       -Number.MIN_SAFE_INTEGER) *
//     ((Number.MAX_SAFE_INTEGER - Number.MIN_SAFE_INTEGER) /
//       -Number.MIN_SAFE_INTEGER +
//       (Number.MAX_SAFE_INTEGER - Number.MIN_SAFE_INTEGER) /
//         -Number.MIN_SAFE_INTEGER)
// ); // 16

// #4
// let myVar = "100.56789 Views";

// console.log(parseInt(myVar), typeof parseInt(myVar)); // 100
// console.log(
//   Number(parseFloat(myVar).toFixed(2)),
//   typeof Number(parseFloat(myVar).toFixed(2))
// ); // 100.57

// #5
// let num = 10;

// console.log(+Number.isInteger(num) + +Number.isInteger(num)); // 2

// #6
// let flt = 10.4;

// console.log(Math.floor(flt)); // 10
// console.log(Math.round(flt)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(parseInt(flt)); // 10
// console.log(flt.toFixed()); // 10

// #7
// console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

// #8 CHALLENGE
// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// find smallest number in all variables and return integer
// console.log(parseInt(Math.min(a, b, c, d)));

// use a + d variables one time to get the needed output
// console.log(Math.pow(a, parseInt(d))); // 10000

// get integer 2 from variable d by different 4 methods
// console.log(Math.floor(d));
// console.log(Math.round(d));
// console.log(parseInt(d));
// console.log(Math.trunc(d));

// use variable b + d to get the values
// console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => string
// console.log(Math.round(Math.floor(b) / Math.ceil(d))); // 67  => number

//////////////////////////////////////////
// STRINGS AND METHODS
/////////////////////////////////////////
// #1
// let userName = "Elzero";
// userName = userName.toLowerCase();

// console.log(userName[0]); // e
// console.log(userName.slice(0, 1)); // e
// console.log(userName.substring(0, 1)); // e
// console.log(userName.substr(0, 1)); // e
// console.log(userName.slice(-3, -2)); // e
// console.log(userName[0].repeat(3)); // eee

// #2
// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes(letterZ)); // True
// console.log(word.startsWith(letterE.toUpperCase())); // True
// console.log(word.endsWith(letterO.toLowerCase())); // True

// #3 CHALLENGE
// let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
// console.log(a.slice(-4, -3).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
// console.log(a.slice(0, 6).split()); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
// console.log(`${a.substr(0, 6)} ${a.substr(-6)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
// console.log(
//   `${a[0].toLowerCase()}${a.slice(1, a.length - 1).toUpperCase()}${a[
//     a.length - 1
//   ].toLowerCase()}`
// ); // eLZERO WEB SCHOOl

//////////////////////////////////////////
// COMPARISON AND LOGICAL OPERATORS
/////////////////////////////////////////
// #1
// console.log(100 == "100"); // true
// console.log(100 !== 1000); // true
// console.log(((110 !== 100) !== 10) !== 20); // true
// console.log(-10 == "-10"); // true
// console.log(typeof -50 === typeof +"-40"); // true
// console.log(typeof 10 === typeof -"-40"); // true
// console.log(typeof "10" !== typeof 10); // true
// console.log(typeof 20 !== false); // true

// #2
// let num1 = 10;
// let num2 = 20;

// console.log(typeof num1 === typeof num2); // true
// console.log(num2 - num1 === num1); // true
// console.log(num2 / num1 === true + true); // true
// console.log(num2 % num1 === +false); // true
// console.log(num1 * num2 !== num1); // true
// console.log(num1 + num2 === (true + true + true) * num1); // true

// #3
// let a = 20;
// let b = 30;
// let c = 10;

// console.log((a < b && a > c) || a > b); // true
// console.log(a < b && a > c); // true
// console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

//////////////////////////////////////////
// IF CONDITION
/////////////////////////////////////////
// #1
// Test Case 1
// let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// Test Case 3
// let num = 110; // "110"

// if (num < 10) {
//   console.log("00" + num);
// } else if (num > 10 && num < 100) {
//   console.log("0" + num);
// } else if (num >= 100) {
//   console.log("" + num);
// }

// #2
// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if (num1 == str) {
//   console.log("{num1} Is The Same Value As {str}");
// }

// if (num1 == str && num1 !== str) {
//   console.log("{num1} Is The Same Value As {str} But Not The Same Type");
// }

// if (num1 !== str2) {
//   console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
// }

// if (str2 !== str || typeof str2 === typeof str) {
//   console.log("{str} Is The Same Type As {str2} But Not The Same Value");
// }

// // Output
// ("{num1} Is The Same Value As {str}");
// ("{num1} Is The Same Value As {str} But Not The Same Type");
// ("{num1} Is Not The Same Value Or The Same Type As {str2}");
// ("{str} Is The Same Type As {str2} But Not The Same Value");

// #3
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if (+num3 > num1 && typeof num3 !== typeof num1) {
//   console.log(
//     "30 Is Larger Than 10 And Type string Not The Same Type As number"
//   );
//   if (+num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
//     console.log(
//       "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
//     );
//     if (num3 != num1 && num3 !== num2) {
//       console.log(
//         "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
//       );
//     }
//   }
// }

// Needed Output
// ("30 Is Larger Than 10 And Type string Not The Same Type As number");
// ("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
// ("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

// #4

// let num1 = 11;
// let num2 = 10;
// let num3 = 11;
// let num4 = 33;

// Condition 1
// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Condition 2
// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Condition 3
// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Condition 4
// if (num1 + num2 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Condition 5
// if (num1 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Condition 6
// if (num1 + num2 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Condition 7
// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// #5 CHALLENGE
// let st = "Elzero Web School";

// if (st[st.indexOf("W")].toLowerCase() === "w") {
//   console.log("Good");
// }

// if (st !== "string") {
//   console.log("Good");
// }

// if (typeof st.length === "number") {
//   console.log("Good");
// }

// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }
