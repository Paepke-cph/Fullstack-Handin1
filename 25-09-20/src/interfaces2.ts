interface myFunc {
    (a:string, b:string, c:string): string[];
}

let myFunction: myFunc;
myFunction = function(a:string, b:string, c:string){
    return [a,b,c];
}

let upperCased: myFunc;
upperCased = function(a:string, b:string, c:string) {
    return[a.toUpperCase(), b.toUpperCase(), c.toUpperCase()];
}

let ​f2 ​= ​function ​logger(f1: myFunc){
    let ​[ ​a​, ​b​, ​c​] = [​"A"​, ​"B"​, ​"C"​];​
    console​.​log​(f1(​a​,​b​,​c​));
}

let other = (test:number) => {console.log(test)}

f2(myFunction);
f2(upperCased);
// f2(other);