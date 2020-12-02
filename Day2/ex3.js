// Write a JavaScript function which display type and version of browser using alert
var alerts = () => {
  alert(navigator.appName); // To see the Browser Application Name

  alert(navigator.product); // To see the Browser Application Engine

  alert(navigator.appVersion); // To see the Browser Application Version
}
/*
undefined
alerts();
undefined
Output:
Netscape

Gecko

5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36
*/
