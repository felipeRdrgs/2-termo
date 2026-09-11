
const { questionInt } = require("readline-sync");

const entrada = require(readline-sync);

function calcularProducao() {
    const pecasPorHora = questionInt("digite a quantidade de peças produzidas pro hora: ");
    const HorasTurno = questionInt("digite a quantidade de horas do turno:");
    const totalPecas = pecasPorHora * HorasTurno;
    console.log(`o total de peças produzidas no turno é: ${totalPecas}`);
}

calcularProducao();