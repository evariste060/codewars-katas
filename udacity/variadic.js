/*function addMe(...number){
return number.reduce((acc,curr) => acc+curr,0);
}
console.log(addMe(1,2,3,4,4,5,34));*/
function add(...number){
    return number.reduce(function(sum,element){
        return sum + element;
    },0);
}
console.log(add(1,2,3,4,4,5));