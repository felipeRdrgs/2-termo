const entrada = require("readline-sync");

let total = 0 
let preco = -1;

while (preco !==0) {
    preco = entrada.questionFloat("preco: ");

    if(preço !==0) {
        total += preco;
        console.log(`subtotal: R${total.toFixed(2)}`);
    }
}



