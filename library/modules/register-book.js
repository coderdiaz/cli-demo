const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

module.exports = () => {
  inquirer.prompt([
    { name: 'isbn', message: 'ISBN' },
    { name: 'name', message: '¿Como se llama el libro?' },
    { name: 'author', message: 'Nombre del Autor'},
    { name: 'quantity', message: '¿Cuántos hay en existencia?' }
  ]).then(answer => { 
    fs.writeFileSync(path.join(__dirname, `../data/books/${answer.isbn}.json`), JSON.stringify(answer), { encoding: 'utf-8' });
  });
};