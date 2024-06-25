import {EventEmitter} from 'events';

class Evento extends EventEmitter {}
const meuEvento = new Evento();

//subscriber - assinante
meuEvento.on('primeiroEvento', (x,y)=>{
    console.log(`Executando o evento 'primeiroEvento': ${x} ${y}`)
});

//publisher - emissor
meuEvento.emit('primeiroEvento', 'Criando', 'primeiro evento');

meuEvento.on('encerrar', (dados)=>{
    console.log(`Assinante: ${dados}`)
});

meuEvento.emit('encerrar', 'Executando o evento denomidado encerrar');
