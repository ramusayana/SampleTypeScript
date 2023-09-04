/*functions a block of statements and code usability ; same code use many times less coding not many times easy to rebug

named function : declare and call by name
 Ananymous function : it has expression stored in variable */
//Named Function
//  function display(){
//     console.log('welcome to type script')
//  }
// to invoke or call function
//  display();
function Sum(a, b) {
    return (a + b);
    console.log('welcome to type script');
}
var total = Sum(2, 3);
console.log(total);
// Ananymous Function
// var greeting = function(){
//     console.log("welcome to tipe scrpt")
// }
// greeting()
var sum1 = function (x, y) {
    return (x + y);
};
console.log(sum1(4, 5));
// two types of parameters: optional and default parameters
//Function parameters
function greet(greeting, name) {
    return (greeting + " " + name);
}
console.log(greet('welcome', 'joj'));
// console.log(greet('welcome','ram','smith')) // compile error
// second one OPtional parameter
function greety(greeting, name) {
    return (greeting + " " + name);
}
console.log(greety('welcome', 'joj'));
console.log(greety('welcome'));
//Default parameters
function greets(name, greeting) {
    if (greeting === void 0) { greeting = 'hello'; }
    return (greeting + " " + name);
}
console.log(greets('bujji', 'welcome'));
console.log(greets('bujji'));
//Arrow Function = and > greater than
// fat arrow function
var totals = function (x, y) {
    return (x + y);
};
var report = totals(5, 8);
console.log(report);
//if the function body consist of one statement curly bracket and return keyword also optional
var totals1 = function (x, y) { return x + y; };
var report = totals1(20, 202);
console.log(report);
function add(a, b) {
    return (a + b);
}
console.log(add(100, 200));
console.log(add('welocme', 'ram'));
//func. overloading with dif. parameters and types with same name is not supported
function display(a, b) {
    console.log(a + b);
}
// example below compile error
// function display(a : number): void {
//     console.log(a+b)
// }
// REST PARAMETERS in functions
// multiple values in single parameters ; if no. of parameters known ; dont know how many parameters or args
function Greetyy(greetingmsg) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return (greetingmsg + " " + names.join(",  "));
}
console.log(Greetyy('Hello', 'John'));
console.log(Greetyy('Hello'));
console.log(Greetyy('Hello', 'bob', 'sam'));
