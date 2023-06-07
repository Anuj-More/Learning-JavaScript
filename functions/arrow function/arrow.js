// arrow function = copact alternative to a regular function
//        =>
//                  remove `function` and add `=>` after parameters

// const percent = (x, y) => {
//     return (x/y *100);    
// }

// console.log(`${percent(20, 40)}%`);

let grades = [10,20,40,53,21,78,41];

grades.sort((x,y) => y-x);
grades.forEach((element) => console.log(element));