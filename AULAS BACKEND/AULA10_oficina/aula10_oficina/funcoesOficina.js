function calcularorcamento(precoPeca, horas_trabalho) {
    const Valorhora = 85.00;
    const totalMaoDeObra = horas_trabalho * Valorhora
    return precoPeca + totalMaoDeObra;
}

function verificarGarantia(meses) {
    if (meses <=3) {
        return "dentro da garantia";
    }else {
        return "garantia expirada";
    }

}
function aplicarDesconto (valorTotal) {
    return valorTotal * 0,95;
}
module.exports = {
    calcularorcamento,
    verificarGarantia,
    aplicarDesconto

}





