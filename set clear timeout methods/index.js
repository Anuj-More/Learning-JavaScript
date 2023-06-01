// settimeout() = Invokes a function after given number of miliseconds
//                Asynchronous function (deosn't pause execution)

let item = "Cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstmessage, 5000, item, price);
let timer2 = setTimeout(secondmessage, 9000);

function firstmessage(item, price){
    alert(`Buy this ${item} for $${price}!`);
}

function secondmessage(){
    alert(`CLick Here!`);
}

document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    alert(`Thanks for buying <3`);
}