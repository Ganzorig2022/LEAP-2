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
const http = require('http')
var fs = require('fs')

// Hello World ugiig chrome dr hewleh
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.end('hello world')

//   })
//   .listen(8080)
// console.log('Server runnning at http://localhost:8080/')

const PORT = 8080
const index = '/index.html'
const profile = '/profile.html'

http
  .createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    if (request.url === profile) {
      response.write(fs.readFileSync('.' + profile))
    } else {
      response.write(fs.readFileSync('.' + index))
    }
    response.end()
  })
  .listen(PORT)

console.log(`Server runnning at http://localhost:${PORT}/`)
