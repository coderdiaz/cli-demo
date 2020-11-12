const inquirer = require('inquirer');
const registerBook = require('./modules/register-book');
const listBooks = require('./modules/list-books');

function execute() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: '¿Qué quieres hacer?',
      choices: ['Registrar un libro', 'Listar libros'],
    }
  ]).then(answer => {
    switch(answer.option) {
      case 'Registrar un libro':
        registerBook();
        break;
      case 'Listar libros':
        listBooks();
        break;
      default:
        console.log('Esta operación no es válida');
        break;
    }
  })
}

execute();