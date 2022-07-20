function hello(input) {
  if (input == 'Ganzorig') return `Hello ${input}. My name is NestBot`
}
function choice(answer) {
  let today = new Date()
  if (answer == 'Date')
    return (
      today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    )
  if (answer == 'Time') return `${today.getHours()}:${today.getMinutes()}`
}

exports.hello = hello
exports.choice = choice
