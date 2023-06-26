let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save () {
    countEl.textContent = 0
    saveEl.textContent += count + " - "
    count = 0
}

function reset() {
    saveEl.textContent = "Previous Counts: "
    count = 0
    countEl.textContent = 0
}