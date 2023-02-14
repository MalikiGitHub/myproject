let display = document.getElementById("box")
let displayEd = document.getElementById("box2")
let saveEl = document.getElementById("saved")

let count = 0;
let count2 = 0;

function plus1(){
   display.textContent = count+=1
}
function plus2(){
   display.textContent = count+=2
}
function plus3(){
   display.textContent = count+=3
}
function plus11(){
   displayEd.textContent = count2+=1
}
function plus12(){
   displayEd.textContent = count2+=2
}
function plus13(){
   displayEd.textContent = count2+=3
}

function save(){
    saveEl.textContent += display.textContent + " - " + displayEd.textContent + " , ";
    
}

function btn(){
    
   display.textContent = count * 0;
   displayEd.textContent = count * 0;
   count = 0;
   count2 = 0;
    
}

