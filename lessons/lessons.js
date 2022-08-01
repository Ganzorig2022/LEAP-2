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

// let args = process.argv.slice(2) //YARGS hiiwel hurdan hiine CHALK-iig
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

///////////////FUNDAMENTALS of FUNCTIONAL PROGRAMMING========================

//===========function stamement
// function sum1(x, y) {
//   return x + y
// }
// console.log(sum1(5, 2))

// //========function expression
// const sum2 = (x, y) => {
//   return x + y
// }

// console.log(sum2(5, 2))

// //=========function arrow

// const sayMyName = (name) => 'hello ' + name

// console.log(sayMyName('Ganzo'))

// const double = (num) => num * 2

// console.log(double(2))

// const getAccess = (bool) => bool ? true : false

// console.log(getAccess(true));
// console.log(getAccess(false));

//=========FUNCTION AS A ARGUMENT
// isEven = (num => num % 2 === 0)
// result = [1,2,3,4].filter(isEven)

// ==========HIGH ORDER FUNCTION
// const a = [1, 2, 3, 4]

// const b = a.map((el) => el * 2)

// console.log(b)

// const birthYear = [1994, 1997, 2003, 1993, 2001]

// const nas = birthYear.map((on) => 202

// console.lo

// tegsh toog 2-oor, sondgoig 3-aar vrjvvleh
// const arr = [12, 23
//   if (value % 2 ===
//     return value * 2
//   } else {
//     re
// const person = [
//   { id: 1, Name: 'Dorj', age: 19 },
//   { id: 2, Name: 'Bold', age: 13 },
//   { id: 3, Name: 'Baldan', age: 15 },
//   { id: 4, Name: 'Tsetsgee', age: 20 },
//   { id: 5, Name: 'Dulmaa', age: 23 },
// ]

// const adults = person.filter((person) => person.age >= 18)
// console.log(adults)

// const arr = [3, -1, 8, 0, 2]

// const reduced = arr.reduce((acc, el) => (acc += el))

// console.log(reduced)

// const nestedArray = [1, 2, 3, 4, [5, 6, 7]]
// const flat = nestedArray.flat()

// console.log(flat)

// const arr1 = [1, 2, [3], [4, 5], 6, []]

// const flatMapArr = arr1.flatMap((num) => num)

// console.log(flatMapArr)

// const arr1 = ['Cecilie', 'Lone']
// const arr2 = ['Emil', 'Tobias', 'Linus']
// const children = arr1.concat(arr2)
// console.log(children)

// const arr1 = ['Cecilie', 'Lone']

// const findIndexArr = arr1.findIndex((el) => el === 'Cecilie')

// console.log(findIndexArr)

// const findEl = arr1.find((el) => el === 'Lone')

// console.log(findEl)

// const ages = [3, 10, 18, 20]

// const findSome = ages.some((el) => el > 21)

// console.log(findSome)

// const findEvery = ages.every((el) => el > 5)

// console.log(findEvery)

//=============================LESSON-5====================================
//===============================1. IMPURE, PURE FUNCTION ============================
// pure function is independent function
// impure is dependent from outside variables, or arguments
// const urjwer = (x, y, z) => x * y * z
// console.log(urjwer(2, 5, 4))

// const discount = (price, discount) => price * discount
// console.log(discount(1500, 0.1))

// //=========================== 2. CURRYING FUNCTION================================
// const discount1 = (price) => (discount) => price * discount

// console.log(discount1(1500)(0.1))

// const chocolates = [
//   { dark: true, flavour: 'strawberry' },
//   { dark: false, flavour: 'strawberry' },
//   { dark: false, flavour: 'almond' },
//   { dark: true, flavour: 'almond' },
//   { dark: false, flavour: 'lemon' },
// ]

// const checkProperty = (key, value) => {
//   return (choco) => {
//     return choco[key] === value
//   }
// }

// const darkChocolates = chocolates.filter(checkProperty('dark', true))
// const almondChocolates = chocolates.filter(checkProperty('flavour', 'almond'))

// console.log(darkChocolates)
// console.log(almondChocolates)

//===============================3. MUTABLE,IMMUTABLE FUNCTION============================
// MUTABLE
// const arr  = [1,2,3]
// arr.push(4)
// arr is [1,2,3,4]

//=============================LESSON-6====================================
//============================1. RECURSIVE
// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// rl.question('ta utgaa oruulna uu', (input) => {
//   let sum = 0

//   for (let i = 0; i <= input; i++) {
//     sum += i
//   }
//   console.log('summary is: ', sum)

//   rl.close()
// })
// const factorial1 = (x) => (x === 0 ? 0 : x + factorial(x - 1))

// const factorial = (x) => {
//   if (x === 0) return 1
//   return x * factorial(x - 1)
// }

// console.log(factorial(4))

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// const fibonacci = (x) => {
//   if (x < 2) return 1
//   return fibonacci(x - 1) + fibonacci(x - 2)
// }

// console.log(fibonacci(5))

// const reverse = (str) => {
//   if (str.length <= 1) return str
//   return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1))
// }

// console.log(reverse('hello'))
// const reverse = (str) => {
//   let len = str.length - 1
//   if (str.length === 1) return str
//   return str[len] + reverse(str.slice(0, len))
// }

// console.log(reverse('hello'))

// function flatten(items) {
//   const flat = []

//   items.forEach((item) => {
//     if (Array.isArray(item)) return flat.push(...flatten(item))
//     return flat.push(item)
//   })

//   return flat
// }

// console.log(flatten([1, [2, [4, 3], 5], 3]))

// function copyMachine(arr, num) {
//   if (arr.length === num) return arr
//   return [...arr, copyMachine(arr, num - 1)]
// }

// console.log(copyMachine([true, false, true], 2))

///WARM UP

// const makePlusFunction = (a) => (b) => a + b

// const plusFive = makePlusFunction(5)
// const plusTen = makePlusFunction(10)

// console.log(plusFive(plusTen(0)))

////////////WHERE IS WALDO GAME/////////
// function whereisWaldo(arr, str) {
//   let newArr = []
//   let a, b
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(str) > 0) {
//       a = i
//     } else {
//       b = i
//     }
//   }
//   return [a, b]
// }

// console.log(
//   whereisWaldo([
//     ['A', 'A', 'A'],
//     ['A', 'A', 'A'],
//     ['A', 'B', 'A'],
//   ], "B"),
// )
// console.log(
//   whereisWaldo([
//     ['O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O'],
//     ['P', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O'],
//   ], "P"),
// )

//======================LESSON-6_API=======================
// const request = require('request')
// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// rl.question('ta utgaa oruulna uu: ', (input) => {
//   request(
//     `https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?access_token=pk.eyJ1IjoibXVua2h6dWwxIiwiYSI6ImNrdWk2czI5cTFhZDIyd3Q5OXhvcWIwNTIifQ.o65kzaqtL2jRj0NY7NBRcQ`,

//     (error, response, body) => {
//       const data = JSON.parse(body)
//       const coord = data.features[0].center
//       const [longtitude, latitude] = coord
//       const cityName = data.features[0].place_name
//       console.log(`${cityName} hotiin coordinat ni: ${coord}`) // Print the HTML for the Google homepage.
//       console.log(longtitude, latitude) // Print the HTML for the Google homepage.
//       const options = {
//         method: 'GET',
//         url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
//         qs: { lon: longtitude, lat: latitude },
//         headers: {
//           'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
//           'x-rapidapi-key':
//             '063f6ebe6amsh16b13e9dec1de5ap16463bjsnd9f5cb9f6ccc',
//           useQueryString: true,
//         },
//       }
//       request(options, (error, response, body) => {
//         const weatherData = JSON.parse(body)
//         console.log(weatherData)
//         console.log(
//           `Today snow falling possibility is: ${weatherData.data[0].snow}\n Average temperature is: ${weatherData.data[0].temp}`,
//         )
//       })
//     },
//   ),
//     rl.close()
// })

//======================LESSON-7_ASYNC AWAIT=======================
// const willIGetNewPhone = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let isMomHappy = Math.round(Math.random())
//       if (isMomHappy) {
//         let phone = {
//           brand: 'iPhone',
//           color: 'black',
//         }
//         resolve(phone) // fulfilled
//       }
//       return reject('mom is not happy') // reject
//     }, 1000)
//   })

// // THEN CATCH METHOD

// const getPhoneCase = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let momHasMoney = Math.round(Math.random())
//       if (momHasMoney)
//         return resolve('za za mai ene mongiig awaad utsaa Case-ee awaarai')
//       return reject('eejid ni mongo alga oo')
//     }, 2000)
//   })
// const caseCallBack = async () => {
//   try {
//     const responseCase = await getPhoneCase()
//     console.log(responseCase)
//   } catch (error) {
//     console.log('casenii aldaa: ', error)
//   }
// }
// // ASYNC AWAIT                         //HANDLER FUNCTION
// const askMom = async (call) => {
//   try {
//     const response = await willIGetNewPhone()
//     console.log('Eej nadad ', response, 'utas awch ogloo.')
//     call()
//   } catch (error) {
//     console.log('utasnii aldaa: ', error)
//   }
// }

// console.log('asking: ', askMom(caseCallBack))

// const checkData = (data) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!isNaN(data)) return resolve('data is Nan')
//       return reject('error')
//     }, 1000)
//   })

// const dataEvaluation = async () => {
//   try {
//     const response = await checkData('b')
//     console.log(response)
//   } catch (error) {
//     console.log(error)
//   }
// }
// console.log(dataEvaluation())

////////////////MISSION//////////////
// const oddNumber = (data) =>
//   new Promise((resolve, reject) => {
//     let time = 0
//     data % 2 !== 0 ? (time = 1000) : (time = 2000)
//     setTimeout(() => {
//       if (data % 2 !== 0) {
//         resolve('data is odd number')
//       } else {
//         reject('data is even number')
//       }
//     }, time)
//   })

// const checkOdd = async () => {
//   try {
//     const response = await oddNumber(14)
//     console.log(response)
//   } catch (error) {
//     console.log(error)
//   }
// }
// console.log(checkOdd())

////////////////MISSION//////////////
const request = require('request')
const axios = require('axios')
const readline = require('readline')
const { resourceLimits } = require('worker_threads')

const getPoem = async () => {
  try {
    const response = await axios.get(
      'https://www.poemist.com/api/v1/randompoems',
    )
    const poem = response.data[0].url
    poem.data.forEach(item => {
      arr.push(axios.get)
    })
    const row = poem.data.split('\n')
    const newArr = []
    row.forEach((el) => {
      if (el.includes('Total read')) {
        newArr.push(el)
      }
      console.log(newArr)
    })
  } catch (error) {
    console.log(error)
  }
}
console.log(getPoem())
