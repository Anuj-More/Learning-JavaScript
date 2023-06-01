//2 methods of looping through an array in js

let prices = [5, 10, 11, 125, 23];

//1: Standard for loop :
for(let i = 0; i < prices.length; i++){
    console.log(prices[i]);
}


//2: "For of" statement :
for(let i of prices){
    console.log(i);
}