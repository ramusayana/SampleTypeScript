interface I1 {

    a :number
    b: number

    sum():number 
}

interface I2 extends I1 {

    R : number
    S : number
    sum():number 
}

class C1 implements I2 {
    a :number
    b: number
    R : number
    S : number

    sum(): number{

        return(this.a +this.b)
    }

    sub():number {
        return (this.R- this.S)
    }
}


var C2 = new C1() // C2 is creating a new object for class C1

C2.a = 100
C2.b = 300
C2.R = 600
C2.S = 500

console.log(C2.sum())
console.log(C2.sub())