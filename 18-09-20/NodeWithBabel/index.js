import 'core-js/proposals/promise-any'
import {fetch} from 'node-fetch'
import {makeSecureRandoms} from './last-week-exercises'

// USE OF last weeks exercises using the ES6 import as well as export (inside last-week-exercise.js)
function secureRandoms() {
    let obj = makeSecureRandoms([48,40,32,24,16,8])
    Promise.all(obj).then((obj) => {
        let res = {
            "title": `${obj.length} Random Hex`,
            "randoms": obj
        }
        console.log(res);
    });    
}
// Returns a single random string, due to the fact that any takes the first promies (which has resolved and returns it)
function secureRandomsUsingAny() {
    let obj = makeSecureRandoms([48,40,32,24,16,8])
    Promise.any(obj).then((obj) => {
        let res = {
            "title": `A Single Promise`,
            "randoms": obj
        }
        console.log(res);
    });    
}
secureRandoms();
secureRandomsUsingAny();

// USE OF Fetch using ES6 import
async function getPlanetForFirstSpeciesInFirstMovieForPersonAsync(id) {
    try {
        let responseData = await fetch(`${baseURL}people/${id}`)
        let personData = await responseData.json();
        console.log(personData.name)
    
        responseData = await fetch(personData.films[0])
        let filmData = await responseData.json()
        console.log(filmData.title)
    
        responseData = await fetch(filmData.species[0])
        let speciesData = await responseData.json()
        console.log(speciesData.name)
    
        responseData = await fetch(speciesData.homeworld)
        let homeWorldData = await responseData.json()
        console.log(homeWorldData.name)
    } catch (e) {
        console.log(e)
    }
}