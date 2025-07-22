const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Enter text(type "exit" to quit):');

rl.on('line', (input) => {
  if (input === 'exit') {
    console.log('Exiting');
    rl.close(); 
  } else {
    fs.appendFileSync('demo.txt', input + '\n');
    console.log("Saved");
  }
});
