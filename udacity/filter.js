//program to filter prime numbers in arrays
let numbers = [1,5,4,7];

let odd = numbers.filter(function(number){
    let sum=1;
    if (number <2) return false;
    for (let i=1;i<=number/2;i++){
        if (number%i===0){
           sum += 1;
        } 
    }
    let result = (sum === 1)? true:false;
    return result;
});
console.log(odd);