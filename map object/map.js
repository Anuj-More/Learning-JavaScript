//map = object that holds key value pair of any datatype

let store = new Map([
    ["shirt", 50],
    ["pant", 45],
    ["tie", 15],
    ["socks", 10],
]);

// let cart = 0;
// cart += store.get("shirt");  -> get method in map = retrieves the key of the inputted value
// cart += store.get("pant");
// console.log(cart);

// store.set("underwear", 20);  -> set method = adds the specified element to the map with key and value

// console.log(store.has("tie"));  -> has method = returns boolean if the given value exists in the map or not

// store.delete("underwear");

console.log(store.size);

store.forEach((value, key) => console.log(`${key}  ->  $${value}`));   //-> to display items in the store