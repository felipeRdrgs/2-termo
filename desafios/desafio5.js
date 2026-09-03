const entrada = require('readline-sync');

const renda = entrada.questionInt("qual é sua renda mensal?");
const nome = entrada.keyInYNStrict("seu nome está sujo ou limpo?");

if (renda > 2000 && nome == true) {
    console.log(`\nemprestimo APROVADO!`)
}
else {(renda < 2000 && nome == false)
    console.log(`\nemprestimo NEGADO!`)}