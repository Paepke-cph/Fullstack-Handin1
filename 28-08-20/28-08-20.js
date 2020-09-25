const { count } = require("console")

// These are use all over the place.
var names = ["Lars", "Peter", "Jan", "Bo"]
var numbers = [2, 3, 67, 33]
var members = [
    {name: "Peter", age:18},
    {name: "Jan", age:35},
    {name: "Janne", age:25},
    {name: "Martin", age:22},
]
var votes = ["Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"]
console.log(`Initial Names: ${names}`)
console.log(`Initial Numbers: ${numbers}`)
console.log(`Initial Members: ${members.map(({name,age}) => {return `${name} - ${age}`}).join(" ")}`)
console.log(`Initial votes: ${votes}`)

// FILTER
//////////////////////////////////////////////////////////////////////////////////////////////////
// standalone filter function
const myFilterStandalone = (list, expression) => {
    filtered = []
    list.forEach((element) => {
        if(expression(element))
            filtered.push(element)
    })
    return filtered   
}
// filter function added to Array
Array.prototype.myFilter = function(expression) {  
    filtered = []
    for(let i = 0; i < this.length; i++) {
        if(expression(this[i]))
            filtered.push(this[i])
    }
    return filtered
}
// Basic is even callback for the list
const isNameLarsOrPeter = (word) => {
    return word === 'Lars' || word === 'Peter'
}

// Filter testing
console.log("\n----> Filter <----")
console.log(`Stand-alone filter: ${myFilterStandalone(names, isNameLarsOrPeter)}`)
console.log(`Built-in filter: ${names.myFilter(isNameLarsOrPeter)}`)

// MAP
//////////////////////////////////////////////////////////////////////////////////////////////////
// Custom map function
const myMapStandalone = (list, callback) => {
    mapped = []
    list.forEach((element) => {
        mapped.push(callback(element))
    })
    return mapped
}
// Custom map function on array
Array.prototype.myMap = function(callback){
    mapped = []
    for(let i = 0; i < this.length; i++) {
        mapped.push(callback(this[i]))
    }
    return mapped
}

// Basic double up callback for the list
const getFirstLetter = (word) => {
    return word[0]
}
console.log("\n----> Map <----")
console.log(`Standalone map: ${myMapStandalone(names, getFirstLetter)}`)
console.log(`Built-in map: ${names.myMap(getFirstLetter)}`)

// REDUCE
//////////////////////////////////////////////////////////////////////////////////////////////////
console.log("\n----> Reduce <----")
console.log(`Comma-separated list: ${names.join(',')}`)
console.log(`Space-separated list: ${names.join(' ')}`)
console.log(`Pound-separated list: ${names.join('#')}`)

const sum = (acc, curr) => acc + curr;
console.log(`Sum of numbers: ${numbers.reduce(sum)}`)

const averageAge = (acc, {_,age}, index, arr) => {
    return acc += Number(age) / arr.length
}
console.log(`Average age of members: ${members.reduce(averageAge,0)}`)

const countVotes = (acc,cur) => {
    acc[cur] ? acc[cur]++ : acc[cur] = 1
    return acc
}
console.log(`Counted Votes: ${JSON.stringify(votes.reduce(countVotes,{}))}`)

// HOISTING
//////////////////////////////////////////////////////////////////////////////////////////////////
console.log("\n----> Hoisting <----")
if(typeof(aNumber) === 'undefined')
    console.log("At this point the variable aNumber is not defined, but it has been hoisted")
if(typeof(f3) === 'undefined')
    console.log("At this point f3 is undefined, but it has been hoisted.")
f1()
function f1(){
    console.log("The function f1 has been hoisted")
    f2()
}
function f2() {
    console.log("f2 is defined below f1 but is called from within f1")
}
var f3 = function() {
    console.log("This can't be called prior to this line, because the declaration is only hoisted, we don't really know what f3 is prior to this point.")
}
var aNumber = 10
console.log(`After this line aNumber has the following value: ${aNumber}`)

// THIS
//////////////////////////////////////////////////////////////////////////////////////////////////
function City(name,country,population){
    this.name = name;
    this.country = country;
    this.population = population;

    this.printCity() {
        // Her vil this være objektet (til venstre for . notationen, hvor metoden bliver kaldt).
        console.log(this);
    }
}
var c = new City("Copenhagen", "Denmark", "5mil")

class Person {
    constructor(name, age){
        // Inden i en classes constructor, så er det, den instance af object (som vi er igang med at oprette) som this peger på.
        this.name = name;
        this.age = age;

        // For at metoden printPersonAsync vil kunne gøre brug af *this* kan vi bruge bind, vi kunne også bare have gjort brug af () => {} notationen i stedet.
        this.printPerson = this.show.bind(this);
    }

    printPerson = function() {
        console.log(this);
    }

    printPersonAsync() {
        setTimeout(this.printPerson, 2000);
    }

}


// Closures
//////////////////////////////////////////////////////////////////////////////////////////////////
var makeCounter = () => {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return{
        inc: () => {changeBy(1);},
        dec: () => {changeBy(-1);},
        value:() => {return privateCounter;},
    }
};
let counter = makeCounter();
console.log(counter.value());
counter.inc();
counter.inc();
console.log(counter.value());
counter.dec();
console.log(counter.value());

var makePerson = () => {
    var privateAge = 45;
    var privateName = "Peter";

    return{
        setAge: (val) => {privateAge = val;},
        setName: (val) => {privateName = val;},
        getInfo: () => {return `${privateName}, ${privateAge}`}
    };
};
let person = makePerson();
console.log(person.getInfo());
person.setAge(20);
person.setName("Niels");
console.log(person.getInfo());

class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    };

    setAge(age) {
        this.age = age;
    };

    setName(name) {
        this.name = name;
    };

    getInfo() {
        return(`${this.name}, ${this.age}`)
    };
}

let p = new Person(300, "Kenney");
console.log(p.getInfo());
p.setAge(200);
p.setName("Bob");
console.log(p.getInfo());
