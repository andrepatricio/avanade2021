const router = require('express').Router()
const UsersModel = require('./model')
const validator = require('../validator')
let requiredFields = {
    nome: {
        required: true
    },
    cpf: {
        required: true
    },
    email: {
        required: true
    }
}

router.get('/', async (req, res) => {
    const usuarios = await UsersModel.findAll()
    res.status(200).json(usuarios)
})

router.post('/', validator(requiredFields), async (req, res) => {
    await UsersModel.create(req.body)
    res.status(201).send()
})

router.delete('/:id', async (req, res) => {
    let { id } = req.params
    await UsersModel.destroy({where: {id: id}})
    res.send()
})

router.put('/:id', async (req, res) => {
    let { nome, email } = req.body
    let { id } = req.params

    let usuario = await UsersModel.findOne({where: {id: id}})

    usuario.nome = nome
    usuario.email = email

    usuario.save()

    res.status(200).json(usuario)
})

module.exports = router