const form = document.querySelector("form");
const error = document.querySelector("p.error")
const tableSpace = document.querySelector("div.output");

const table = (() => {
    let arraySet = [], input;
    form.addEventListener("submit", (e) => {
        e.preventDefault;
        input = document.querySelector("form > input[type=text]").value;
        console.log(input);//
        convertArray(input);
        if(!isValid()) return;
        console.log("It is valid!");//
    });
    const convertArray = ((x) => {
        arraySet = x.split(",");
        if(arraySet[arraySet.length - 1] === "") arraySet.pop(); //remove empty space when "," last
        console.log(arraySet);//
    });
    const isValid = (() => {
        error.textContent = "";
        if(arraySet.length < 2) {
            error.textContent = "Please add more data :)";
            return false;
        }
        if(arraySet.some((element) => isNaN(element))) {
            error.textContent = "Invalid Input, please try again :o";
            return false;
        }
        return true;
    });
    const generateTable = (() => {

    });
})();