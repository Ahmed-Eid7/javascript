// INTRODUCTION
// #1
document.write("<p class='el'>Ahmed</p>");

let el = document.querySelector(".el");

el.style.color = "blue";
el.style.fontSize = "80px";
el.style.fontWeight = "bold";
el.style.textAlign = "center";
el.style.fontFamily = "arial";

// #2
console.log(
  "%cAhmed %cEid %cZalat",
  "color:red;font-size:40px",
  "color:green;font-size:40px;font-weight:bold",
  "color:white;font-size:40px;background:blue"
);

// #3
console.group("Group 1");
console.log("Message one");
console.log("Message two");
console.group("Child Group");
console.log("Message one");
console.log("Message two");
console.group("Grand Child Group");
console.log("Message one");
console.log("Message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message one");
console.log("Message two");

// #4
console.table(["Ahmed", "Eid", "Wesam", "Sara", "Reham"]);

// #5
// first single line comment
// console.log("Iam In Console");
// document.write("Iam In Page");

// second Multiple line comment
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
