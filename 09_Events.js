//Practice Set 01
let btn = document.querySelector("button");
let currMode = "light";
btn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.background = "black";
    }
    else{
        currMode = "light";
        document.querySelector("body").style.background = "white";
    }
})