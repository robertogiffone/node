const fs = require("fs");

fs.readFile(__dirname+'/texto.txt',(err, data)=>{
    if(err) throw err;
    
    console.log(data.toString());
});

const texto = fs.readFileSync(__dirname+'/texto.txt');
console.log(`Texto: ${texto}`);