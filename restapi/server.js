require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();


//mongoose.connect("mongodb://localhost/subscribers", {useNewUrlParser: true, useUnifiedTopology: true});
/*
mongoose.connect("mongodb://localhost:27017/subscribers");
const db = mongoose.connection;
db.on('error', (err)=> console.log(err));
db.once('open', ()=> console.log('Conectou no banco'));
*/

//mongoose.connect('mongodb://127.0.0.1:27017/subscribers').
//  catch(error => handleError(error));

// Or:
/*
try {
    mongoose.connect(process.env.DATABASE_STRING);
    mongoose.connection.on('connected', () => console.log('connected'));
    mongoose.connection.once('open', () => console.log('open'));
    mongoose.connection.on('error', (err) => console.log(err));
    //mongoose.connection.on('disconnected', () => console.log('disconnected'));
    //mongoose.connection.on('reconnected', () => console.log('reconnected'));
    //mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
    //mongoose.connection.on('close', () => console.log('close'));
} catch (error) {
    handleError(error);
}
*/

mongoose.connect(process.env.DATABASE_STRING);
const db = mongoose.connection;
db.on('error', (err)=> console.log(err));
db.once('open', ()=> console.log('Conectou no banco'));

app.use(express.json());

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);


app.listen(3000, ()=>{
    console.log('Servidor rodando');
});