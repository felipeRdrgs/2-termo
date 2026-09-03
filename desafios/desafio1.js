eadline-sync');const votaçao = require('r

const nome = votaçao.question("insira seu nome completo:");
const nascimento = votaçao.questionInt("informe o ano que você nasceu:");

const ano = 2026

idade = ano - nascimento
if (idade >= 18) {
    console.log(`\nParabéns ${nome}, você pode votar!`);
}
else {(nascimento <16) 
    console.log(`\nVocê tem ${idade},anos, então você não pode votar.`);
}