const express = require('express')
const router = express.Router()

function logReq(req, res, next) {
    console.log('Executando a função Middleware para a rota usuários')
    return next()
}

router.get('/', logReq, (req, res) => {
    res.send('Listando os usuários')
})

router.get('/:id', (req, res) => {
    res.setHeader('Content-type', 'text/plain')
    res.send('Listando o usuário: ', + req.params.id)
})


module.exports = router