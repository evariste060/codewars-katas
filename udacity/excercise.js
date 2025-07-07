/*function multiply(m){
    return m.map((n,index)=>{
        return (index%2===0)?n**2:n;

    })
}
console.log(multiply([1,2,3,4,5,6,7]));*/
function longestWord(sentence){
    words = sentence.split(" ");
    longest = words[0];
    //console.log(words);
    for(let i=1;i<words.length;i++){
        if(words[i].length>longest.length) longest = words[i];
    }
    return longest;
}
console.log(longestWord("i love doing my own  sheet"));