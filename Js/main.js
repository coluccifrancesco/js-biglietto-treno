//   Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

let userKm = Number(prompt("Quanti chilometri percorrerai?"));
let userAge = Number(prompt("Quanti anni hai?"));

console.log(userKm, userAge);


/*    
    calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - sconto del 20% per i minorenni
    - sconto del 40% per gli over 65
*/   

let costPerKm = userKm * 0.21;

let youngDiscount = costPerKm / 100 * 80;
let elderDiscount = costPerKm /100 * 60;

if (userAge < 18) {

    console.log(youngDiscount + " " + "€")

} else if (userAge >= 65) {

    console.log(elderDiscount  + " " + "€")

} else {

    console.log(costPerKm  + " " + "€")

}

//   L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

/*    
    TIP: per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:
    100km, 10 anni => prezzo corretto: €16.80
    100km, 70 anni => prezzo corretto: €12.60
*/

if (userKm == 100 && userAge == 10 && youngDiscount == 16.8) {
    
    console.log("Funziona!")

}  else if (userKm == 100 && userAge == 65 && elderDiscount == 12.6) {
    
    console.log("Funziona!")

}