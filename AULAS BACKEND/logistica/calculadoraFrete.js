const entrada = require('readline-Sync')

function calcularbase(Km) {
    return Km * 2.10
    
}

function calcularSeguro(valorCarga) {
    const taxaSeguro = 0.01; 
    return taxaSeguro * valorCarga
}

function verificarPrazo(distanciaKm) {
    if (distanciaKm <100) {
        return "1 dia util";
    }else {
        return "3 a 5 dias úteis";
    }
}
module.exports = {
    calcularbase,
    calcularSeguro,
    verificarPrazo

}


