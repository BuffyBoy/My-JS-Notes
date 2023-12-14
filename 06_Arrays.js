//Practice Set 01
/* Q:- 01

let arr = [85, 97, 44, 45, 65, 89]

let sum = 0;

for(let val of arr){
    sum += val;
}

let avg = sum/arr.length

console.log(`Sum of Marks are ${sum}`)
console.log(`Avg Marks of class is ${avg}`)*/

/* Q:- 02
let price = [250, 456, 789, 900, 600, 454]

// let i = 0;
// for(let val of price){
//     console.log(`Value at index ${i} = ${val}`)
//     let offer = val/10;
//     price[i] = price[i] - offer;
//     console.log(`Value after 10% disocunt ${price[i]}`);
//     i++;
// }

for(let i = 0; i < price.length; i++){
        let offer = price[i] / 10;
        price[i] -= offer;
}

console.log(price)*/


//Practice Set 02
//Q:- 01

let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

company.shift();
company.splice(1,1,"OLA")
company.push("Amazon")
console.log(company);