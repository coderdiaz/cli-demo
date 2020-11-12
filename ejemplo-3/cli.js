const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('¿Quién eres?', (name) => {
  console.log(`Yo soy ${name}`);

  readline.close();
});
