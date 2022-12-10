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
