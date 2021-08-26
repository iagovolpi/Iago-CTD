
let t1 = 10
let t2 = 8
let t3 = 15
let t4 = 12
let t5 = 8

function micro(alimento,tempo){
    if ((alimento == "pipoca" && tempo >= t1 && tempo < t1*2) ||
    (alimento == "macarrao" && tempo >= t2 && tempo < t2*2) ||
    (alimento == "carne" && tempo >= t3 && tempo < t3*2) ||
    (alimento == "feijao" && tempo >= t4 && tempo < t4*2) ||
    (alimento == "brigadeiro" && tempo >= t5 && tempo < t5*2)){
        console.log("Prato pronto, bom apetite!!!");
    }
    else if ((alimento == "pipoca" && tempo >= t1*2 && tempo < t1*3) ||
    (alimento == "macarrao" && tempo >= t2*2 && tempo < t2*3) ||
    (alimento == "carne" && tempo >= t3*2 && tempo < t3*3) ||
    (alimento == "feijao" && tempo >= t4*2 && tempo < t4*3) ||
    (alimento == "brigadeiro" && tempo >= t5*2 && tempo < t5*3)){
        console.log("A comida queimou");
    }
    else if ((alimento == "pipoca" && tempo >= t1*3) ||
    (alimento == "macarrao" && tempo >= t2*3) ||
    (alimento == "carne" && tempo >= t3*3) ||
    (alimento == "feijao" && tempo >= t4*3) ||
    (alimento == "brigadeiro" && tempo >= t5*3)){
        console.log("Kabumm");
    }
    else if ((alimento == "pipoca" && tempo <= t1) ||
    (alimento == "macarrao" && tempo <= t2) ||
    (alimento == "carne" && tempo <= t3) ||
    (alimento == "feijao" && tempo <= t4) ||
    (alimento == "brigadeiro" && tempo <= t5)){
        console.log("Tempo insuficiente");
    }
    else {
        console.log("Prato inexistente");
    }
}
    

micro("macarrao",50)