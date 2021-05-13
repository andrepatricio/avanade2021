enum Cidade {
    FLN = 'Florianopolis',
    SP = 'Sao Paulo',
    TNG = 'Tangará de Serra',
    GRU = 'Guarulhos'
}

interface Models<T> {
    id: T
    toString(): string
}

class Produto implements Models<string> {
    id: string
}

class Pessoa implements Models<number>{
    id: number
    nome: string;
    idade: number;
    cidade: Cidade;

    constructor(nome: string, idade: number, cidade?: Cidade) {
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
    }

    toString(): string {
        return `${this.nome} tem ${this.idade} e mora ${this.cidade}`
    }
}

export {
    Pessoa,
    Cidade
}