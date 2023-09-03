/* Inheritance is aquiring methods and variables from one class to another class 
use Extends you can acquire all methods and variables 
Class B extends Class A
helps in duplicate of methods or code */

class Person {

name : string 

constructor(name: string){
    this.name =name


}


}

class Employee1 extends Person {


    empno:number

    constructor(empno:number , name : string){

        super (name);
        this.empno= empno;
    }
 
    displayData(): void{

        console.log(this.empno)
        console.log(this.name)
    }

}

var empl= new Employee1(101,'johny')
empl.displayData()

// inheritance with method OVER RIDING same method in child classbut will change body or implementation 


