function homens(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].sexo == "M") {
            soma = soma + 1;
        }
    }
    return soma;
}

module.exports = homens;