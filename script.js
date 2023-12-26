const form = document.querySelector("form");
const textInput = document.querySelector("form > input");
const error = document.querySelector("p.error")
const tableSpace = document.querySelector("div.output");

const table = (() => {
    let arraySet = [], input;
    form.addEventListener("submit", (e) => {
        e.preventDefault;
        console.log("User: " + textInput.value);//
        convertArray(textInput.value);
        if(!isValid()) return;
        updateText();
        console.log("It is valid!");//
    });
    
    const convertArray = ((x) => {
        arraySet = x.split(",");
        for(let i = 0; i < arraySet.length; i++) { 
            arraySet[i] = arraySet[i].trim(); //remove whitespaces before & after element
        }
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
    const updateText = (() => {
        let formattedInput = arraySet.join(", ");
        textInput.value = formattedInput;
    });
    const generateTable = (() => {

    });
})();