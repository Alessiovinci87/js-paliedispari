// L'utente sceglie "pari" o "dispari"
const userChoice = prompt("Scegli pari o dispari:");
console.log("Scelta utente: " + userChoice);

// L'utente inserisce un numero da 1 a 5
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));
console.log("Numero utente: " + userNumber);



// Genera un numero casuale per il computer
const computerNumber = getRandomNumber(1, 5);
console.log("Numero generato dal computer: " + computerNumber);

// Funzione per generare un numero casuale
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;   
  }

