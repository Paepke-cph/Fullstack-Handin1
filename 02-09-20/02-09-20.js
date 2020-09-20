// This File will test all of the exercises for 02-09-20
const osInfo = require('../Modules/OSInfo')
console.log(osInfo.GetOSInfo())

const DOS_Detector = require('./dosDetector')
const detector = new DOS_Detector(3000);

detector.on('DosDetected', ({url, deltaTime}) => {
    console.log(`DosDetected!! -> url: ${url} - Time Between: ${deltaTime}`)
})
detector.addUrl("https://")
setTimeout(() => {detector.addUrl("https://")},1000)