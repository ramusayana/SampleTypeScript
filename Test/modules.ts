/*flies created in ts has global  access. Variables creatd in one ts can be accessible other files
cause executions. we have export and import concept to avoid */

export var Z : string = 'ram'

// simple function
export function myfun(): void{

    console.log("this is my func")
}

export class Myclass{

     a : number
     b : number

     constructor(a:number, b: number){

         this.a=a
         this.b =b
     }
    

     add=()=> {

        return(this.a+this.b)
     }
}


