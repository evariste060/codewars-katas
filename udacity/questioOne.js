function multiply(a,b){
    if (a && b){
        return a * b;
    }
    else{
        if (!isNaN(a)){
            return a*2;
        }
        else if(Array.isArray(a)){
            return a.map((n) => n*2);

        }
        else{
            return "invalid input";
        }
    }
}
console.log(multiply("l"));