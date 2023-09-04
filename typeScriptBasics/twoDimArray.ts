//2 Dimensional array

var values :number[][]= [[10,20],[30,40],[60,70]]
console.log(values)
//or
var value :(string|number)[][] = [[10,'xyz'],[30,'40b'],[60,70]]

console.log(value)

//Access two dimensional array element
//row index and column index

console.log(value[0][0])
console.log(value[0][1])
console.log(value[1][0])
console.log(values[1][1])

var myarray :(string|number)[][] = [[10,'xyz'],[30,'40b'],[60,70]]
//loop to access array elements 
// console.log('Reading data from For loop')

// for(var i =0; i<myarray.length; i++){
    
//  for(var j=0; j<myarray.length[i];j++ ){
// }
//     }

    console.log('Reading data from For loop')
    var myarray :(string|number)[][] = [[10,'xyz'],[30,'40b'],[60,70]]
    for(let i in myarray){
        for(let j in myarray[i]){
            console.log(myarray[i][j])

        }
    }