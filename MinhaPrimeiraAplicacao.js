let modulo1 = require("./funcaoConstrutora");

let pessoa1 = new modulo1(1.90, "M");
let pessoa2 = new modulo1(1.80, "F");
let pessoa3 = new modulo1(1.20, "F");
let pessoa4 = new modulo1(1.70, "M");
let pessoa5 = new modulo1(1.60, "F");
let pessoa6 = new modulo1(1.65, "M");
let pessoa7 = new modulo1(1.95, "M");
let pessoa8 = new modulo1(2.00, "F");
let pessoa9 = new modulo1(1.80, "M");
let pessoa10 = new modulo1(1.82, "F");
let pessoa11 = new modulo1(1.63, "F");
let pessoa12 = new modulo1(1.69, "M");
let pessoa13 = new modulo1(1.70, "M");
let pessoa14 = new modulo1(1.55, "M");
let pessoa15 = new modulo1(1.50, "F");

lista = [pessoa1,pessoa2,pessoa3,pessoa4,pessoa5,pessoa6,pessoa7,pessoa8,pessoa9,pessoa10,pessoa11,pessoa12,pessoa13,pessoa14,pessoa15];


let modulo2 = require("./funcaoMenorAltura")
console.log(`A menor altura é: ${modulo2(lista)}`);


let modulo3 = require("./funcaoMaiorAltura")
console.log(`A maior altura é: ${modulo3(lista)}`);


let mediaModulo = require("./funcaoMedia")
console.log(`A média das alturas das mulheres é: ${mediaModulo(lista)}`);


let homensModulo = require("./funcaoQuantidadeHomens")
console.log(`A quandidade de homens na lista é: ${homensModulo(lista)}`);

