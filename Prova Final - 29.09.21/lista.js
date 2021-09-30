// Micro Desafio - Passo 1 / Passo 2

let aluno = require("./func_construc");

let aluno1 = new aluno("Iago",3,[8,9,5]);
let aluno2 = new aluno("Fernanda",0,[8,9,9]);
let aluno3 = new aluno("Marcelo",2,[10,9,10]);
let aluno4 = new aluno("Gabriel",5,[5,4,5]);
let aluno5 = new aluno("Jorge",1,[10,10,10]);

let lista_alunos = [aluno1,aluno2,aluno3,aluno4,aluno5];
console.log(lista_alunos);

module.exports = lista_alunos;

console.log(aluno1.calcularMedia());

console.log(aluno1.quantidade_de_faltas);
aluno1.nFaltas();
console.log(aluno1.quantidade_de_faltas);


