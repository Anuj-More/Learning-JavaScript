// Array.forEach() = executes a provided callback function 
//                     once for each array element

let students = ["name1", "name2", "name3"];
students.forEach(capitalise);
students.forEach(print);

function capitalise(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}