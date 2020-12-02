//Exercise 2 Write a JavaScript program which iterates the integers from 1 to 100.
//But for multiples of three print "bestenlist" instead of the number and for the multiples of five print "react".
//For numbers which are multiples of both three and five print "bestenlistreact". 
for (let i = 1; i < 101; i++) {
  let output = "";
  if (i % 3 ==0 && i%5 == 0){
    output = "bestenlistreact";
  }
  else if (i % 3 == 0) {
    output = "bestenlist";
  }
  else if (i % 5 == 0) {
    output = "react";
  }
  else {
    output = i;
  }
  console.log(output);
}

/*
1
VM795:15 2
VM795:15 bestenlist
VM795:15 4
VM795:15 react
VM795:15 bestenlist
VM795:15 7
VM795:15 8
VM795:15 bestenlist
VM795:15 react
VM795:15 11
VM795:15 bestenlist
VM795:15 13
VM795:15 14
VM795:15 bestenlistreact
VM795:15 16
VM795:15 17
VM795:15 bestenlist
VM795:15 19
VM795:15 react
VM795:15 bestenlist
VM795:15 22
VM795:15 23
VM795:15 bestenlist
VM795:15 react
VM795:15 26
VM795:15 bestenlist
VM795:15 28
VM795:15 29
VM795:15 bestenlistreact
VM795:15 31
VM795:15 32
VM795:15 bestenlist
VM795:15 34
VM795:15 react
VM795:15 bestenlist
VM795:15 37
VM795:15 38
VM795:15 bestenlist
VM795:15 react
VM795:15 41
VM795:15 bestenlist
VM795:15 43
VM795:15 44
VM795:15 bestenlistreact
VM795:15 46
VM795:15 47
VM795:15 bestenlist
VM795:15 49
VM795:15 react
VM795:15 bestenlist
VM795:15 52
VM795:15 53
VM795:15 bestenlist
VM795:15 react
VM795:15 56
VM795:15 bestenlist
VM795:15 58
VM795:15 59
VM795:15 bestenlistreact
VM795:15 61
VM795:15 62
VM795:15 bestenlist
VM795:15 64
VM795:15 react
VM795:15 bestenlist
VM795:15 67
VM795:15 68
VM795:15 bestenlist
VM795:15 react
VM795:15 71
VM795:15 bestenlist
VM795:15 73
VM795:15 74
VM795:15 bestenlistreact
VM795:15 76
VM795:15 77
VM795:15 bestenlist
VM795:15 79
VM795:15 react
VM795:15 bestenlist
VM795:15 82
VM795:15 83
VM795:15 bestenlist
VM795:15 react
VM795:15 86
VM795:15 bestenlist
VM795:15 88
VM795:15 89
VM795:15 bestenlistreact
VM795:15 91
VM795:15 92
VM795:15 bestenlist
VM795:15 94
VM795:15 react
VM795:15 bestenlist
VM795:15 97
VM795:15 98
VM795:15 bestenlist
VM795:15 react
undefined
*/
