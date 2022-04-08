//2 - Calcule o tempo de uma viagem de carro. 
//Pergunte a distância a percorrer e a velocidade média esperada para a viagem.

const distancia = 68
const rod1 = 120
const rod2 = 110
const rod3 = 60
const mediaVelocidade = (rod1 + rod2 + rod3) / 3

console.log(mediaVelocidade)

const tempoDaViagem = (((distancia / mediaVelocidade) / 60) * 100)

console.log(tempoDaViagem)
