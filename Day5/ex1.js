/*
Write a JavaScript prototype method named bespacify which extends string to allow spaces between each character of a input string
Example- "hello". bespacify ()
Output - h e l l o

*/

String.prototype.bespecify = function () {
  return this.split("").join(" ");
};

console.log("hello".bespecify());
