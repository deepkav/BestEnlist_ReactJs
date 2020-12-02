//Exercise 3
function square(v) {
  var newval = v;
  var array = [];
  while (newval > 0) {
    let d = newval % 10;
    newval = Math.floor(newval / 10);
    array.push(d ** 2);
  }
  console.log(array.reverse().join().replace(/,/g, ""));
}

var value = Number(prompt());

square(value);

/*
Output:
undefined
var value = Number(prompt());
3395
undefined
square(value);
998125
*/
