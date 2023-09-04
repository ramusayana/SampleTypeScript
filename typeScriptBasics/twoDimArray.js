//2 Dimensional array
var values = [[10, 20], [30, 40], [60, 70]];
console.log(values);
//or
var value = [[10, 'xyz'], [30, '40b'], [60, 70]];
console.log(value);
//Access two dimensional array element
//row index and column index
console.log(value[0][0]);
console.log(value[0][1]);
console.log(value[1][0]);
console.log(values[1][1]);
var myarray = [[10, 'xyz'], [30, '40b'], [60, 70]];
//loop to access array elements 
// console.log('Reading data from For loop')
// for(var i =0; i<myarray.length; i++){
//  for(var j=0; j<myarray.length[i];j++ ){
// }
//     }
console.log('Reading data from For loop');
for (var i in myarray) {
    for (var j in myarray[i]) {
        console.log(myarray[i][j]);
    }
}
