///////////////////////////////////////////////////
// BOM CHALLENGES
///////////////////////////////////////////////////
// #1
// let number = prompt("Print Number From-To")
//   .split("-")
//   .sort((a, b) => a - b);

// console.log(number);

// for (let i = +number[0]; i <= +number[1]; i++) {
//   console.log(i);
// }

// #2

// let popup = document.querySelector(".popup");
// let close = document.querySelector("button");

// let popUp = () => {
//   popup.style.display = "block";
// };

// setTimeout(popUp, 5000);

// close.onclick = () => (popup.style.display = "none");

// #3
// let number = document.querySelector(".counter");

// let counter = () => {
//   if (number.innerHTML > 0) {
//     number.innerHTML -= 1;
//   } else {
//     clearInterval(counter2);
//   }
// };

// let counter2 = setInterval(counter, 1000);

// #4
// let number = document.querySelector(".counter");

// let counter = () => {
//   if (number.innerHTML > 0) {
//     number.innerHTML -= 1;
//   } else {
//     window.open(
//       "https://elzero.org/category/assignments/javascript-bootcamp-assignments/"
//     );
//   }
// };

// let counter2 = setInterval(counter, 1000);

// #5
// let number = document.querySelector(".counter");

// let counter = () => {
//   if (number.innerHTML > 0) {
//     number.innerHTML -= 1;
//     if (number.innerHTML == "5") {
//       window.open(
//         "https://elzero.org/category/assignments/javascript-bootcamp-assignments/",
//         "_blank",
//         "width=500,height=500"
//       );
//     }
//   } else {
//     clearInterval(counter2);
//   }
// };

// let counter2 = setInterval(counter, 1000);

///////////////////////////////////////////////////
// LOACL & SESSION STORAGE
///////////////////////////////////////////////////
// #1
// let selects = document.querySelectorAll("select");
// let options = document.querySelectorAll("option");
// let box = document.querySelector(".style");
// console.log(selects[0].value);

// box.style.fontFamily = selects[0].value;
// box.style.color = selects[1].value;
// box.style.fontSize = selects[2].value + "px";

// selects.forEach((select) => {
//   select.addEventListener("click", (e) => {
//     console.log(e.target.value);
//     box.style
//   });
// });

// selects.forEach((select) => {
//   select.addEventListener('click', (e) => {
//     window.localStorage.setItem('')
//   })
// })

// if (window.localStorage.getItem("fontFamily")) {
//   box.style.fontFamily = window.localStorage.getItem("fontFamily");
// }
// if (window.localStorage.getItem("color")) {
//   box.style.color = window.localStorage.getItem("color");
// }
// if (window.localStorage.getItem("fontSize")) {
//   box.style.fontSize = window.localStorage.getItem("fontSize") + "px";
// }

// selects[0].addEventListener("click", (e) => {
//   window.localStorage.setItem("fontFamily", e.target.value);
//   box.style.fontFamily = e.target.value;
// });
// selects[1].addEventListener("click", (e) => {
//   window.localStorage.setItem("color", e.target.value);
//   box.style.color = e.target.value;
// });
// selects[2].addEventListener("click", (e) => {
//   window.localStorage.setItem("fontSize", e.target.value);
//   box.style.fontSize = e.target.value + "px";
// });

// #2
// let inputs = document.querySelectorAll("input");

// if (window.sessionStorage.getItem("inputValue")) {
//   inputs.forEach((input) => {
//     input.value = window.sessionStorage.getItem("inputValue");
//   });
// }

// inputs.forEach((input) => {
//   input.addEventListener("click", (e) => {
//     window.sessionStorage.setItem("inputValue", e.target.value);
//   });
// });

// #3 CHALLENGE
// let tasks = document.querySelector(".tasks");
// let inputTask = document.querySelector(".input");
// let addTask = document.querySelector(".add");

// if (window.localStorage.getItem("tasks")) {
//   todo(window.localStorage.getItem("tasks"));
// }

// let todo = (inputValue) => {
//   let task = document.createElement("div");
//   task.className = "task";
//   task.innerHTML = inputValue;

//   let deleteTask = document.createElement("button");
//   deleteTask.value = "Delete";
//   deleteTask.innerHTML = "Delete";
//   deleteTask.className = "delete-task";

//   let contain = document.createElement("div");
//   contain.className = "contain";
//   contain.appendChild(task);
//   contain.appendChild(deleteTask);
//   contain.style.cssText =
//     "display: flex; justify-content: space-between; width: 25%";

//   tasks.append(contain);
// };

// addTask.addEventListener("click", () => {
//   todo(inputTask.value);
//   window.localStorage.setItem("tasks", inputTask.value);
// });

// let del = document.querySelector(".delete-task");
// del.addEventListener("click", () => {
//   del.parentElement.remove();
// });

///////////////////////////////////////////////////
// DESTRUCTURING
///////////////////////////////////////////////////
// #1
// let myNumbers = [1, 2, 3, 4, 5];

// [a, , , , e] = myNumbers;

// console.log(a * e); // 5

// #2
// let mySkills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   ["PHP", "Python", ["Django", "Laravel"]],
// ];

// [a, b, c, [d, e, [f, g]]] = mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// #3
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// let arr = arr3.concat(arr1);

// [, a, b, c] = arr;

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// #4
// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };

// // Write Your Destructuring Assignment Here
// let {
//   age: a,
//   working: w,
//   country: c,
//   hobbies: [h1, , h3],
// } = member;

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming

// #5
// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };

// // Write Your Destructuring Assignment/s Here
// let {
//   title: t,
//   developer: d,
//   releases: {
//     "Ark Of Napishtim": { US: u_price, JAP: j_price },
//     Origin: or,
//   },
// } = game;

// let o = Object.keys(game.releases)[0];
// let a = Object.keys(game.releases)[1];

// let [u, j] = game.releases["Oath In Felghana"];

// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD

// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD

// #6
// let chosen = 3;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// if (chosen === 1) {
//   [
//     {
//       title,
//       age,
//       available,
//       skills: [, second],
//     },
//   ] = myFriends;
// } else if (chosen === 2) {
//   [
//     ,
//     {
//       title,
//       age,
//       available,
//       skills: [, second],
//     },
//   ] = myFriends;
// } else if (chosen === 3) {
//   [
//     ,
//     ,
//     {
//       title,
//       age,
//       available,
//       skills: [, second],
//     },
//   ] = myFriends;
// }

// console.log(title);
// console.log(age);
// console.log(`${available ? "" : "Not "}available`);
// console.log(second);
