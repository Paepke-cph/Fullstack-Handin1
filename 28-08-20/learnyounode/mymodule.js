const fileSystem = require('fs');

function readdir(dir, filter, cb) {
    fileSystem.readdir(dir,(err, files) => {
        if(err) return cb(err)
        else {
            filtered = files.filter((ele) => {
                if(ele.endsWith("."+filter)) {
                    console.log(ele);
                }
            })
            cb(filtered)
        }
    })
};

module.exports = readdir