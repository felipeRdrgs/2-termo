const readlinesync = require('readline-sync');

let filmes = [
    { titulo: "homem aranha", classificação: 14},
    { titulo: "toy story 5", classificação: 6},
    { titulo: "todo mundo em panico", classificação: 18}
];
    
let idade = readlinesync.questionInt(`informe sua idade.`)
for (let filme of filmes) {
    if (idade >= filme.classificação) {
        console.log(filme.titulo);
    }
}




