// console.log("Hello!");

// localStorage.setItem("Name", "Anuj")
// localStorage.setItem("Name", "Sonu")
// localStorage.setItem("Name", "Dipu")
// localStorage.setItem("Name", "Pappu")

// localStorage.removeItem("Name")

// let name = localStorage.getItem("Name4");
// console.log(name);


let fruits = ["mango", "banana", "orange"];

// localStorage.setItem("Fruits", JSON.stringify(fruits));
// let name = JSON.parse(localStorage.getItem("Fruits"));
// for(let fruit of fruits){
//     console.log(fruit);
// }

// let demo = localStorage.getItem("demo");
// console.log(demo)

let data = localStorage.getItem("notes");
if(data == null){
    totData = [];
}else{
    totData = JSON.parse(data);
}

let currData = "Fourth";
totData.push(currData);

localStorage.setItem("notes", JSON.stringify(totData));

// localStorage.clear();