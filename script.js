const form = document.querySelector("form");
const textInput = document.querySelector("form > input");
const error = document.querySelector("p.error")
const tableSpace = document.querySelector("div.output");

const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");
const tableFoot = document.querySelector("tfoot");

const table = (() => {
    let arraySet = [], input;
    form.addEventListener("submit", (e) => {
        resetTable();
        e.preventDefault;
        convertArray(textInput.value);
        if(!isValid()) return;
        updateText();
        console.log("It is valid!");//
        generateTable();
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
        let row, head, cell;
        const findMean = (() => {
            let total = 0;
            for(let x of arraySet) {
                total += +x;
            }
            return total/arraySet.length;
        });
        const findStandardDeviation = ((number) => {
            let current = 0;
            for(let i = 0; i < arraySet.length; i++) {
                current += (arraySet[i] - mean) ** 2;
            }
            return Math.sqrt(current/number);
        });
        const mean = findMean();
        //DOM Elements
        const heading = (() => {
            row = document.createElement("tr");
            tableHead.appendChild(row);
            head = document.createElement("th");
            head.textContent = "value (x)";
            row.appendChild(head);
            head = document.createElement("th");
            head.textContent = "mean (X̄)";
            row.appendChild(head);
            head = document.createElement("th");
            head.textContent = "(x - X̄)";
            row.appendChild(head);
            head = document.createElement("th");
            head.textContent = "(x - X̄)";
            row.appendChild(head);
            cell = document.createElement("sup");
            cell.textContent = 2;
            head.appendChild(cell);
        })();
        const body = (() => {
            for(let i = 0; i < arraySet.length; i++) {
                row = document.createElement("tr");
                tableBody.appendChild(row);
                cell = document.createElement("td");
                cell.textContent = parseFloat((arraySet[i] * 1).toFixed(4));
                row.appendChild(cell);
                cell = document.createElement("td");
                cell.textContent = parseFloat(mean.toFixed(4));
                row.appendChild(cell);
                cell = document.createElement("td");
                cell.textContent = parseFloat((arraySet[i] - mean).toFixed(4));
                row.appendChild(cell);
                cell = document.createElement("td");
                cell.textContent = parseFloat(((arraySet[i]-mean) ** 2).toFixed(4));
                row.appendChild(cell);
            }
        })();
        const footer = (() => {
            row = document.createElement("tr");
            tableFoot.appendChild(row);
            head = document.createElement("th");
            head.colSpan = 2;
            head.textContent = "Sample Standard Deviation (s)";
            row.appendChild(head);
            head = document.createElement("th");
            head.colSpan = 2;
            head.textContent = parseFloat(findStandardDeviation(arraySet.length - 1).toFixed(10));
            row.appendChild(head);
            row = document.createElement("tr");
            tableFoot.appendChild(row);
            head = document.createElement("th");
            head.colSpan = 2;
            head.textContent = "Population Standard Deviation (σ)";
            row.appendChild(head);
            head = document.createElement("th");
            head.colSpan = 2;
            head.textContent = parseFloat(findStandardDeviation(arraySet.length).toFixed(10));
            row.appendChild(head);
        })();
    });
    const resetTable = (() => {
        while(tableHead.firstChild) {
            tableHead.removeChild(tableHead.lastChild);
        }
        while(tableBody.firstChild) {
            tableBody.removeChild(tableBody.lastChild);
        }
        while(tableFoot.firstChild) {
            tableFoot.removeChild(tableFoot.lastChild);
        }
    });
})();