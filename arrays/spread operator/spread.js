//spread operator = allows an array or string 
//                  to be expanded in places
//                  where 0 or more arguments
//                  are expected
//                  (unpacks the elements)

let numbers = [1,2,3,4,5,6,7,8,9];

let max = Math.max(...numbers);     //unpacked the elements in the array

console.log(max);