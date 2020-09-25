let http = require('http');
import fetch from 'node-fetch';

function testFetch(url:string) {
    fetch(url).then((res) => {res.json()}).then((data) => {console.log(data)});
}