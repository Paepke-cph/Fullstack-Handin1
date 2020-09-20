const crypto = require('crypto');

var myPromise = (size) => new Promise(function(resolve,reject) {
    crypto.randomBytes(size, function(err,buffer) {
        if(err) {
            reject(err)
        } else {
            resolve({
            "length": size,
            "random": buffer.toString('hex')
            })
        }
    })
});

function makeSecureRandoms(sizes) {
    let promises = sizes.map((size) => {
        return myPromise(size);
    })
    return promises;
}


export {
    makeSecureRandoms
}