const { default: fetch } = require("node-fetch")
var now = require("performance-now")
const URL = 'https://swapi.dev/api/people/'

// Await
async function fetchPerson(url){
    let response = await fetch(url);
    return await response.json();
}

// Promise
function fetchPersonPromise(url) {
    return fetch(url)
}



async function printNames() {
    var start = now()
    const person1 = fetchPerson(URL+'1')
    const person2 = fetchPerson(URL+'2')
    var end = now()
    console.log("Seq!  " + start.toFixed(3)) // the number of milliseconds the current node process is running
    console.log("Seq!  " + (start-end).toFixed(3))
    var start = now()
    fetchPersonPromise(URL+'1').then(response => response.json()).then(data => console.log(data.name))
    fetchPersonPromise(URL+'2').then(response => response.json()).then(data => console.log(data.name))
    var end = now()
    console.log("Par!  " + start.toFixed(3)) // the number of milliseconds the current node process is running
    console.log("Par!  " + (start-end).toFixed(3))
}

exports.printNames = printNames