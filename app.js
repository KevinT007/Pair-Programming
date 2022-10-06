// // EASY(1)
// let checkEven = () => {
//   let input = [1, 10, 7, 4, 9, 5];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 == 0) {
//       console.log(`${input[i]} is Even`);
//     } else {
//       console.log(`${input[i]} is Odd`);
//     }
//   }
// };
// checkEven();
//_________________________________________________________
// EASY(2)

// var array = [1, 3, 5, 6, 7, 8, 9, 13];
// function isPrime(element) {
//   for (var i = 2; i < element; i++) {
//     if (element % i === 0) {
//       return false;
//     }
//   }
//   return element !== 1;
// }
// var prime = array.filter(isPrime);
// console.log(prime);
//_________________________________________________________
//MEDIUM (1)
// var random = "y";

// let vowelChecker = () => {
//   if (
//     random == "a" ||
//     random == "e" ||
//     random == "i" ||
//     random == "o" ||
//     random == "u"
//   ) {
//     console.log(`${random} is a vowel`);
//   } else {
//     console.log(`${random} is not vowel`);
//   }
// };
// vowelChecker();
//_________________________________________________________
//MEDIUM (2)
// let stringA = "Debit_card";
// let stringB = "Bad_credit";
// let checkAnagram = () => {
//   let lenghtA = stringA.length;
//   let lengthB = stringB.length;
//   if (lenghtA !== lengthB) {
//     console.log(`${stringA} is not the same length as ${stringB}`);
//   }
//   let checkA = stringA.split("").sort().join("");
//   let checkB = stringB.split("").sort().join("");
//   if (checkA === checkB) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(checkAnagram());
//_________________________________________________________
//MEDIUM (3)
// let num1 = 336;
// let num2 = 360;
// let pInteger = (x) => {
//   if (num1 % x == 0 && num2 % x == 0) {
//     console.log(`${x} is the integer that whatever.`);
//   } else {
//     console.log(`There is no number that goes well into both`);
//   }
// };
// pInteger();
//_________________________________________________________
//MEDIUM (4)
// class Car {
//   constructor(x, y, z) {
//     this.make = "Lexus";
//     this.model = "IS 250";
//     this.year = "2021";
//     this.millage = "5,000";
//     this.color = "Black";
//   }
//   driveToWork() {
//     this.newMillage = this.millage + "33";
//   }
//   driveAroundTheWorld(){
//     this.newMillage = this.millage + "24,000"
//   }
//   runErrands(){
//     this.newMillage = this.millage + "30"
//   }
// }
//_________________________________________________________
//Hard (1)
function hold(holder) {
  let y = [];
  for (let i = 0; i < holder.length; i++) {
    let x = holder[i];

    if (x == "(" || x == "[" || x == "{") {
      y.push(x);
      continue;
    }
    if (y.length == 0) return false;
    //The switch statement executes a block of code depending on different cases.
    //The break statement breaks out of a switch or a loop.
    let check;
    switch (x) {
      case ")":
        check = y.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = y.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = y.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }
  return y.length == 0;
}

let holder = "(])";

if (hold(holder)) console.log(true);
else console.log(false);

//This is Kevin writing, I didn't know how to do this the hard problem

// let hold = (x) => {
//   //deeclare and initialize holders with all type of opening and closing bracket pairwise
//   let holders = "{}[]()";
//   let stack = []; //stack to store brakets
//   //Iterate over elements of string 'x'
//   for (let holder of x) {
//     //check if, x string contains holders as we above declared,then store index holdersVar
//     let holdersVar = holders.indexOf(holder);
//     //stack would add index of opposite index i.e, for '(', stack push index of')' from holders
//     if (holdersVar % 2 === 0) {
//       stack.push(holdersVar + 1);
//     } else {
//       //otherwise, if popped against the braket index of currect closing holders
//       if (stack.pop() !== holdersVar) {
//         return false; //return false
//       }
//     }
//   } //length of stack becomes 0, then return true
//   return stack.length === 0;
// };
// console.log(hold("([])[{}]{(())}"));
// console.log(hold("([])[{}]{(([))}"));
