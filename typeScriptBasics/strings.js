var mystring = 'welcome to Type script';
var mystring1 = "welcome";
console.log(mystring1.charAt(0)); // w
console.log(mystring1.charAt(2)); //l
//concat method to join 2 or more strings
var str1 = 'welome';
var str2 = 'type';
console.log(str1.concat(str2));
// replace seq. of char
var str = 'type script programming';
console.log(str.replace('i', 'x'));
console.log(str.replace('type', 'javascript'));
//split 
var fruits = 'apple banana mango';
console.log(fruits.split(' '));
console.log(fruits.split(' ', 2));
//substring
str = "welcome"; // extract first 3 or last 3 char
console.log(str.substring(0, 3));
console.log(str.substring(2, 5));
//toUpperCase() 
console.log(str.toLowerCase());
console.log(str.toUpperCase());
//trim spaces left or right 
str = '  welcome';
console.log(str.trim());
console.log(str.trimRight());
// console.log(str.trimLeft())
