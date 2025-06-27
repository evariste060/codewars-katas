/* function that return short word in sentence*/
function findShortWord(s){
    let words = s.split(" ");
    let wordLength = [];
    for ( let word of words){
        wordLength.push(word.length)
    }
    let shortWord = Math.min(...wordLength);
    words.filter((n => n.length === shortWord))
    return words;
}
console.log(findShortWord("i love you more"));
