// Array.filter() = creates a new array with all elements
//                     that pass the test provided by a function

let students = [18,78,3,57,12,23];
let adults = students.filter(checkAge);
adults.forEach(print);

function checkAge(element){
    return element>=18;
}
function print(element){
    console.log(element);
}