import { Pessoa, Cidade } from './pessoa'

let ivo = new Pessoa<number>(2, 'Ivo', 18, Cidade.GRU)
let andre = new Pessoa<string>('hy18h2323h1','Andre', 30, Cidade.FLN)


console.log(ivo)
console.log(andre)