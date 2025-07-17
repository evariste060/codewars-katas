function encode(s) {
  let result =[];
  arr= s.split('');
  for(let i=0;i<Math.floor(s.length/2);i++){
    result.push( arr[i]);
    result.push(arr[s.length-(i+1)]);
  }
  if (s.length%2!==0) result.push(arr[Math.floor(s.length-1)/2]);
  return result.join('');
}
console.log(encode('codewars'));//csordaew white