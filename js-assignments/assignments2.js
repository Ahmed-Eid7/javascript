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
