let countEl = document.getElementById("count-el") //To get the count element
let saveEl = document.getElementById("save-el")   //To get the save element
let count = 0


//This will "increment" or add 1 number to the HTML document that has an id of "count-el"
function increment() {
    count += 1
    countEl.textContent = count
}

//This will "save" the count number and display it into the HTML document that has an id of "count-el"
function save () {
    countEl.textContent = 0
    saveEl.textContent += count + " - "
    count = 0
}

//This will "reset" all the numbers and text in the HTML documents
function reset() {
    saveEl.textContent = "Previous Counts: "
    count = 0
    countEl.textContent = 0
}