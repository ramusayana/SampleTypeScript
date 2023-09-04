//tuple is a new data type includes values of different data types
var employee = [1, 'Ram'];
// or
var employee1 = [1, 'ram'];
var empID = 101;
var empName = 'tommy';
var empSal = 4000;
// Instead of writing 3 variables we can write
// var employees = [101,'tommy', 4000]
var employees = [101, 'tommy', 4000];
console.log(employees);
// Accessing data in tuple individually
console.log(employees[0]);
console.log(employees[2]);
// Add elements in tuple
var employee1 = [101, 'john'];
console.log("original array +", employee1);
employee1.push(200, 'scotty');
console.log(employee1);
//remove the elements from tuple
var employee2 = [100, 'baby', 400];
console.log("original array +", employee2);
employee2.pop();
console.log("remove from array +", employee2);
//update tuple
var student = [101, 'sam'];
student[1] = 'ramy';
console.log(student);
var student1;
student1 = [[101, 'sam'], [102, 'ram'], [103, 'lam']];
console.log(student1[0]);
console.log(student1[1]);
console.log(student1[2]);
