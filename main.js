/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


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

}else{

    console.log(`la parola è palindroma`)

}