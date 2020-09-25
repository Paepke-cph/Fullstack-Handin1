"use strict";
var myFunction;
myFunction = function (a, b, c) {
    return [a, b, c];
};
var upperCased;
upperCased = function (a, b, c) {
    return [a.toUpperCase(), b.toUpperCase(), c.toUpperCase()];
};
var f2 = function logger(f1) {
    var _a = ["A", "B", "C"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
var other = function (test) { console.log(test); };
f2(myFunction);
f2(upperCased);
// f2(other);
//# sourceMappingURL=interfaces2.js.map