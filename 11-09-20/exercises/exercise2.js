const fetch = require('node-fetch')
const baseURL = 'https://swapi.dev/api/'

// NOTE: That with the new .dev api the lists in the response ARE sorted and therefor the output will not match the
// given solution.....
function getPlanetForFirstSpeciesInFirstMovieForPerson(id) {
    fetch(`${baseURL}people/${id}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data.name)
        let firstFilmURL = data.films[0]
        fetch(firstFilmURL)
        .then(response => {
            if(!response.ok) {
                throw Error(response.statusText)
            } else {
                return response.json()
            }
        })
        .then(data => {
            console.log(data.title)
            let firstSpeciesURL = data.species[0]
            fetch(firstSpeciesURL)
            .then(response => {
                if(!response.ok) {
                    throw Error(response.statusText)
                } else {
                    return response.json()
                }
            })
            .then(data => {
                console.log(data.name)
                let homeWorldURL = data.homeworld
                fetch(homeWorldURL)
                .then(response => {
                    if(!response.ok) {
                        throw Error(response.statusText)
                    } else {
                        return response.json()
                    }
                })
                .then(data => {
                    console.log(data.name)
                })
            })
        })
    })
    .catch(err => {
        console.log(err)
    })
}

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

exports.getPlanetForFirstSpeciesInFirstMovieForPerson = getPlanetForFirstSpeciesInFirstMovieForPerson
exports.getPlanetForFirstSpeciesInFirstMovieForPersonAsync = getPlanetForFirstSpeciesInFirstMovieForPersonAsync