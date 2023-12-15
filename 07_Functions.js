/*function sum(x,y) {
    s = x + y;
    return s;
}

let val = sum(789,212);
console.log(val);*/

/*let arrowSum = (a,b) => {
    console.log(a + b);
}

arrowSum(7563,15691);*/

/*const MulFun = (a,b) => {
    console.log(a*b);
}

MulFun(4765,1456)*/


//Practice Set 01
/*Q:- 01
function CountVolwels(str) {
    let count = 0;
    for (char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count)
}

CountVolwels("Farman Haris")*/

/*Q:- 02
let CountVolwels = (str) => {
    let count = 0;
    for (char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count)
}

CountVolwels("Farman Haris")*/

/*let arr = [4, 5, 4, 6, 7];

arr.forEach((val) => {
    console.log(val);
})*/

//Practice Set 02
/*Q:- 01
let arr = [4, 8, 2, 6, 9, 4];
arr.forEach((val) => {
    console.log(val**2);
})*/

//Practice Set 03
/*Q:- 01
let arr = [,12,65,32,98,78,91];
arr.filter((val) => {
    if (val>= 90) {
        console.log(val)
    }
})*/

//Q:- 02
let n = prompt("Enter a Number: ");

let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i-1] = i;
}

let sum = arr.reduce((res, curr) => {
    return pre+curr;
})

console.log(sum);


let Factorial = arr.reduce((res, curr) => {
    return pre*curr;
})

console.log(Factorial);