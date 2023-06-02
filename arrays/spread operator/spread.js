//spread operator = allows an array or string 
//                  to be expanded in places
//                  where 0 or more arguments
//                  are expected
//                  (unpacks the elements)

let numbers = [1,2,3,4,5,6,7,8,9];

let max = Math.max(...numbers);     //unpacked the elements in the array

console.log(max);
console.log(...numbers);


//another usecase:

let class1 = ["name1", "name2", "name3"];
let class2 = ["name4", "name5", "name6"];

class1.push(...class2);     //added elements of class1 to class2
console.log(...class1);     //one by one after unpacking