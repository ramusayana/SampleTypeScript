/*class consists of constructors, properties (nothing but variables like instance or global variables) and methods(block of statemetns perform action)
its a collection of methods function within a class is method and ouside is called function.
Class has variables and methods
class is blueprint and logical and object is physical entity
class name to start with capital letter
class can return data and methods also can return data

Constructor is like a method but difference is name of constructor should be name as constructor(in java class name as constructor here its constrructot key word)

Object is an instance of class ex. student is class and object is physical entity like sam, ram etc..*/
var Employee = /** @class */ (function () {
    function Employee(id, name, dept) {
        this.eid = id;
        this.ename = name;
        this.deptno = dept;
    }
    Employee.prototype.setdata = function (id, name, dept) {
        this.eid = id;
        this.ename = name;
        this.deptno = dept;
    };
    Employee.prototype.display = function () {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptno);
    };
    return Employee;
}());
//  var emp= new Employee(); //  this is how we create an object creation , obj is emp it has its own emp variables like name , age etc..
// var emp1= new Employee();
// emp.eid= 101;
// emp.ename='Ram';
// emp.deptno =501 ;
// emp.setdata(100,'Ram',504);
var emp = new Employee(100, 'Ram', 504);
emp.display();
