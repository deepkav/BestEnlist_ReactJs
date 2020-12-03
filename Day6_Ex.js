Array.prototype.befindobject = function (propertyName) {
  const propertyValue = [];
  this.map(function (object) {
    propertyValue.push(object[propertyName]);
  });
  return propertyValue;
};
ƒ (propertyName) {
  const propertyValue = [];
  this.map(function (object) {
    propertyValue.push(object[propertyName]);
  });
  return propertyValue;
}
var sampleinput = [
  { name: "John", age: 26 },
  { name: "siva", age: 27 },
];
undefined
console.log(sampleinput.befindobject("name"));
VM77:1 (2) ["John", "siva"]0: "John"1: "siva"length: 2__proto__: Array(0)
undefined
