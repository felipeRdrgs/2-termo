const desconto = require('readline-sync');

const valor_conta = desconto.questionInt ("informe quanto ficou o valor da sua conta:");

if (valor_conta >= 100) {
    cupom = valor_conta * 0.9;
    console.log(`\ndesconto de 10% aplicado. Total a pagar: ${valor_conta},`)
}
else {(valor_conta <100)
    console.log(`\ncupom de desconto não aplicado. Valor total a pagar: ${valor_conta}`);
}

