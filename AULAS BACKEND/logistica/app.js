const entrada = require('readline-sync')

const calculadora = require('./calculadoraFrete')

const produto = entrada.question("Qual é o nome do produto: ")
const distanciaEntrega = entrada.questionFloat("Informe a distância de entrega em Km: ")
const valorCarga = entrada.questionFloat("Digite o valor total da carga: ")

const calcularbase = calculadora.calcularbase(distanciaEntrega)
const calcularSeguro = calculadora.calcularSeguro(valorCarga)
const verificarPrazo = calculadora.verificarPrazo(distanciaEntrega)

console.log(`O valor do frete é: R$ ${calcularbase.toFixed(2)}`)
console.log(`O valor do seguro é: R$ ${calcularSeguro.toFixed(2)}`)
console.log(`O prazo de entrega é: ${verificarPrazo}`)