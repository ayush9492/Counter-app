
let saveEl= document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(saveEl)
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
// 1. create a save() function which logs out the count when it is called 
function save(){
    let countStr=count+" - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count=0
    console.log(count)
}