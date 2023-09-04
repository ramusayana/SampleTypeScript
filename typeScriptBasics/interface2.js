var C1 = /** @class */ (function () {
    function C1() {
    }
    C1.prototype.sum = function () {
        return (this.a + this.b);
    };
    C1.prototype.sub = function () {
        return (this.R - this.S);
    };
    return C1;
}());
var C2 = new C1(); // C2 is creating a new object for class C1
C2.a = 100;
C2.b = 300;
C2.R = 600;
C2.S = 500;
console.log(C2.sum());
console.log(C2.sub());
