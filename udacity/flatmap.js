let words = ["hello", "world"];

let result = words.flatMap(word => word.split(""));

console.log(result); 
// Output: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
