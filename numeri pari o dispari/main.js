/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

let sceltaParola = prompt(`scrivi la parola pari o dispari`)
let numeroInput = parseInt(prompt(`inserisci un numero compreso tra 1 e 5`));
let somma = 0
console.log(numeroInput)

//genero un numero random attraverso una funzione
function random (max){
    let numeroRandom = Math.floor(Math.random() * max) + 1
    return numeroRandom
    

}

let numRad = random(5)
console.log(numRad)

//funzione sommo numero utente e numero random

function somma(x, y){
    let somma = x + y;
    return somma;
}

let sommaFunzione = somma(numeroInput, numRad)
console.log(sommaFunzione)

function pariDispari(){
    let controllo = ``

    if(sommaFunzione % 2 === 0){
        controllo = `pari`
        return controllo
    }else{
        controllo = `dispari`
        return controllo
    }
}

if ( sceltaParola === pariDispari()){
    document.getElementById(`output`).innerHTML= `l'utente ha vinto`
}else{

}