console.log('Exibindo mensagem no console');

console.error(new Error('Exibindo mensagem de erro'));

const carros = ['FIAT', 'FORD', 'Honda']

console.table(carros);

const dados = {nome: 'Roberto', sobrenome: 'Giffone'};

console.table(dados);

console.count('processo');
console.count('processo');
console.count('processo');

console.log('Resetando o processo');
console.countReset('processo');

console.count('processo');

console.time('contador');

console.timeEnd('contador');

console.assert(true, 'Verdadeiro');

console.assert(false, 'Falso');

//console.clear();
