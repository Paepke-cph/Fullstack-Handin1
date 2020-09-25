"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(color) {
        this._color = color;
    }
    Object.defineProperty(Shape.prototype, "color", {
        get: function () { return this._color; },
        set: function (color) { this._color = color; },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.toString = function () {
        return "Shape's color: " + this.color + ", Area: " + this.area + ", Perimeter: " + this.perimeter;
    };
    return Shape;
}());
// Man kan ikke instantierer en abstrakt klasse fordi den er....... abstrakt.
// let anyAbstractShape = new Shape();
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius, color) {
        var _this = _super.call(this, color) || this;
        _this._radius = radius;
        return _this;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () { return this._radius; },
        set: function (radius) { this._radius = radius; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "area", {
        get: function () {
            return (Math.PI * Math.pow(this._radius, 2));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "perimeter", {
        get: function () {
            return (2 * Math.PI * this._radius);
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}(Shape));
var smallCircle = new Circle(1, "Red");
console.log(smallCircle.toString());
smallCircle.radius = 3;
console.log(smallCircle.toString());
console.log(smallCircle.radius);
smallCircle.color = "Blue";
console.log(smallCircle.toString());
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(height, radius, color) {
        var _this = _super.call(this, radius, color) || this;
        _this._height = height;
        return _this;
    }
    Object.defineProperty(Cylinder.prototype, "height", {
        get: function () { return this._height; },
        set: function (height) { this._height = height; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cylinder.prototype, "area", {
        get: function () {
            return (2 * Math.PI * this._radius * (this._height * this._radius));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cylinder.prototype, "perimeter", {
        get: function () {
            throw new Error("Not Implemented");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cylinder.prototype, "volume", {
        get: function () {
            return (Math.PI * Math.pow(this._radius, 2) * this._height);
        },
        enumerable: false,
        configurable: true
    });
    Cylinder.prototype.toString = function () {
        return "Cylinders's color: " + this.color + ", Area: " + this.area + ", Volume: " + this.volume + ", Perimeter: Not implemented!";
    };
    return Cylinder;
}(Circle));
var cylinder = new Cylinder(2, 1, "Green");
console.log(cylinder.area);
console.log(cylinder.volume);
//console.log(cylinder.perimeter);
console.log(cylinder.toString());
//# sourceMappingURL=classesAndInheritance.js.map