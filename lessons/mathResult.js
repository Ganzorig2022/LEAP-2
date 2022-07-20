const readline = require('readline')
const math = require('./math')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Please enter your input: ', (input) => {

  //   console.log("Square value is: ", input * math.sqrt)
  //   console.log("Rounded value is: ", math.round(input))
  //   console.log("Absolute value is: ", math.abs(input))
  //   console.log("Floor value is: ", math.floor(input))
    console.log('Max value is: ', math.max(input))

  //   console.log('summary is: ', math.PI * 2 * Number(radius))

  rl.close()
})
