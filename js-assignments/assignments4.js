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

///////////////////////////////////////////////////
// MAP AND SET
///////////////////////////////////////////////////
// #1

// let setOfNumbers = new Set([10]);
// setOfNumbers.add(20).add(setOfNumbers.size);
// console.log(setOfNumbers);
// console.log([...setOfNumbers][2]);

// Needed Output
// Set(3) {10, 20, 2}
// 2

// #2
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log([...new Set(myFriends)].sort());

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

// #3
// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };
// console.log(new Map(Object.entries(myInfo)));
// console.log(new Map(Object.entries(myInfo)).size);
// console.log(new Map(Object.entries(myInfo)).has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

// #4
// let theNumber = 100020003000;
// console.log(
//   +[...new Set(Array.from(theNumber.toString()))].filter((e) => +e > 0).join("")
// );

// Needed Output
// 123

// #5
// let theName = "Elzero";
// console.log(Array.from(theName));
// console.log([...theName]);
// console.log(theName.split(""));
// console.log([...new Set(theName)]);

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

// #6
// let replaceNumberWithLetter = (arr) => {
//   let number = arr.filter((e) => typeof e === "number");
//   let newArr = [...number, ...arr.filter((e) => typeof e === "string")];

//   return newArr.copyWithin(0, number.length, number.length * 2);
// };

// console.log(replaceNumberWithLetter(["A", "B", "C", "D", "E", 10, 15, 6]));
// // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
// console.log(replaceNumberWithLetter(["A", "B", "C", 20, "D", "E", 10, 15, 6]));
// // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
// console.log(replaceNumberWithLetter(["Z", "Y", "A", "D", "E", 10, 1]));
// // ["Z", "Y", "Z", "Y", "A", "D", "E"]

// #7
// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];
// console.log([...numsOne, ...numsTwo]);
// console.log(numsOne.concat(numsTwo));
// console.log([...new Set([...numsOne, ...numsTwo])]);

// Needed Output
// [1, 2, 3, 4, 5, 6]

// #8
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// console.log(
//   +[...new Set([...n1, ...n2].join("").split(""))]
//     .join("")
//     .split("3")
//     .reverse()
//     .join("")
// );

// Needed Output
// 210

///////////////////////////////////////////////////
// REGULAR EXPRESSION
///////////////////////////////////////////////////
// #1
// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let regex = /\w{4}:\w{3}(:\w{4}){1,}/gi;
// console.log(ip.match(regex));
// console.log(regex.test(ip));

// #2
// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let regex2 = /(\bos)\d*(o\b)/gi;
// console.log(specialNames.match(regex2));

// Output
// ['Os10O', 'OsO', 'Os100O']

// #3
// let phone = "+(995)-123 (4567)";
// let regex3 = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/;
// console.log(regex3.test(phone));

// #4
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// #5
// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let re2 = /\d{2}(\/|\s-\s|\s)\d{2}(\/|\s-\s|\s)\d{2,4}/g;

// console.log(date1.match(re2)); // "25/10/1982"
// console.log(date2.match(re2)); // "25 - 10 - 1982"
// console.log(date3.match(re2)); // "25 10 1982"
// console.log(date4.match(re2)); // "25 10 82"

// #6 CHALLENGE
// let url1 = "elzero.org";
// let url2 = "http://elzero.org";
// let url3 = "https://elzero.org";
// let url4 = "https://www.elzero.org";
// let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

// let re3 =
//   /(https?:\/\/)?(www.)?\w{1,}.org(:\d{4}\/\w+.\w+\?id=\d+\&cat=\w+)?/gi;

// console.log(url1.match(re3));
// console.log(url2.match(re3));
// console.log(url3.match(re3));
// console.log(url4.match(re3));
// console.log(url5.match(re3));

///////////////////////////////////////////////////
// OOP
///////////////////////////////////////////////////
// #1
// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

// class Car {
//   constructor(name, model, price) {
//     this.name = name;
//     this.model = model;
//     this.price = price;
//   }

//   run() {
//     return "Car is running now";
//   }

//   stop() {
//     return "Car is stopped";
//   }
// }

// let car1 = new Car("car1", "model1", 10000);
// let car2 = new Car("car2", "model2", 20000);
// let car3 = new Car("car3", "model3", 30000);

// console.log(
//   `Car one Name is ${car1.name} and Model is ${car1.model} And Price Is ${car1.price}`
// );
// console.log(car1.run());

// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");

// #2
// class Phone {
//   constructor(name, serial, price) {
//     this.name = name;
//     this.serial = serial;
//     this.price = price;
//   }
// }

// class Tablet extends Phone {
//   constructor(name, serial, price, size) {
//     super(name, serial, price);
//     this.size = size || "Unknown";
//   }

//   fullDetails() {
//     return `${this.name} Price is ${this.price}, Serial is ${this.serial} And Size is ${this.size}`;
//   }
// }

// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9

// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5

// console.log(`${TabletThree.fullDetails()}`);
// // LG Serial is 250450650 And Size Is Unknown

// #3
// Edit The Class
// class User {
//   #c;
//   constructor(username, card) {
//     this.u = username;
//     this.#c = card;
//   }

//   showData() {
//     let regex = /\d{4}-\d{4}-\d{4}-\d{4}/;
//     let cardNumber = [];
//     this.#c
//       .toString()
//       .split("")
//       .map((e) => {
//         cardNumber.push(e);
//         if ((this.#c.toString().indexOf(e) + 1) % 4 === 0) {
//           cardNumber.push("-");
//         }
//       });
//     return `Hello ${this.u} Your credit card number is ${
//       regex.test(this.#c)
//         ? this.#c
//         : cardNumber.join("").slice(0, cardNumber.length - 1)
//     }`;
//   }
// }

// // Do Not Edit Anything Below

// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);

// console.log(userOne.showData());
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userTwo.showData());
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userThree.showData());
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined

// #4
// String.prototype.addLove = () => {
//   return "I Love Elzero Web School";
// };

// // Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School

// #5
// const myObj = {
//   username: "Elzero",
//   id: 100,
//   score: 1000,
//   country: "Egypt",
// };

// // Write Your Code Here
// Object.defineProperties(myObj, {
//   score: {
//     writable: false,
//   },
//   id: {
//     enumerable: false,
//   },
// });
// delete myObj.country;

// myObj.score = 500;

// for (let prop in myObj) {
//   console.log(`${prop} => ${myObj[prop]}`);
// }

// console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}

///////////////////////////////////////////////////
// DATE, GENERATOR< MODULES
///////////////////////////////////////////////////
// #1

// Needed Output
// let dateNow = new Date();
// let birthday = new Date(1998, 5, 7);
// let dateDiff = dateNow - birthday;

// console.log(dateDiff / 1000, "Seconds");
// console.log(dateDiff / 1000 / 60, "Minutes");
// console.log(dateDiff / 1000 / 60 / 60, "hours");
// console.log(dateDiff / 1000 / 60 / 60 / 24, "Days");
// console.log(dateDiff / 1000 / 60 / 60 / 24 / 30, "Months");
// console.log(dateDiff / 1000 / 60 / 60 / 24 / 30 / 12, "Years");

// ("1247939400 Seconds");
// ("20798990 Minutes");
// ("346650 Hours");
// ("14444 Days");
// ("481 Months");
// ("40 Years");

// #2
// Needed Output
// console.log(new Date(1980, 0, 1, 0, 0, 1));

// ("Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)");
