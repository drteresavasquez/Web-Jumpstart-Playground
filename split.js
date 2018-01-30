console.log("split.js");


let string = "1+2*3-20";
let splitArray = string.split('');
let lastTwo = splitArray.splice(-2, 2).join('');
splitArray.reverse().unshift(lastTwo);
let final = splitArray.join('');
console.log(final);
console.log(splitArray);