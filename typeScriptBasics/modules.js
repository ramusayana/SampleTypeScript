"use strict";
/*flies created in ts has global  access. Variables creatd in one ts can be accessible other files
cause executions. we have export and import concept to avoid */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Myclass = exports.myfun = exports.Z = void 0;
exports.Z = 'ram';
// simple function
function myfun() {
    console.log("this is my func");
}
exports.myfun = myfun;
var Myclass = /** @class */ (function () {
    function Myclass(a, b) {
        var _this = this;
        this.add = function () {
            return (_this.a + _this.b);
        };
        this.a = a;
        this.b = b;
    }
    return Myclass;
}());
exports.Myclass = Myclass;
