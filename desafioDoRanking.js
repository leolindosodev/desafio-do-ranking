const prompt = require("prompt-sync")();
let victory = 0;
let defeat = 0;
let flag = "y";
do {
    console.log(`----------RANKING----------`);
    console.log(` `);
    victory = prompt("N° de Vitórias: ");
    defeat = prompt("N° de Derrotas: ");
    console.log(` `);
    console.log("-----------Check-----------")
    console.log(` `);
    console.log(ranking(victory, defeat));
    console.log(` `);
    console.log("---------------------------");

    flag = prompt("Deseja Verificar novamente Y / N ?  ")

}while(flag === 'y') 

function ranking(victory, defeat){

    let colocacao = victory - defeat;

    if(colocacao <= 10) {
        return `O Herói tem saldo de ${victory} vitorias e esta no Nível Ferro`
     } else if ( colocacao >= 11 && colocacao <= 20) {
        return `O Herói tem saldo de ${victory} vitorias  e esta no Nível Bronze`
     } else if (colocacao >= 21 && colocacao <= 50) {
        return `O Herói tem saldo de ${victory} vitorias e esta no Nível Prata`
     } else if (colocacao >= 51 && colocacao <= 80) {
        return `O Herói tem saldo de ${victory} vitorias e esta no Nível Ouro`
     } else if (colocacao >= 81 && colocacao <= 90) {
        return `O Herói tem saldo de ${victory} vitorias e esta no Nível Diamante`
     } else if (colocacao >= 91 && colocacao <= 100) {
        return `O Herói tem saldo de ${victory} vitorias e esta no Nível Lendário`
     } else if (colocacao >= 101) {
        return `O Herói tem saldo de ${victory} vitorias e esta no Nível Imortal`
     } else {
        console.log("Algo deu Errado");
        return
     }
}

