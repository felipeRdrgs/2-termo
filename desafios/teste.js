const readlinesync = require('readline-sync');

const name = readlinesync.question(`digite seu nome:`);
console.log(`=== SEJA BEM VINDO ${name} `)
const generoJogos = readlinesync.questionInt(`qual e o tipo de jogos que você procura jogar? \n1- acão \n2- aventura \n3- violencia \n4- suspense \n5- terror \n6- corrida \n7-esportes`)

if (generoJogos == 1)
    

















let games = [
    { titulo: "fortnite", genero: "ação", lassificação: 14},
    { titulo: "roblox", genero: "aventura", classificação: 8},
    { titulo: "free fire", genero: "ação e violencia", classificação: 14},
    { titulo: "GTA V", genero: "ação, violencia e aventura", classificação: 18},
    { titulo: "forza horizon", genero: "esportes e corrida", classificação: 10},
    { titulo: "EAFC 26", genero: "esportes", classificação: 8}
];
    
let idade = readlinesync.questionInt(`informe sua idade.`)
console.log(`=== LISTA DE JOGOS QUE VOCÊ PODE JOGAR ===`)
for (let jogo of games) {
    if (idade >= jogo.classificação) {
        console.log(jogo.titulo);
    }
}




