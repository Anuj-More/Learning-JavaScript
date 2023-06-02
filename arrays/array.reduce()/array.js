// Array.reduce() = reduces an array to a single value

let prices = [5,10,50,30,50,25,35];
let total = prices.reduce(checkOut);

console.log(`Your total is: $${total}`);

function checkOut(total, element){
    return total + element;
}