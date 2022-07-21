// ===============================lesson-1========================

// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// rl.question('ta utgaa oruulna uu', (input) => {
//   let split = input.split(' ')

//   let sumResult = split.reduce((a, b) => +a + +b)
//   console.log('summary is: ', sumResult)

//   rl.close()
// })

// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// // uppercase string
// rl.question('ta utgaa oruulna uu: ', (input) => {
//   let toUpperCase = input.toUpperCase()
//   console.log(toUpperCase)

//   rl.close()
// })

// // reverse string
// rl.question('ta utgaa oruulna uu: ', (input) => {
//   let reverse = input.split("").reverse().join("")
//   console.log(reverse)

//   rl.close()
// })

// ===============================lesson-2========================
// const fs = require('fs')

// //1. File uusgeh
// fs.writeFileSync('./note.txt', 'you guys can do it!')

// //2. File dr text nemeh
// fs.appendFileSync('./note.txt', '\nHi Ganzo')

// //3. File-aa unshix
// const read = fs.readFileSync('./note.txt', 'utf8')
// console.log(read)

// ===============================HTTP request========================
// const http = require('http')
// var fs = require('fs')

// Hello World ugiig chrome dr hewleh
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.end('hello world')

//   })
//   .listen(8080)
// console.log('Server runnning at http://localhost:8080/')

// const PORT = 8080
// const index = '/index.html'
// const profile = '/profile.html'

// http
//   .createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/html' })
//     if (request.url === profile) {
//       response.write(fs.readFileSync('.' + profile))
//     } else {
//       response.write(fs.readFileSync('.' + index))
//     }
//     response.end()
//   })
//   .listen(PORT)

// console.log(`Server runnning at http://localhost:${PORT}/`)

// ===============================lesson-3========================
////////////////////////////////NPM MODULE////////////////////////

//node - v
//node -help
//node argv.js -t "hi args"
//"hiA args"

// const argumentArr = process.argv
// // console.log(arg.pop())
// const secondEl = argumentArr[2]
// const a = argumentArr[argumentArr.length - 1]
// console.log(a)

// if (secondEl === '-t') {
//   console.log(argumentArr.slice(-1))
// } else {
//   console.log('Hello Arguments')
// }

////////////////////////////////CHALK MODULE////////////////////////
// const chalk = require('chalk')

// let bgColor = '',
//   color = '',
//   text = 'hellll'

// let args = process.argv.slice(2)
// let str = args.join('')

// if (str.includes('-bg')) {
//   let tmp = str.split('-bg')[1].split('-')[0]
//   bgColor = 'bg' + tmp[0].toUpperCase() + tmp.slice(1).toLowerCase()
// }
// if (str.includes('-c')) {
//   color = str.split('-c')[1].split('-')[0]
// }
// if (str.includes('-t')) {
//   text = str.split('-t')[1].split('-')[0]
// }
// console.log(text, color, bgColor)
// Shar medee-cblack-bgMagenta black-bgMagenta bgMagenta
// Shar medee black bgMagenta
// console.log(chalk[color][bgColor](text));

///////////////////////////////////ODD EVEN NUMBER/////////////////
// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })
// let odd = 0,
//   even = 0

// rl.question('ta utgaa oruulna uu', (input) => {
//   let split = input.split(' ')
//   even = split
//     .map(Number)
//     .filter((num) => num % 2 === 0)
//     .reduce((num1, num2) => num1 * num2)

//   odd = split
//     .map(Number)
//     .filter((num) => num % 2 === 1)
//     .reduce((num1, num2) => num1 * num2)
//   console.log('hariu is: ', even, odd)

//   rl.close()
// })

///////////////FUNDAMENTALS of FUNCTIONAL PROGRAMMING

//function stamement
function sum1(x, y) {
  return x + y
}
console.log(sum1(5, 2))

//function expression
const sum2 = (x, y) => {
  return x + y
}

console.log(sum2(5, 2))

//function arrow

const sayMyName = (name) => 'hello ' + name

console.log(sayMyName('Ganzo'))

const double = (num) => num * 2

console.log(double(2))

const getAccess = (bool) => bool ? true : false

console.log(getAccess(true));
console.log(getAccess(false));