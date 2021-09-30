// Micro Desafio - Passo 1

function aluno(nome, faltas, notas) {
    this.nome = nome;
    this.quantidade_de_faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function () {
        let soma_notas = 0;
        for (let i=0; i<notas.length;i++){
            soma_notas = soma_notas + this.notas[i];
        }
        return soma_notas/notas.length;
    }
    this.nFaltas = function(){
        this.quantidade_de_faltas++;
    }
}

module.exports = aluno;
