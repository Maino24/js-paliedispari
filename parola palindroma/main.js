/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

/*
//chiedo di inserire una parola
let parolaInput = prompt(`inserisci una parola`);


i = 0;

//con la funzione split divido la parola inserita in lettere con posizione differente in un array
parolaDivisa = parolaInput.split(``)
console.log(parolaDivisa)

//con la funzione reverse "giro al contrario" la parola
parolaDivisa = parolaDivisa.reverse();
console.log(``)

//con la funzione join creo la parola al contrario 
parolaContrario = parolaDivisa.join(``);
console.log(parolaContrario);


//creo la condizione che controlla se la parola è palindroma
if(parolaContrario !== parolaInput){

    console.log(`la parola non è palindroma`)
    document.getElementById(`output`).innerHTML= `La parola` `${parolaInput}`  `non è palindroma`

}else{

    console.log(`la parola è palindroma`)
    document.getElementById(`output`).innerHTML= `La parola` `${parolaInput}` `è palindroma`


}


*/


//ALTRO MODO




//if(parolaContrario !== parolaInput){
        
 //   console.log(`è diversa`)
//}else{
 //   console.log(`palindroma`)
//}

let parolaInput = prompt(`inserisci una parola`);
let parolaContrario = ``;


function controllo(parolaContrario, parolaInput){

    
    if(parolaContrario !== parolaInput){
        
        console.log(`è diversa`)
        }else{
        console.log(`palindroma`)
        }


}




for( let i = parolaInput.length - 1 ; i >= 0; i--){

    //console.log( parolaInput[i] );
    parolaContrario += parolaInput[i]
    
}

controllo(parolaContrario, parolaInput)