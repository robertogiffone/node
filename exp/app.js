const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin');
const usuarioRoutes = require('./routes/usuario');
const cookieParser = require('cookie-parser');

app.use(express.static('public'));

app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  console.log('Executando Middleware a nível de aplicação');
  return next();	
});

app.get('/setcookie', function (req, res) {
  res.cookie('usuario', 'Roberto Giffone', {maxAge: 900000, httpOnly: true});
  res.send('Cookie foi gravado com sucesso');
})

app.get('/getcookie', function (req, res) {
  let usuario = req.cookies['usuario'];
  if(usuario){
    res.send(usuario);
  }
})

app.get('/', function (req, res) {
  res.send('Página inicial');
})

app.use('/admin', adminRoutes);
app.use('/usuario', usuarioRoutes);

app.get('*', function (req, res, next) {
  setImmediate(()=>{
    next( new Error('Temos um problema') );
  });
})

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({mensagem: err.message});
});

app.listen(3000);