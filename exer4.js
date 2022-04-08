//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
//assim como a quantidade de dias pelos quais o carro foi alugado. 
//Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.


let diasAlugados = 21
let precoDiaria = 60
let kmRodadoValor = 0.15
let totalDeKm = 790

let precoTotalDiarias = (diasAlugados * precoDiaria)
let valorTotalKmRodados = (totalDeKm * kmRodadoValor)

console.log(precoTotalDiarias)
console.log(valorTotalKmRodados) 


let valorTotalGeral = (precoTotalDiarias + valorTotalKmRodados)
console.log(valorTotalGeral)
