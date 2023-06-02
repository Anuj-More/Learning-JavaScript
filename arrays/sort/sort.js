//there exists .sort() method to sort any kind of arrays in JS

let prices = [1,4,3,6,7,2,8,9];
let places = ["home", "work", "office", "garden", "terrace"];

prices = prices.sort().reverse();                 //to sort in ascending order
places = places.sort().reverse();       // to sort in descending order


for(let price of prices){
    console.log(price);
}
for(let place of places){
    console.log(place);
}