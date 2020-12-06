Array.prototype.begetduplicate = function () {
  const duplicateValues = [];
  this.forEach((value) => {
    if (this.filter((x) => x === value).length > 1) {
      duplicateValues.push(value);
    }
  });

  return Array.from(new Set(duplicateValues));
};

var sampleinput = [1, 2, 4, 5, 2, 5];
console.log(sampleinput.begetduplicate());

/*
Output:
ƒ () {
  const duplicateValues = [];
  this.forEach((value) => {
    if (this.filter((x) => x === value).length > 1) {
      duplicateValues.push(value);
    }
  });

  return Array.from(new Set(duplic…
var sampleinput = [1, 2, 4, 5, 2, 5];
undefined
console.log(sampleinput.begetduplicate());
VM231:1 (2) [2, 5]
undefined
*/
