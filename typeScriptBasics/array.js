// //array is a special type of data type stor multiple values and its collection of values
// //single and double dimensional array
// // var fruits :string[]= ['Mango', 'Gauva']
// var fruits1 :Array<string> 
// fruits1 =['apple','banana','orrange']
// console.log(fruits1)
// //multi type array like string and number
// var values :(string | number)[]= ['apple','banana','guava', 100 ,10010]  // this is a single type array
// //or
// console.log(values)
// var values :Array<string | number> = ['applaae','banaaana','guava', 200 ,20010]
// console.log(values)
//Access Array elements
var fruits4 = ['applaae', 'banaaana', 'guava','Mango'];
console.log(fruits4[2]);
console.log(fruits4[7]);
// use the loop statnts 
for (var i = 0; i < fruits4.length; i++) {
    console.log(fruits4[i]);
}
for (var j in fruits4)
    console.log(fruits4[j]);
