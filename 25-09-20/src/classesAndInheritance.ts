abstract class Shape{
    private _color:string;
    constructor(color:string) {
        this._color = color;
    }
    abstract get area():number;
    abstract get perimeter():number;

    get color(): string {return this._color;}
    set color(color:string) {this._color = color;}

    toString(): string{
        return `Shape's color: ${this.color}, Area: ${this.area}, Perimeter: ${this.perimeter}` 
    }
}

// Man kan ikke instantierer en abstrakt klasse fordi den er....... abstrakt.
// let anyAbstractShape = new Shape();

class Circle extends Shape{
    protected _radius:number;
    constructor(radius:number,color:string) {
        super(color);
        this._radius = radius;
    }
    get radius(): number {return this._radius;}
    set radius(radius:number) {this._radius = radius;}

    get area(): number {
        return (Math.PI * Math.pow(this._radius,2));
    }
    get perimeter(): number {
        return (2 * Math.PI * this._radius);
    }
}

let smallCircle = new Circle(1, "Red");
console.log(smallCircle.toString());
smallCircle.radius = 3;
console.log(smallCircle.toString())
console.log(smallCircle.radius);
smallCircle.color = "Blue";
console.log(smallCircle.toString());


class Cylinder extends Circle{
    private _height: number;
    constructor(height:number,radius:number,color:string){
        super(radius,color);
        this._height = height;
    }

    get height():number{ return this._height;}
    set height(height:number){this._height = height;}

    get area(): number {
        return (2*Math.PI*this._radius*(this._height*this._radius));
    }
    get perimeter(): number {
        throw new Error("Not Implemented");
    }
    get volume():number {
        return (Math.PI * Math.pow(this._radius,2) * this._height);
    }

    toString(): string{
        return `Cylinders's color: ${this.color}, Area: ${this.area}, Volume: ${this.volume}, Perimeter: Not implemented!`
    }
}

let cylinder = new Cylinder(2,1,"Green");
console.log(cylinder.area);
console.log(cylinder.volume);
//console.log(cylinder.perimeter);
console.log(cylinder.toString());

