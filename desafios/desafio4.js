const nataçao = require('readline-sync');

const idade = nataçao.questionInt("informe sua idade");
 
if (idade >=5 && idade < 10) {
    console.log(`acesso liberado! categoria INFANTIL.`)

}
else if (idade >=11 && idade < 17) {
    console.log(`acesso liberado! categoria JUVENIL.`)
}
else if (idade >=18 && idade < 60) {
    console.log(`acesso liberado! categoria ADULTO.`)
}
else 
    (console.log`acesso liberado! categoria SENIOR.`)


