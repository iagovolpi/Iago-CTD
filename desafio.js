function loopDePares(a){
    for (let i=0;i<=100;i++){
        if ((i+a)%2 == 0){
            console.log("O resultado da soma do "+a+" + "+i+" é igual a "+(i+a)+" e é par");        
        }
        else
        console.log(i);
    }
}
loopDePares(3);


function loopDeImpares(a,b){
    for (let i=0;i<=100;i++){
        if ((i+a)%2 == 0){
            console.log(b);
        }
        else 
        console.log(i);
    }
}
loopDeImpares(5,"a soma é ímpar");


function soma(a){
    soma = 0
    for (let i=0; i<=a; i++ ){
        soma = soma + i
    }
    console.log(soma);
    
}
soma(3);


function newArray(a){
    let array =[]
    for (let i=0;i<=a; i++){
        array.push(i);
    }
    console.log(array);
}
newArray(6);


function split(word){
    let palavra = [];
    for (i=0; i<word.length;i++){
        palavra.push(word[i]);
    }
    console.log(palavra);
}
split("macarrão");


function moverZeros(array){
    for (i=0; i<array.length;i++){
        if (array[i] == 0){
            array.splice(i,1);
            array.push(0);
        }
    }
    console.log(array);
}
moverZeros([1,2,0,6,0,4,"alo",7,8]);


function arrayHandler(a,b){
    for (i=0; i<a.length;i++){
        console.log("Eu sou "+a[i]+" e eu sou "+b[i]);
    }
}
arrayHandler([1,2,3], ["o","l","á"]);


function arrayObjects(a) {
    let arr = [];
    for(let i = 1; i <= a; i++) {
        arr.push({valor: i});
    }
    console.log(arr);    
}
arrayObjects(7);

function arrayObjectsTwo(num, palavra) {
    let arr = [];
    for(let i = 1; i <= num; i++) {
        arr.push({[palavra]: i})
    }
    console.log(arr);       
}
arrayObjectsTwo(10, 'tagname');