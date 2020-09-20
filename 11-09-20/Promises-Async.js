const {makeSecureRandoms} = require('./exercises/exercise1')
const {
    getPlanetForFirstSpeciesInFirstMovieForPerson, 
    getPlanetForFirstSpeciesInFirstMovieForPersonAsync
} = require('./exercises/exercise2')
const {printNames} = require('./exercises/exercise3')
const {stringManipulator} = require('./exercises/exercise5')

function secureRandoms() {
    let obj = makeSecureRandoms([48,40,32,24,16,8])
    Promise.all(obj).then((obj) => {
        res = {
            "title": `${obj.length} Random Hex`,
            "randoms": obj
        }
        console.log(res);
    });    
}
secureRandoms();

async function getData() {
    let promises = makeSecureRandoms([48,40,32,24,16,8])
    let results = await Promise.all(promises)
    res = {
        "title": `${promises.length}`,
        "randoms": results
    }
    console.log(res);
}
getData();

getPlanetForFirstSpeciesInFirstMovieForPerson(1);
getPlanetForFirstSpeciesInFirstMovieForPersonAsync(1);

printNames();

stringManipulator("JavaScript is cool, even when it sucks", 1000)
.then(data => {
    console.log("From first promise: " + data.upperCased);
    console.log("From first promise: " + data.msgLength);
    return data.asJson();
})
.then(res => {
    console.log("From second promise: " + res);
})