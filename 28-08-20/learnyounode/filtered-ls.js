const fileSystem = require('fs')

const filePath = process.argv[2]
const fileExtension = process.argv[3]

fileSystem.readdir(filePath,(err, files) => {
    files.forEach((element) => {
        if(element.endsWith("."+fileExtension))
            console.log(element)
    })
})
