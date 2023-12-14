// for(let i=1; i<=5; i++){
//     console.log("Farman Haris");
// }

// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }
// console.log("sum = ", sum);
// console.log("This is the result");

/*For-Off loop
let str = "Farman Haris"
let size = 0;
for (let i of str) {
    console.log(i);
    size++;
}

console.log("String Size = ", size);*/

/*For-in loop

let student = {
    name: "Saad Ullah",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

for(let key in student){
    console.log("Key = ", key, " Value = ", student[key]);
}*/

//Practice Set 1:-
/*Q:-01
for(num=0; num<=100; num++){
    if (num%2 == 0) {
        console.log(num);
    }
}*/

/*Q:-02
let gamNum = 25;
let userNum= prompt("Guess the game number: ");
console.log(userNum);

while (userNum != gamNum) {
    userNum = prompt("You entered wrong number. Guess again: ");
}

console.log("Congratulations, You entered the right number")*/

//Practice Set 02
//Q:-
let Name = "FarmanHaris"
let userName = `@${Name.toLowerCase() + Name.length}`
console.log(userName)