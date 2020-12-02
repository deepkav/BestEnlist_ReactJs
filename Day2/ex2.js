//  Write a JavaScript function which returns random 6 digit numbers
function rand() {
    var randint = Math.floor(Math.random() * 1000000 + 99999);
  if (randomNum > 1000000) {
    randint = Math.floor(Math.random() * 1000000 + 99999);
  }
  return randint;
}
console.log(rand());

/*
Output:

undefined
console.log(rand());
438084
undefined
console.log(rand());
588202
undefined
console.log(rand());
292046
undefined
*/
