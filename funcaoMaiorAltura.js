function maior(array){

    let alturas = [];

    for (let i=0; i<array.length; i++){

        alturas.push(array[i].altura);
        
    }

    return Math.max.apply(Math,alturas);
}

module.exports=maior;