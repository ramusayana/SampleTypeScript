// inheritance with method OVER RIDING same method in child classbut will change body or implementation 

class Bank {

rateOfInterest : number;

roi() : number{
    return this.rateOfInterest // bank return rate of interest zero
}

}

class Bankchild extends  Bank{

    roi() : number{
        return 10.5; // over ride from parent to 10.5 %
    }


}

class Bankchild1 extends Bank {
    roi() : number{
        return 12.5; // over ride from parent to 10.5 %
    }

}


var X = new Bankchild();
console.log(X.roi())

var Y = new Bankchild1()
console.log(Y.roi())