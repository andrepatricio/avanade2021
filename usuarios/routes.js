const router = require('express').Router()
const Sequelize = require('sequelize')
const db = require('../db')

const UserSchema = db.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    cpf: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
})

const validateUser = (req, res, next) => {
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
    let { body } = req
    for(let field in requiredFields) {
        let { required, customValidate } = requiredFields[field]
        if(!body[field] && required) {
            res.status(400).send(`O campo ${field} é obrigatorio`)
            return
        }
        if(customValidate && !customValidate.isValid(body[field])) {
            res.status(400).send(customValidate.msg)
            return
        }
    }
    next()
}

router.get('/', async (req, res) => {
    const usuarios = await UserSchema.findAll()
    res.status(200).json(usuarios)
})

router.post('/', validateUser, async (req, res) => {
    await UserSchema.create(req.body)
    res.status(201).send()
})

router.delete('/:id', async (req, res) => {
    let { id } = req.params
    await UserSchema.destroy({where: {id: id}})
    res.send()
})

router.put('/:id', async (req, res) => {
    let { nome, email } = req.body
    let { id } = req.params

    let usuario = await UserSchema.findOne({where: {id: id}})

    usuario.nome = nome
    usuario.email = email

    usuario.save()

    res.status(200).json(usuario)
})

module.exports = router