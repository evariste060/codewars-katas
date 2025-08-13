function isPangram(string){
  let obj= {}
  for(let char of string){
    if(char.toLowerCase() >='a' && char.toLowerCase() <= 'z' )  obj[char]= (obj[char]||0)+1;
  }
  console.log(Object.keys(obj))
  return Object.keys(obj).length === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."))