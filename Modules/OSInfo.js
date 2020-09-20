const os = require('os')

function GetOSInfo() {
    let info = {
        platform:os.platform(),
        osType: os.type(),
        freeMemory: os.freemem(),
        totalMemory: os.totalmem(),
        eol: os.EOL
    }
    return info
}

exports.GetOSInfo = GetOSInfo