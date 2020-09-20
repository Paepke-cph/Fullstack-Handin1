const crypto = require('crypto');


// const ttree = (sizes) => {
//     crypto.randomBytes(sizes[0], function(err,buffer) {
//         varhex = buffer.toString('hex');
//         crypto.randomBytes(sizes[1], function(err,buffer){
//             var hex2 = buffer.toString('hex');
//             crypto.randomBytes(sizes[2], function(err,buffer){
//                 var hex2 = buffer.toString('hex')
//             });
//         });
//     });
// };

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
module.exports.makeSecureRandoms = makeSecureRandoms;