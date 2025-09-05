//Obtendo dados de total de aula, faltas e a primeira e segunda nota//

let TotalAulaSementre = parseInt(prompt("Informa o total de aulas do semestre:"));
let TotalFalta = parseInt(prompt("Informe o total de falta do aluno:"));
let Nota1 = parseFloat(prompt("Informe a primeira nota:"));
let Nota2 = parseFloat(prompt("Informa a segunda nota"));

//Calculando o percentual de presença//
let percentualPresencaAluno = ((totalFalta/totalAulaSementre)*100).toFixed(2);

if (percentualPresencaAluno < 75) {
console.log("O aluno foi reprovado por falta");
}
    if (percentualPresencaAluno > 25) {

    }

console.log(TotalAulaSementre);
console.log(TotalFalta);
console.log(percentualPresencaAluno);

//Obtendo dados das duas provas e sua media//
let Prova1 = parseInt(prompt("Informe a nota da 1° prova:"));
let Prova2 = parseInt(prompt("Informe a nota da 2° prova:"));

// Calculando a media das duas provas//
let mediaProvas = ((Prova1 + Prova2) / 2).toFixed(2);

if (mediaProvas >= 7) {
console.log("O aluno foi aprovado!")
}

    else if (mediaProvas >= 5 && mediaProvas < 7) {
    console.log("O aluno foi reprovado!");
}
    else {
    console.log("O aluno foi reprovado");

}

let notaRecuperacao = Number(prompt("Digite a nota da recuperação:"));

let mediaFinal = ((mediaProvas + notaRecuperacao) / 2).toFixed(2);

    if (mediaFinal >= 5) {
        console.log("O aluno finalmente está aprovado!")
    }

    else {
        console.log("O aluno foi reprovado na recuperação!")
    }
