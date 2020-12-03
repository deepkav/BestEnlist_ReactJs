/*
Write a JavaScript program to find the sign of product of user given 3 numbers 
 
Ex- (assume getsign is your method name) 
getsign(1,2,-7) alert minus (-) sign  
getsign(1,+2,-7) alert both plus(+)&minus (-) sign 
getsign(1,2,7) alert welcome message 

*/
function getSign(inp) {
  var s1 = inp[0][0],
    s2 = inp[1][0],
    s3 = inp[2][0];

  if (    (s1 == "+" || s2 == "+" || s3 == "+") && (s1 == "-" || s2 == "-" || s3 == "-")  ) {
    return window.alert("+ -");
  }
  else if (s1 == "+" || s2 == "+" || s3 == "+") {
    return window.alert("+");
  }
  else if (s1 == "-" || s2 == "-" || s3 == "-") {
    return window.alert("-");
  }
  else {
    return window.alert("Welcome");
  }
}
var inpay = prompt().split(" ");
console.log(getSign(inpay));
