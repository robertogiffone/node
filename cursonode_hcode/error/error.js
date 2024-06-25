function execute(){
    executeTo();
}

function executeTo(){
    throw new Error('Erro que vai parar a execução quando não utiliza trycatch');
}

function init(){
    try {
        execute();
    } catch (error) {
        console.log(`Tratando erro no catch! ${error.message}`);
    }
}

init();
console.log('Depois do erro');