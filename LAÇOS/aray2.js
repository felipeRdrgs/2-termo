const entrada = require('readline-sync');

console.log("=== SESISTEMA DE CONTROLE DE QUALIDADE - PESAGEM ===");

const pesos = [];
let somatotal = 0;

const qtdpecas = entrada.questionInt("quantas pecas deseja avaliar? ");

for (let i = 0; i < qtdpecas; i++) {
    let peso = entrada.questionFloat(`digite o peso da peca ${i + 1} (kg): `);

    pesos.push(peso);
    somatotal += peso;
}


const media = somatotal / qtdpecas;

console.log("\n--- RELATORIO DA AUDITORIA ---");
console.log(`pesos registrados: [ ${pesos.join(" kg | ")} kg ]`);
console.log(`mesia de peso do lote: ${media.toFixed(2)} kg`);

if (media >= 4.8 && media <=5.2) {
    console.log("STATUS FINAL: ✅ LOTE APROVADO!");
} else {
    console.log("STATUS FINAL: ❌ LOTE REPROVADO (fora do padrão)");
}








