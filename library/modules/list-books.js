const fs = require('fs');
const path = require('path');

module.exports = () => {
  fs.readdir(path.join(__dirname, '../data/books'), { encoding: 'utf-8' }, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      fs.readFile(path.join(__dirname, `../data/books/${file}`), { encoding: 'utf-8' }, (err, data) => {
        if (err) throw err;
        const infodelarchivo = JSON.parse(data);
        console.log(`\n\nNombre: ${infodelarchivo.name} \n Autor: ${infodelarchivo.author} \n Cantidad: ${infodelarchivo.quantity}`);
      })
    })
  });
}