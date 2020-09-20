const fileSystem = require('fs')

let filePath = process.argv[2]
fileSystem.readFile(filePath, (err,buffer) => {
    if(err) throw err
    else {
        let count = 0
        for(let i = 0; i < buffer.length; i++){
            if(buffer[i] == 10)
                count++
        }
        console.log(count)
    }
})
