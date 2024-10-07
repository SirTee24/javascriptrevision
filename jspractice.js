// function multiplyNumbers (x, y){
//     let result = x * y
//     console.log (result)
// }
// multiplyNumbers(6, 7);

//Arrow functions -Basics
// let func = function (arg1, arg2, argN){
//     return ;
// };
// let 

//using arrow function for multiplication
let multiplyNumbers = (x, y) => x*y;
console.log(multiplyNumbers(8, 10))

//where the argument is one
let double = n => console.log (n*2);
double(9);

//if there are no arguments at all, the parenthesis can be empty but it's needed
let greet =() => alert("Good day!");
greet ();

