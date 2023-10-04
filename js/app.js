// # Biglietto del treno

// - Chiedere i chilometri del viaggio;
//     - dichiarare una variabile;
//     - assegnare alla variabile il valore restituto da un prompt;
let chilometriViaggio = prompt("Inserire km del viaggio");
chilometriViaggio = parseFloat(chilometriViaggio);
console.log("Il viaggio prevede", chilometriViaggio, "km");

// - Calcolare il prezzo base del viaggio in base al prezzo per km;
//     - assegnare una variabile;
//     - calcolare il prezzo base (0.21€/km);
let prezzoBase = chilometriViaggio * 0.21;
prezzoBase = parseFloat(prezzoBase);
console.log("Il prezzo del biglietto è di", prezzoBase, "euro");

// - Chiedere l'età;
//     - dichiarare una variabile;
//     - assegnare alla variabile il valore restituito da un prompt;

let userEta = prompt("Inserire la propria età");
userEta = parseInt(userEta);
console.log("La tua età è di", userEta, "anni");

// impostare lo sconto pari al 20% del prezzo base;
let percentualeMinorenne = prezzoBase * 0.2;
let prezzoMinorenne = prezzoBase - percentualeMinorenne;

// - impostare lo sconto pari al 40%;
let percentualeSenior = prezzoBase * 0.4;
let prezzoSenior = prezzoBase - percentualeSenior;

// - Impostare il prezzo a due cifre decimali. 
//  - convertire i valori in numeri float;

prezzoBase = prezzoBase.toFixed(2);
prezzoMinorenne = prezzoMinorenne.toFixed(2);
prezzoSenior = prezzoSenior.toFixed(2);

prezzoMinorenne = parseFloat(prezzoMinorenne);
prezzoSenior = parseFloat(prezzoSenior);

// - Impostare lo sconto eventuale;
//     - IF l'età è minore o uguale a 18;
//          - stampa il risultato con lo sconto minorenni;
//     - ELSE IF l'età è maggiore o uguale a 65;
//          - stampa il risultato con lo sconto senior;
//     - ELSE il prezzo base rimane invariato.
//          - stampa il risultato col prezzo intero.

if (userEta <= 18) {
    console.log("Il prezzo scontato per i minorenni è di", prezzoMinorenne, "euro");
} else if (userEta >= 65) {
    console.log("Il prezzo scontato per i senior è di", prezzoSenior, "euro");
} else {
    console.log("Il prezzo intero è di", prezzoBase, "euro");
}