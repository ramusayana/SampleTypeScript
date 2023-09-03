/* interface contains variables and methods like class also same syntax of class where as in class we have implemented methods interface has unimplemented methods we write only definition of methods name and argument no implentation
2. we use class key word and interface keyword
3. when to use : in Dev point of view you know requiremnt and design then use classes if you dont know how to develop or design initial stage we use interface , it only variables and un implemented methods and later once you know you can implentnt by someother class 
4.Type script doesnt convert ts in to JS it uses as a type or 'duck typing'
5. Interface can have functiosns, proerties and method declarations
6. interface can extend parent interface to child interface*/

interface IEmployee {

    empname: string
    empId : number
    empsal: number

    dispData:() => void
}

var employe : IEmployee =
{
   empname : 'john',
   empId : 202 ,
   empsal : 40000,

   dispData(): void {
       console.log(this.empname +" "+this.empID+" "+this.empsal)
   }
}

console.log(employe.empname)
console.log(employe.empId)
console.log(employe.empsal)

employe.dispData()