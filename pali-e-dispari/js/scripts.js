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

//commit 3 add funzione per somma, pari e dispari 

// Funzione per verificare se un numero è pari 
  function isEven(number) {
    return number % 2 === 0;
  }

  // Calcola la somma dei due numeri
  const sum = userNumber + computerNumber;
  console.log("La somma dei due numeri: " + sum);

// Verifica se la somma è pari o dispari
  const isSumEven = isEven(sum);
  console.log("La somma dei numeri è pari: " + isSumEven);



// commit 4 add condizione per il vincitore

// Variabile per il vincitore
  let winner;

  if ((isSumEven && userChoice.toLowerCase() === "pari") || (!isSumEven && userChoice.toLowerCase() === "dispari")) {
    winner = "Utente";
  } else {
    winner = "Computer";
  }
  console.log("Il vincitore è: " + winner);


// commit 5 add stampa a web e termine esercizio


// Accesso all'elemento HTML per visualizzare l'output
  const outputElement = document.getElementById("output");


  outputElement.innerHTML += "<h1>Pari o Dispari</h1>";
  outputElement.innerHTML += "<h3>Scegli Pari o Dispari</h3> <br>"
  outputElement.innerHTML += "<u>Risposta utente:</u> " + userChoice + "<br><br>";
  outputElement.innerHTML += "<h3>Inserisci un numero da 1 a 5</h3> <br>";
  outputElement.innerHTML += "<u>Risposta utente:</u> " + userNumber + "<br><br>";
  outputElement.innerHTML += "<h3>Numero generato dal computer:</h3> " + computerNumber + "<br><br>";
  outputElement.innerHTML += "<h3>La somma dei due numeri:</h3> " + sum + "<br></br>";
  outputElement.innerHTML += "<h2>La somma dei numeri è "  + (isSumEven ? "PARI</h2>" : "DISPARI") + "<br><br>";
  outputElement.innerHTML += "<h1>Il vincitore è: " + winner + "</h1><br>";
  