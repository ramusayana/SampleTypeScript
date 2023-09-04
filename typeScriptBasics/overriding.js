// inheritance with method OVER RIDING same method in child classbut will change body or implementation 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bank = /** @class */ (function () {
    function Bank() {
    }
    Bank.prototype.roi = function () {
        return this.rateOfInterest; // bank return rate of interest zero
    };
    return Bank;
}());
var Bankchild = /** @class */ (function (_super) {
    __extends(Bankchild, _super);
    function Bankchild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bankchild.prototype.roi = function () {
        return 10.5; // over ride from parent to 10.5 %
    };
    return Bankchild;
}(Bank));
var Bankchild1 = /** @class */ (function (_super) {
    __extends(Bankchild1, _super);
    function Bankchild1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bankchild1.prototype.roi = function () {
        return 12.5; // over ride from parent to 10.5 %
    };
    return Bankchild1;
}(Bank));
var X = new Bankchild();
console.log(X.roi());
var Y = new Bankchild1();
console.log(Y.roi());
