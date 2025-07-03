function capitalizedOdd(str){
    let newString = str.split("").map(function(element,i){
        if (i%2!==0){
            element = element.toUpperCase();
        }
        return element
    })
    return newString.join("");
}
console.log(capitalizedOdd("The quick BROWN fox"));