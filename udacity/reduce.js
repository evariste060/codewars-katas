let numbers = [1, 2, 3, 4, 5];

let total = numbers.reduce(function(acc, curr) {
  return acc + curr;
}, 0);

console.log(total); // Output: 15

