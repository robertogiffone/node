const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('GET');
})

router.get('/:id', function (req, res) {
    res.send(req.params.id);
})

router.post('/', function (req, res) {
    res.send(req.body.login);
})

//Normalmente para alterar parte dos dados
router.patch('/', function (req, res) {
    res.send('PATCH');
})

//Normalmente para alterar todos os dados
router.put('/', function (req, res) {
    res.send('PUT');
})

//Para deletar
router.delete('/', function (req, res) {
    res.send('DELETE');
})

module.exports = router;