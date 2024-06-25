const {writeFile} = require("fs");

function criaArquivo(nome, conteudo) {

    return new Promise((resolve, reject)=>{
        writeFile(nome, conteudo, err=>{
            if(err) return reject(err);
            resolve();
        });
    });

}

criaArquivo('promiseArquivo.txt', 'Criando arquivo utilizando promise')
    .then(()=>{
        console.log('Arquivo promiseArquivo.txt criado com sucesso');
    }).catch((err)=>{
        console.log(`Deu erro: ${err}`);
    });