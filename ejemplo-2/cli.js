const operacion = process.argv[2];
const primerValor = parseInt(process.argv[3]);
const segundoValor = parseInt(process.argv[4]);

switch (operacion) {
  case 'sumar':
    console.log(`La suma de ${primerValor} más ${segundoValor} es igual a ${primerValor + segundoValor}`)
    break;
  case 'restar':
    console.log(`La resta de ${primerValor} menos ${segundoValor} es igual a ${primerValor - segundoValor}`)
    break;
  case 'multiplicar':
    console.log(`La mutiplicación de ${primerValor} por ${segundoValor} es igual a ${primerValor * segundoValor}`)
    break;
  case 'dividir':
    console.log(`La división de ${primerValor} entre ${segundoValor} es igual a ${primerValor / segundoValor}`)
    break;
  default:
    console.log(`Esta operación no existe`);
    break;
}