const entrada = require('readline-sync');

// buscando as ferramentas no arquivo funcoesoficina.js
// o './' significa "nesta mesma pasta"
const oficina = require('./funcoesOficina');

console.log("=== SISTEMA DE GESTÃO DE OFICINA ===");

const peca = entrada.questionFloat("preco da peca: R$ ");
const horas = entrada.questionInt("horas de sevico: ");
const temposuso = entrada.questionInt("meses desde o ultimo conserto: ");

//usando o nome 'oficina' (que damos no require) seguindo do ponto .
const totalBruto = oficina.calcularorcamento(peca, horas);
const statusGarantia = oficina.verificarGarantia(temposuso);
const totalComDesconto = oficina.aplicarDesconto(totalBruto);

console.log("\n--- RELATORIO FINAL --- ");
console.log(` Orçamento sem desconto: R$ ${totalBruto.toFixed(2)}`);
console.log(` Orçamento com desconto (5%): R$ ${totalComDesconto.toFixed(2)}`);
console.log(`status de veiculo: R$ ${statusGarantia}`);

