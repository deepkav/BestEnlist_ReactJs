//Exercise 2
function secondlargest (arr){
  var newarr = Array.from(new Set(arr.sort()));
  return newarr[newarr.length - 2];
}

var arr = prompt().split(" ");

arr = arr.map(Number, arr);

console.log(secondlargest(arr));
 
 /*
 Output:
undefined
var arr = prompt().split(" ");

undefined
arr = arr.map(Number, arr);
(8) [82, 45, 76, 45, 21, 75, 62, 13]
console.log(secondlargest(arr));
76
*/
