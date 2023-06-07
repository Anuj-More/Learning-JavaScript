// Promise =   object that encapsulates the result of an asynchronous operation
//             lets asynchronous methods return value like synchronous methods
//             "I promise to return something in the future"

//              the state is "pending" then : "fulfilled" or "rejected"
//              the RESULT  is what can be returned
//              2 parts : "producing" & "consuming"

// const promise = new Promise((resolve, reject) => {
    
//     let fileLoaded = false;

//     if(fileLoaded){
//         resolve("File is loaded");
//     }
//     else{
//         reject("File is NOT loaded");
//     }
// });

// promise.then(value => console.log(value))
//        .catch(error => console.log(error)); 


const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(4000).then(() => console.log("Thanks for waiting!"));