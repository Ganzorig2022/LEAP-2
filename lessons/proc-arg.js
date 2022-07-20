const argumentArr = process.argv
// console.log(arg.pop())
const secondEl = argumentArr[2]
const a = argumentArr[argumentArr.length - 1]
console.log(a)

if (secondEl === '-t') {
  console.log(argumentArr.slice(-1))
} else {
  console.log('Hello Arguments')
}
                                                                                                                 