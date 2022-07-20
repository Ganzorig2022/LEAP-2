const readline = require('readline')
const math = require('./math')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('radius', (radius) => {
  console.log('summary is: ', math.PI * 2 * Number(radius))

  rl.close()
})
