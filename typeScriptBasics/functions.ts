/*functions a block of statements and code usability ; same code use many times less coding not many times easy to rebug

named function : declare and call by name
 Ananymous function : it has expression stored in variable */


 //Named Function

//  function display(){

//     console.log('welcome to type script')
//  }

 // to invoke or call function

//  display();

 function Sum(a :number, b :number): number{
      return(a+b)
    console.log('welcome to type script')
 }
var total =Sum(2,3);
console.log(total)


// Ananymous Function


// var greeting = function(){

//     console.log("welcome to tipe scrpt")
// }

// greeting()

var sum1 =function(x:number,y:number) :number
{
return(x+y)
}

console.log(sum1(4,5))

// two types of parameters: optional and default parameters

//Function parameters

function greet(greeting : string , name : string): string
{
   return( greeting +" "+name)

}

console.log(greet('welcome', 'joj'))
// console.log(greet('welcome','ram','smith')) // compile error


// second one OPtional parameter

function greety(greeting : string , name ?: string): string
{
   return( greeting +" "+ name)

}

console.log(greety('welcome', 'joj'))
console.log(greety('welcome'))

//Default parameters
function greets(name : string , greeting : string = 'hello'): string
{
   return( greeting +" "+ name)

}

console.log(greets('bujji', 'welcome'))
console.log(greets('bujji'))


//Arrow Function = and > greater than
// fat arrow function

var totals = (x:number, y :number): number => 
{
    return (x+y)

}
var report =totals(5,8)
console.log(report)


//if the function body consist of one statement curly bracket and return keyword also optional

var totals1 = (x:number, y :number): number => x+y
var report =totals1(20,202)
console.log(report)

//Function over loading multiple funcs with the same name differnet parameters and return type

function add(a :number , b : number): number 
function add(a :string , b : string): string

function add(a:any,b :any): any{
return (a+b)

}

console.log(add(100,200))
console.log(add('welocme','ram'))

//func. overloading with dif. parameters and types with same name is not supported

function display(a : string, b :string): void {
    console.log(a+b)
}
// example below compile error

// function display(a : number): void {
//     console.log(a+b)
// }

// REST PARAMETERS in functions

// multiple values in single parameters ; if no. of parameters known ; dont know how many parameters or args

function Greetyy(greetingmsg : string,... names :string[]) {
    return(greetingmsg +" "+names.join(",  "))
}

console.log(Greetyy('Hello','John'))
console.log(Greetyy('Hello'))
console.log(Greetyy('Hello','bob','sam'))




