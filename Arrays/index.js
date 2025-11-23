let array = ["apple", "mango", "orange", "banana", "gcjh","gcjh"]; // Variable Decleration + Initialization or assignment
console.log(array); // The execution of the code.

// Length of the array 
console.log(array.length);

// Index of the array 
console.log(array[1]);

// Push a new element in the array 
array.push("Pineapple");
console.log(array);

// Pop mean delete the element from the end of the array
array.pop();
console.log(array);

let index = array.indexOf("banana");
if (index !== -1){
    array.splice(index, 1)
} else (console.log("not found"))
console.log(array);