function sum(x) {

    return new Promise((resolve, reject)=>{
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('Valor inválido');
        }
        setTimeout(()=>{
            resolve(x + 5000);
        }, 3000);
    });

}

async function main(){
    try {
        const result = await sum(230);
        console.log(`Resultado com async/await: ${result}`);
    } catch (error) {
        console.log(`Ocorreu um erro: ${error}`);   
    }
}

main();