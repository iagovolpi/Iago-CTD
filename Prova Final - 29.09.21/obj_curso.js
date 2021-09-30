// Micro Desafio - Passo 3 / Passo 4 / Passo 5 / Passo 6
let lista_estudantes = require("./lista");
let aluno = require("./func_construc");

// console.log(lista);

let curso = {
    nome_do_curso: "Programação Imperativa",
    nota_de_aprov: 7,
    faltas_max: 2,
    lista_estudantes,
    lista_nova: function (aluno) {
        this.lista_estudantes.push(aluno);
        return this.lista_estudantes;
    },
    aprovado: function (aluno) {
        let media = aluno.calcularMedia();
        if (media >= this.nota_de_aprov && aluno.quantidade_de_faltas < this.faltas_max) {
            return true;
        }
        else if (media >= 1.1 * this.nota_de_aprov && aluno.quantidade_de_faltas == this.faltas_max) {
            return true;
        }
        else {
            return false;
        }
    },
    aprovados: function () {
        let resultados = []
        for (let i = 0; i < this.lista_estudantes.length; i++) {
            let media = this.lista_estudantes[i].calcularMedia();
            if (media >= this.nota_de_aprov && this.lista_estudantes[i].quantidade_de_faltas < this.faltas_max) {
                resultados.push(true);
            }
            else if (media >= 1.1 * this.nota_de_aprov && this.lista_estudantes[i].quantidade_de_faltas == this.faltas_max) {
                resultados.push(true);
            }
            else {
                resultados.push(false);
            }
        }
        return resultados;
    }
}


console.log(curso.aprovado(new aluno("Ana", 5, [7, 10, 10])));
console.log(curso.aprovado(lista_estudantes[4]));
console.log(curso.aprovados());