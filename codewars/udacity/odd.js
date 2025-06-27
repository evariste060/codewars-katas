var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
];
for (let i=0;i<numbers.length;i++){
    for (let j=0;j<numbers[i].length;j++){
        numbers[i][j]=(numbers[i][j]%2===0)?"even":"odd"
    }
}
console.log(numbers);