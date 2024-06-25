const fs = require("fs");
const assets = ['css','js','images','lib'];

function make(dir){
    dir.forEach((item)=>{
        fs.mkdir(`projeto/assets/${item}`,{recursive: true},(err)=>{
            if(err) throw err; 
            console.log('Diretório criado com sucesso:', item);
        });    
    });
}

make(assets);