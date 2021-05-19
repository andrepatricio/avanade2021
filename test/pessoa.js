class Pessoa {
    constructor(nome, idade, carros) {
        this.nome = nome
        this.idade = idade
        this.carros = carros
    }

    toString() {
        return `${this.nome}, ${this.idade}`
    }

    comprarCarro() {
        throw new Error('Programador não')
    }
}

module.exports = Pessoa