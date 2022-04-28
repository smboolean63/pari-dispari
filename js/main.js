// chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. 
const sceltaUtente = prompt("scegli pari o dispari");
const numeroUtente = Number(prompt("scegli un numero tra 1 e 9"));
// Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 
const numeroComputer = Math.floor(Math.random() * 9) + 1;
console.log(numeroComputer);
// Sommiamo i due numeri
const somma = numeroUtente + numeroComputer;
// Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.
// somma è pari o dispari??
let risultato;
if( somma % 2 === 1 ) {
    risultato = "dispari";
} else {
    risultato = "pari";
}
// comunichiamo se l'utente ha vinto
// SE la scelta utente è uguale al risutalto 
// ALTRIMENTI l'utente ha perso
if( sceltaUtente === risultato ) {
    console.log("Hai Vintooooo!!!");
} else {
    console.log("Hai perso!");
}