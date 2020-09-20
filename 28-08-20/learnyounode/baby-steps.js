let strings = process.argv.filter((test) => {return !isNaN(test)})
let numbers = strings.map((str) => {return Number(str)})
let sum = numbers.reduce((acc,current) => acc += current)
console.log(sum)