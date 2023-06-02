//2D array = n array of arrays

let fruits = ["banana", "apple", "orange"];
let vegetables = ["carrot", "onion", "potatoes"];
let meat = ["egg", "chicken", "fish"];

let grocerylist = [fruits, vegetables, meat];

for(let list of grocerylist){
    for(let item of list){
        console.log(item);
    }
}