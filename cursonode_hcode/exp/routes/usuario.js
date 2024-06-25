const express = require('express');
const router = express.Router();

function logReq(req, res, next) {
	console.log('Executando Middleware para a rota usuários');
	return next();
}

router.get('/', logReq, function (req, res) {
    res.send('Listando todos os usuários');
})

router.get('/:id', function (req, res) {
    res.send(`Listando o usuário do id ${req.params.id}`);
})

module.exports = router;