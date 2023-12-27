/*document.selectors are used for the selection of any element present in linked HTML file to manipulate it, hence it's called DOM manipulation. Following are the Selectors:-
1: document.getELementByID() For Id's
2: document.getElementByClassName() For Classes
3: document.getElementByTag() For Tags
4: document.querySelector*/


//We can use querySelector to return any element matching to the input given. For classes we have to add "." before className in the same way we have to add "#" before the IdName. For returning first element we use:-
let firstEl = document.querySelector("p");
console.log(firstEl);

//For returning all matching elements we use:-
let allEl = document.querySelectorAll("p");
console.log(allEl);

//Practice Set 01
/*Q:- 01
let h2 = document.querySelector("h2")
console.dir(h2.innerText)

h2.innerText = h2.innerHTML + " this is Farman Haris hehe"*/

/*Q:- 02
let div = document.querySelectorAll(".box");

idx = 1;
for (div of div) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}

// div[0].innerHTML = "Farman Haris";
// div[1].innerHTML = "Ahtsham Jabbar";
// div[2].innerHTML = "Saad Ullah Barelvi";*/

//Practice Set 02
/*Q:- 01
let newButton = document.createElement("button");
newButton.innerText = "Click Me";
newButton.style.backgroundColor = "red";
newButton.style.color = "white";
document.querySelector("body").prepend(newButton);*/

//Q:- 02
let para = document.querySelector(".content");
para.classList.add("newClass")