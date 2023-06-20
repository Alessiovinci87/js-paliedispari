// L'utente sceglie "pari" o "dispari"
const userChoice = prompt("Scegli pari o dispari:");
console.log("Scelta utente: " + userChoice);

// L'utente inserisce un numero da 1 a 5
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));
console.log("Numero utente: " + userNumber);


// Funzione per verificare se un numero è pari 
  function isEven(number) {
    return number % 2 === 0;
  }

  
