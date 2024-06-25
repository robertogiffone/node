const express = require('express');
const multer = require('multer');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html');
});
console.log(__dirname+'uploads');
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads');
    },
    filename: (req, file, cb)=>{
        cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('arquivo'),function (req, res, next) {
    const file = req.file;
    if(!file){
        const err = new Error('Por favor selecione um arquivo');
        return next(err);
    }
    res.send(file);
    //res.end('Upload realizado com sucesso')/
});

app.listen(3000, '127.0.0.1', ()=>{
    console.log('Servidor rodando');
});
