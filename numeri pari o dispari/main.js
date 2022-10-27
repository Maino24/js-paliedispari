/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

let numeroInput = parseInt(prompt(`inserisci un numero compreso tra 1 e 5`));
let somma = 0
console.log(numeroInput)

//genero un numero random attraverso una funzione
function random (){
    numeroRandom = Math.floor(Math.random() * 5) + 1
    somma = somma + numeroRandom
    console.log(numeroRandom)

}

random()

//sommo numero utente e numero random
sommaTot = numeroInput + somma
console.log(sommaTot)


function pariDispari(){

    if(sommaTot % 2 !== 0){
        console.log(`è dispari`)
    }else{
        console.log(`è pari`)
    }

}


pariDispari()