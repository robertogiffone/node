const {EventEmitter} = require('events');
const emitter = new EventEmitter();

const validaObjeto = (a) => {
    if(typeof a != 'object'){
        emitter.emit('error', new Error('Tipo informado inválido'));
    }else{
        console.log('Objeto válido');
    }
}

emitter.addListener('error', (err)=>{
    console.log(`Evento: ${err.message}`);
});

let dados = {nome:'Roberto', sobrenome:'Giffone'};

validaObjeto(dados);