"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modules_1 = require("./modules");
console.log(modules_1.Z);
var modules_2 = require("./modules");
(0, modules_2.myfun)();
var modules_3 = require("./modules");
var access = new modules_3.Myclass(10, 20);
console.log(access.add());
