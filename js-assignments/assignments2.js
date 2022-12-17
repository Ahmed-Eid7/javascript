//////////////////////////////////////////
// FUNCTION AND SCOPES
/////////////////////////////////////////
// #1
// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//     let arr = zName.split(" ");
//     return `${arr[0]} ${arr[1][0].toUpperCase()}.`;
//   }

//   function ageWithMessage(zAge) {
//     return `Your age is ${parseInt(zAge)}`;
//   }

//   function countryTwoLetters(zCountry) {
//     return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
//   }

//   function fullDetails() {
//     return `Hello ${namePattern(zName)}, ${ageWithMessage(
//       zAge
//     )}, ${countryTwoLetters(zCountry)}`;
//   }
//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// #2
// function itsMe() {
//   return `Iam A Normal Function`;
// }

// let itsMe = () => `Iam A Normal Function`;

// console.log(itsMe()); // Iam A Normal Function

// #3
// function urlCreate(protocol, web, tld) {
//   return ;
// }

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// #4
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available"
//         ? `${zName}, My Salary Is ${salary}`
//         : `Iam Not Avaialble`;
//     };
//   };
// }

// let checker = (zName) => (status) => (salary) =>
//   status === "Available"
//     ? `${zName}, My Salary Is ${salary}`
//     : `Iam Not Avaialble`;

// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// #5
// function specialMix(...data) {
//   let sum = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === "string") {
//       if (Number.isNaN(parseInt(data[i]))) {
//         continue;
//       } else sum += parseInt(data[i]);
//     } else sum += data[i];
//   }
//   return sum === 0 ? "All is String" : sum;
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// #6
// let names = function (...names) {
//   return `[${names.join("], [")}] => Done!`;
// };

// let names = (...names) => `[${names.join("], [")}] => Done!`;

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// #7
// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[+false];

// let calc = function (one, two, ...nums) {
//   return one + two + nums[+false];
// };

// console.log(calc(10, myNumbers[+false], myNumbers[+true]));

//////////////////////////////////////////
// HIGHER ORDER FUNCTIONS
/////////////////////////////////////////
// #1
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let res = mix
//   .map((e) => (typeof e === "string" ? e : ""))
//   .reduce((a, c) => `${a}${c}`);

// console.log(res);

// #2
// let myString = "EElllzzzzzzzeroo";

// let res = myString
//   .split("")
//   .filter((e, i) => myString.indexOf(e) === i)
//   .reduce((a, c) => `${a}${c}`);

// console.log(res);

// #3
// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let res = myArray.reduce((a, c) => {
//   if (typeof c === "object") {
//     c = c.reduce((a, c) => `${a}${c}`);
//   }
//   return a + c;
// });

// console.log(res);

// #4
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let res = numsAndStrings.filter((e) => typeof e === "number").map((e) => -e);

// console.log(res);

// #5
// let nums = [2, 12, 11, 5, 10, 1, 99];

// let res = nums.reduce((a, c) => {
//   return c % 2 === 0 ? a * c : a + c;
// }, 1);

// console.log(res);

// #6
// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let res = myString
//   .split(",")
//   .filter((e) => Number.isNaN(parseInt(e)))
//   .map((e) => e[+false])
//   .reduce((a, c) => {
//     return c === "_" ? a + " " : a + c;
//   });

// console.log(res.slice(+false, res.length - +true));

//////////////////////////////////////////
// OBJECT AND METHODS
/////////////////////////////////////////
// #1
// Create Your Object Here
// let member = {
//   name: "Elzero",
//   age: 38,
//   country: "Egypt",
//   fullDetails: function () {
//     return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
//   },
// };

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// #2
// Method One
// let objMethodOne = { property: "Method One" };
// console.log(objMethodOne.property); // "Method One"

// Method Two
// let objMethodTwo = {};
// objMethodTwo.property = "Method Two";
// console.log(objMethodTwo.property); // "Method Two"

// Method Three
// let objMethodThree = Object.create({ property: "Method Three" });
// console.log(objMethodThree.property); // "Method Three"

// Method Four
// let objMethodFour = new Object({ property: "Method Four" });
// console.log(objMethodFour.property); // "Method Four"

// #3
// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// Create Your Object Here in One Line
// let finalObject = Object.assign({ a }, threeNums, twoNums);
// console.log(finalObject);

// #4
// The Object To Work With
// let myFavGames = {
//   "Trinity Universe": {
//     publisher: "NIS America",
//     price: 40,
//   },
//   "Titan Quest": {
//     publisher: "THQ",
//     bestThree: {
//       one: "Immortal Throne",
//       two: "Ragnarök",
//       three: "Atlantis",
//     },
//     price: 50,
//   },
//   YS: {
//     publisher: "Falcom",
//     bestThree: {
//       one: "Oath in Felghana",
//       two: "Ark Of Napishtim",
//       three: "origin",
//     },
//     price: 40,
//   },
// };

// // Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length; // 3
// let gameName = Object.keys(myFavGames);

// for (let i = 0; i < objectLength; i++) {
//   console.log(`The Game Name Is ${gameName[i]}`);
//   console.log(`The Publisher Is ${myFavGames[gameName[i]].publisher}`);
//   console.log(`The Price Is ${myFavGames[gameName[i]].price}`);

//   // Check If Nested Object Has Property (bestThree)
//   if (myFavGames[gameName[i]].hasOwnProperty("bestThree")) {
//     console.log("- Game Has Releases");
//     console.log(`First => ${myFavGames[gameName[i]].bestThree.one}`);
//     console.log(`Second => ${myFavGames[gameName[i]].bestThree.two}`);
//     console.log(`Third => ${myFavGames[gameName[i]].bestThree.three}`);
//   }
//   console.log("#".repeat(20));
// }

// // Ouput

// ("The Game Name Is Trinity Universe");
// ("The Publisher Is NIS America");
// ("The Price Is 40");
// ("####################");
// ("The Game Name Is Titan Quest");
// ("The Publisher Is THQ");
// ("The Price Is 50");
// ("- Game Has Releases");
// ("First => Immortal Throne");
// ("Second => Ragnarök");
// ("Third => Atlantis");
// ("####################");
// ("The Game Name Is YS");
// ("The Publisher Is Falcom");
// ("The Price Is 40");
// ("- Game Has Releases");
// ("First => Oath in Felghana");
// ("Second => Ark Of Napishtim");
// ("Third => origin");
// ("####################");

//////////////////////////////////////////
// DOCUMENT OBJECT MODEL
/////////////////////////////////////////
// #1
{
  /* <div id="elzero" class="element" name="js">JavaScript</div>; */
}

// console.log(document.getElementById("elzero"));
// console.log(document.getElementsByClassName("element")[0]);
// console.log(document.getElementsByTagName("div")[0]);
// console.log(document.querySelector("#elzero"));
// console.log(document.querySelector(".element"));
// console.log(document.querySelector("div"));
// console.log(document.querySelector("[name='js']"));
// console.log(document.querySelectorAll("#elzero")[0]);
// console.log(document.querySelectorAll(".element")[0]);
// console.log(document.querySelectorAll("div")[0]);
// console.log(document.querySelectorAll("[name='js']")[0]);
// console.log(document.body.children[0]);
// console.log(document.body.childNodes[7]);
// console.log(document.body.innerHTML);

// #2
// let imgs = document.images;
// console.log(imgs);
// document.body.style.background = "black";

// imgs.map((img) => {
//   img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   img.alt = "Elzero Logo";
// });

// for (let img of imgs) {
//   img.setAttribute(
//     "src",
//     "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//   );
//   // img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   img.alt = "Elzero Logo";
// }

// #3
// let input = document.querySelector("[name='dollar'");
// let text = document.querySelector(".result");
// console.log(text);

// input.onkeyup = () => {
//   input.value ? input.value : (input.value = 0);
//   text.textContent = `${parseFloat(input.value)} USD Dollar => ${(
//     parseFloat(input.value) * 15.6
//   ).toFixed(2)} EGP Pound`;
// };

// #4
// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// let text = one.textContent;

// one.title = one.className;
// two.title = two.className;

// one.textContent = two.textContent;
// two.textContent = text + ` ${document.querySelectorAll("div").length}`;

// console.log(one);
// console.log(two);

// #5
// document.images.forEach((img) => {
//   if (img.hasAttribute("alt")) {
//     img.setAttribute("alt", "old");
//   } else img.setAttribute("alt", "Elzero New");
// });
// let images = document.images;

// for (let img of images) {
//   if (img.hasAttribute("alt")) {
//     img.setAttribute("alt", "old");
//   } else img.setAttribute("alt", "Elzero New");
// }

// #6
// let numElements = document.querySelector('[name="elements"]');
// let text = document.querySelector('[name="texts"]');
// let element = document.querySelector("[name='type']");
// let results = document.querySelector(".results");
// let create = document.querySelector('[name="create"');

// create.onclick = (e) => {
//   e.preventDefault();

//   if (results.children.length > 0) {
//     results.innerHTML = "";
//   }

//   for (let i = 1; i <= numElements.value; i++) {
//     let createElement = document.createElement(`${element.value}`);

//     createElement.textContent = text.value;

//     createElement.className = "box";

//     createElement.setAttribute("id", `id-${i}`);

//     createElement.setAttribute("title", "Element");

//     results.appendChild(createElement);
//   }
// };

//////////////////////////////////////////
// DOCUMENT OBJECT MODEL
/////////////////////////////////////////
// #2
// let classesToAdd = document.querySelector(".classes-to-add");
// let classesToRemove = document.querySelector(".classes-to-remove");
// let current = document.querySelector(".current");
// let classesList = document.querySelector(".classes-list").children[1];
// let createElement = document.createElement("span");

// if (classesList.children.length === 0)
//   classesList.textContent = "No Classes To Show";

// classesToAdd.onblur = function () {
//   let classes = classesToAdd.value.split(" ");

//   classes.forEach((e) => {
//     current.classList.add(e.toLowerCase());

//     createElement.append(e.toLowerCase());
//     createElement.className = e.toLowerCase();
//     classesList.appendChild(createElement);
//   });
//   classesToAdd.value = "";
// };

// classesToRemove.onblur = function () {
//   let removedClasses = classesToRemove.value.split(" ");

//   removedClasses.forEach((e) => {
//     current.classList.remove(e.toLowerCase());

//     let removedElement = document.querySelector(`.${e}`);
//     classesList.removeChild(removedElement);
//   });
//   classesToRemove.value = "";
// };

// classesToRemove.onblur = function () {
//   let removedClasses = classesToRemove.value.split(" ");

//   removedClasses.forEach((e) => {
//     current.classList.remove(e);

//     let elementToRemove = document.querySelector(`.${e}`);
//     console.log(elementToRemove);
//     classesList.remove(elementToRemove);
//   });
//   classesToRemove.value = "";
// };

// let classesToAdd = document.querySelector(".classes-to-add");
// let classesToRemove = document.querySelector(".classes-to-remove");
// let current = document.querySelector(".current");
// let classesList = document.querySelector(".classes-list").children[1];
// let createElement = document.createElement("span");

// let classes;

// if (classesList.innerHTML === "") classesList.innerHTML = "No Classes To Show";

// let addClasses = function (e) {
//   classesList.innerHTML = "";
//   classesToAdd.value
//     .split(" ")
//     .sort()
//     .forEach((i) => current.classList.add(i));
//   classes = current.classList.value.split(" ");
//   for (let i = 2; i < classes.length; i++) {
//     let element = document.createElement("span");
//     element.textContent = classes[i];
//     element.className = classes[i];
//     classesList.appendChild(element);
//   }
// };

// let removeClasses = function (e) {
//   classesList.innerHTML = "";
//   current.classList.remove(e);
//   classes = current.classList.value.split(" ").sort();
//   for (let i = 2; i < classes.length; i++) {
//     let element = document.createElement("span");
//     element.textContent = classes[i];
//     element.className = classes[i];
//     classesList.appendChild(element);
//   }
// };

// classesToAdd.addEventListener("blur", (e) => {
//   // if (classesToAdd.textContent === "") return;
//   addClasses(e.target.value);
//   classesToAdd.value = "";
// });

// classesToRemove.addEventListener("blur", (e) => {
//   if (classesToAdd.textContent === "") return;
//   removeClasses(e.target.value);
//   classesToRemove.value = "";
//   if (classesList.innerHTML === "")
//     classesList.innerHTML = "No Classes To Show";
// });

// #3
// document.querySelector("p").remove();

// let myElement = document.querySelector(".our-element");
// let createElement = document.createElement("div");
// let createElement2 = document.createElement("div");

// createElement.textContent = "Start";
// createElement.className = "start";
// createElement.setAttribute("title", "Start Element");
// createElement.setAttribute("data-value", "Start");

// createElement2.textContent = "End";
// createElement2.className = "end";
// createElement2.setAttribute("title", "End Element");
// createElement2.setAttribute("data-value", "End");

// myElement.before(createElement);
// myElement.after(createElement2);

// #4
// console.log(document.querySelector("span").nextSibling.nextSibling.nextSibling);

// #5

// console.log(document.body.children);
// let elements = document.body.children;

// [...elements].forEach((e) =>
//   e.addEventListener("click", (e) => {
//     console.log(`This is ${e.target.nodeName}`);
//     console.log(e);
//   })
// );
