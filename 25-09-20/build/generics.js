"use strict";
function reverseArr(arg) {
    return arg.reverse();
}
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
console.log(reverseArr(["a", "b", "c"]));
var DataHolder = /** @class */ (function () {
    function DataHolder(data) {
        this._data = data;
    }
    Object.defineProperty(DataHolder.prototype, "data", {
        get: function () { return this._data; },
        set: function (data) { this._data = data; },
        enumerable: false,
        configurable: true
    });
    return DataHolder;
}());
var dh1 = new DataHolder(2);
console.log(dh1.data);
dh1.data = 124513;
//dh1.data = "Test";
console.log(dh1.data);
var dh2 = new DataHolder("Hej");
console.log(dh2.data);
dh2.data = "Hej med dig";
//dh2.data = 12312341;
console.log(dh2.data);
//# sourceMappingURL=generics.js.map