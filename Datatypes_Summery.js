/* Premitive
7 Types: 
1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 78946515n


// Js is a dynamic typed language

/*non-Premitive/Referance Types
1. Array 
2. Objects
3. Functions 
*/

const heros = ["IronMan", "Loki", "Thore"];
let myObj = {
    name: "Haris",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof outsideTemp )