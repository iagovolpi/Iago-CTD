let tempoPipoca = 10
let tempoMacarrao = 8
let tempoCarne = 15
let tempoFeijao = 12
let tempoBrigadeiro = 8


function menu(alimento, tempo) {
    if (alimento == "pipoca") {
        if ((tempo >= tempoPipoca) && (tempo < tempoPipoca * 2)) {
            console.log("Prato pronto, bom apetite!!!");
        } else if ((tempo >= tempoPipoca) * 2 && (tempo < tempoPipoca * 3)) {
            console.log("A comida queimou");
        } else if (tempo >= tempoPipoca * 3) {
            console.log("kabumm");
        } else {
            console.log("Tempo Insuficiente");
        } 
    } else if (alimento == "macarrao") {
        if ((tempo >= tempoMacarrao) && (tempo < tempoMacarrao * 2)) {
            console.log("Prato pronto, bom apetite!!!");
        } else if ((tempo >= tempoMacarrao) * 2 && (tempo < tempoMacarrao * 3)) {
            console.log("A comida queimou");
        } else if (tempo >= tempoMacarrao * 3) {
            console.log("kabumm");
        } else {
            console.log("Tempo Insuficiente");
        } 
    } else if (alimento == "carne") {
        if ((tempo >= tempoCarne) && (tempo < tempoCarne * 2)) {
            console.log("Prato pronto, bom apetite!!!");
        } else if ((tempo >= tempoCarne) * 2 && (tempo < tempoCarne * 3)) {
            console.log("A comida queimou");
        } else if (tempo >= tempoCarne * 3) {
            console.log("kabumm");
        } else {
            console.log("Tempo Insuficiente");
        } 
    } else if (alimento == "feijao") {
        if ((tempo >= tempoFeijao) && (tempo < tempoFeijao * 2)) {
            console.log("Prato pronto, bom apetite!!!");
        } else if ((tempo >= tempoFeijao) * 2 && (tempo < tempoFeijao * 3)) {
            console.log("A comida queimou");
        } else if (tempo >= tempoFeijao * 3) {
            console.log("kabumm");
        } else {
            console.log("Tempo Insuficiente")
        } 
    } else if (alimento == "brigadeiro") {
        if ((tempo >= tempoBrigadeiro) && (tempo < tempoBrigadeiro * 2)) {
            console.log("Prato pronto, bom apetite!!!");
        } else if ((tempo >= tempoBrigadeiro) * 2 && (tempo < tempoBrigadeiro * 3)) {
            console.log("A comida queimou");
        } else if (tempo >= tempoBrigadeiro * 3) {
            console.log("kabumm");
        } else {
            console.log("Tempo Insuficiente")
        } 
} else {
    console.log("Prato Inexistente");
}
}

menu("milho", 7);

