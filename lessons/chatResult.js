const readline = require('readline')
const chatBot = require('./chatBot')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('What is your name: ', (input) => {
  console.log(chatBot.hello(input))
  rl.question('Choice date or time? ', (answer) => {
    if (answer == 'Date') return console.log(chatBot.choice(answer))
    if (answer == 'Time') return console.log(chatBot.choice(answer))
    rl.close()
  })
})

