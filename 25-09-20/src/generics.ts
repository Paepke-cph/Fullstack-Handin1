function ​reverseArr<T>​(arg: any[]): any[] {
    return arg.reverse();
}
console​.​log​(​reverseArr​<​string​>([​"a"​,​"b"​,​"c"​]));
console​.​log​(​reverseArr​<​number​>([​1​,​2​,​3​]));
console​.​log​(​reverseArr​<​boolean​>([​true​,​true​,​false​]));
console​.​log​(​reverseArr​<​number​>([​"a"​,​"b"​,​"c"​]));

class DataHolder<T>{
    private _data: T;
    constructor(data:T){
        this._data = data;
    }

    get data(): T{ return this._data;}
    set data(data: T) {this._data = data;}
}

let dh1 = new DataHolder<number>(2);
console.log(dh1.data);
dh1.data = 124513;
//dh1.data = "Test";
console.log(dh1.data);

let dh2 = new DataHolder<string>("Hej");
console.log(dh2.data);
dh2.data = "Hej med dig";
//dh2.data = 12312341;
console.log(dh2.data);