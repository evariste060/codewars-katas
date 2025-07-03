function multiply(a,b){
    if (a && b){
        return a * b;
    }
    else{
        if (Number.isInteger(a)){
            return a*2;
        }
        else if(Array.isArray(a)){
            return a.map((n) => n*2);

        }
    }
}
console.log(multiply(2));