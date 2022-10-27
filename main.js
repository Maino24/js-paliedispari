/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


//chiedo di inserire una parola
let parolaInput = prompt(`inserisci una parola`);


i = 0;

//con la funzione split divido la parola inserita in lettere con posizione differente in un array
parolaDivisa = parolaInput.split(``)
console.log(parolaDivisa)

parolaDivisa = parolaDivisa.reverse();
console.log(``)

parolaContrario = parolaDivisa.join(``);
console.log(parolaContrario);