function media(array){
    let alturas = [];
    let soma = 0;

    for (let i=0; i < array.length; i++){
        if (array[i].sexo == "F") {
            alturas.push(array[i].altura);
        }
    }

    for (let j=0; j < alturas.length; j++){
        soma = soma + alturas[j];
    }
    
    return soma/alturas.length;
}

module.exports=media;