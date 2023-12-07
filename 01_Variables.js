const accountId = 14547;
let accountEmail = "high4tech360@gmail.com";
var accountPassword = "fklsadhkjfsa";
accountCity = "Lahore";

// accountId = 2; not allowed

accountEmail = "hj@dsh.com"
accountPassword = "4654132"
accountCity = "Islamabad"

/*
Preferd not to use var
because of issue in block scope and functional scope
*/

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);

//Practice Set 1:-
const Product = {
    name: "Ball Pen",
    price: 45,
    rating: 3.5,
    offer: "20% discount"
}
console.log(Product);

const profile = {
    username: "@farman.haris",
    isFollow: true,
    following: 123,
    followers: 123,
}
console.log(profile);