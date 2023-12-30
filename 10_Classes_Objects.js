//Practice Set 01
//Question:- 01 & 02

let DATA = "Secrete Information"

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    };

    viewData(){
        console.log("Data = ", DATA)
    };
};

class Admin extends User{
    constructor(name, email){
        super(name, email);
    };
    editData(){
        console.log("Some New Data")
    };
};

let student1 = new User("Farman Haris", "farmanharis66@gmail.com");

let teacher1 = new Admin("Ahtsham Jabbar", "jattkashi420@gmail.com");