const Sequelize = require('sequelize')
const db = require('../db')
const UsuarioSchema = require('../usuarios/model')
const ProdutoSchema = require('../produtos/model')

const VendasSchema = db.define('vendas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuarioId: {
        type: Sequelize.INTEGER,
        references: {
            model: UsuarioSchema,
            key: 'id'
        }
    },
    produtoId: {
        type: Sequelize.INTEGER,
        references: {
            model: ProdutoSchema,
            key: 'id'        
        }
    },
    quantidade: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
})

UsuarioSchema.belongsToMany(ProdutoSchema, { through: VendasSchema })
ProdutoSchema.belongsToMany(UsuarioSchema, { through: VendasSchema })

module.exports = VendasSchema