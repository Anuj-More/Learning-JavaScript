// callback = a function passed as an argument
//             to another function

// Ensures that a function is not going to
// run before a task is completed.
// Helps us develope asynchronous code.
// (When one function has to wait for another function)

sum(2, 5, display);

function sum(x, y, func){
    let res = x + y;
    func(res);
}

function display(op){
    document.getElementById("mylabel").innerHTML = op;
}