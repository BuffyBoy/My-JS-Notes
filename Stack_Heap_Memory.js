// Stack (Primitive), Heap(Non-Premitive)
//In Primitive Datatypes as stack is used so we use the copy of original variable so that if we change the variable value from the copy of original it will not effect the original one anyway as shown in the example below

let my_name = "Farman"
let last_Name = my_name
last_Name = "Haris"

console.log(my_name);
console.log(last_Name);
/*Output
Farman
Haris
*/


//In Non-premitive as we use heap memory therefore the referance of original variable is given to the other variables. So when we try to change the value in the variable's value who is accessing the value from some referance then the value will be changes in both accessing variable as well as the original referance. 


let user = {
    email: "farmanharis66@gamil.com",
    password: "123"
}

let userOne = user

userOne.email = "buffyboy327@gmail.com"

console.log(user);
console.log(userOne);
/*Output
{ email: 'buffyboy327@gmail.com', password: '123' }
{ email: 'buffyboy327@gmail.com', password: '123' }*/