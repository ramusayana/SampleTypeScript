
// Primitive Data types or built in data types 
// number, void , null, undefined, boolean and any

var first:number = 20.5
var second:number = 0o377 
var third:number = 0b11101

console.log(first)
console.log(second)
console.log(third)

//string data type
var empName: string = 'johnny'
var empDeptName : string = 'IT'

console.log(empName)
console.log(empDeptName)

var statement : string =  empName + "works in IBM" + empDeptName
console.log(statement)

//boolean

var b: boolean = true 
console.log(b)

//void type
function hello():void
{
 
    console.log("welcome")

}

//null represents value is undefined

var num1: number = 100
num1 = 100
console.log(num1)

//undefined used un initialised variables

var num2 :number =250
// num2 = 250
console.log(num2)

//Any data type

var val : any = 'hi baby'
val = 300
console.log(val)
val = false
console.log(val)


function myfnc(x: any , y : any){

 console.log(x+y)

}

myfnc(2,3)
myfnc ('history', 'welcome')
