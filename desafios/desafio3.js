const abastecer = require('readline-sync');

const alcool = abastecer.questionFloat ("qual é o valor do alcool:");
const gasolina = abastecer.questionFloat ("qual é o valor da gasolina");

preço = alcool/gasolina

if (preço < 0.7) {
    console.log(`\nAbasteça com ALCOOL.`)
}
else {(preço > 0.7)
    console.log(`\nAbasteça com GASOLINA`)}