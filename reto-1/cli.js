// Ejercicio #1

// Realizar un programa con readline que me permita obtener la operación a realizar y 
// los valores (dos valores).
// Una vez obtenida la información, ejecutar las funciones que se encuentran en el 
// módulo de math.js

// Duración: 15m.
const { sumar, restar } = require('./math');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function action(operation, a, b) {
  switch(operation) {
    case 'sumar':
      console.log(sumar(a, b));
      break;
    case 'restar':
      console.log(restar(a, b));
      break;
    default:
      console.log(`La operación no existe`);
      break;
  }
}

function question (query) {
  return new Promise((resolve, reject) => {
    try {
      readline.question(query, (answer) => resolve(answer));
    } catch (e) {
      reject(e);
    }
  });
}

// Segunda solución, quitando Callback hell con Promises
async function execute() {
  const operacion = await question('¿Qué debo hacer? (sumar, restar, multiplicar, dividir): ');
  const a = await question('¿Cuál es el primer valor?');
  const b = await question('¿Cuál es el segundo valor?');

  action(operacion, parseInt(a), parseInt(b));
  readline.close();
}

execute();