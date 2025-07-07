let original = [1, 2, [3, 4]];

// Shallow copy using slice() or spread operator
let shallowCopy = original.slice();
// or let shallowCopy = [...original];

// Change a nested element in shallowCopy
shallowCopy[2][0] = 99;
shallowCopy[0] = 12;

console.log(original);    // Output: [1, 2, [99, 4]]
console.log(shallowCopy); // Output: [1, 2, [99, 4]]
