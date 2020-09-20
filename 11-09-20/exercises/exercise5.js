function stringManipulator(input, delay) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            data = {
                upperCased: input.toUpperCase(),
                msgLength: input.length,
                asJson: function() {
                    return new Promise(function(resolve, reject){
                        setTimeout(function(){
                            resolve(JSON.stringify({words: input.split(" ")}))
                        },delay)
                    })
                }
            }
            resolve(data)            
        }, delay)
    })
}

exports.stringManipulator = stringManipulator