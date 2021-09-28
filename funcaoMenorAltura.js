function menor(array){

    let alturas = [];

    for (let i=0; i<array.length; i++){

        alturas.push(array[i].altura);
        
    }

    return Math.min.apply(Math,alturas);
}

module.exports=menor;