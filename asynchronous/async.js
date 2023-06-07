// synchronous code = In an ordered sequence
//                     Step by step linear instructions
//                     (start now, finish now)

// asynchronous code = Out of sequence
//                     (Start now finish sometime later)


// console.log("START");
// console.log("This step is synchronous");
// console.log("END");

console.log("START");
setTimeout(() => console.log("This step is asynchronous"), 4000);
console.log("END");