"use strict";
exports.__esModule = true;
exports.Cidade = exports.Pessoa = void 0;
var Cidade;
(function (Cidade) {
    Cidade["FLN"] = "Florianopolis";
    Cidade["SP"] = "Sao Paulo";
    Cidade["TNG"] = "Tangar\u00E1 de Serra";
    Cidade["GRU"] = "Guarulhos";
})(Cidade || (Cidade = {}));
exports.Cidade = Cidade;
var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(id, nome, idade, cidade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }
    Pessoa.prototype.toString = function () {
        return this.nome + " tem " + this.idade + " e mora " + this.cidade;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
