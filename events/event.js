const EventEmitter = require('events');

class Evento extends EventEmitter {}
const meuEvento = new Evento();

meuEvento.on('primeiroEvento', (x,y)=>{
    console.log(`Executando o evento 'primeiroEvento': ${x} ${y}`)
});

meuEvento.emit('primeiroEvento', 'Criando', 'primeiro evento');