/* Inheritance is aquiring methods and variables from one class to another class
use Extends you can acquire all methods and variables
Class B extends Class A
helps in duplicate of methods or code */
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(empno, name) {
        var _this = _super.call(this, name) || this;
        _this.empno = empno;
        return _this;
    }
    Employee1.prototype.displayData = function () {
        console.log(this.empno);
        console.log(this.name);
    };
    return Employee1;
}(Person));
var empl = new Employee1(101, 'johny');
empl.displayData();
