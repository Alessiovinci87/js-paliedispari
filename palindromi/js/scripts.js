function isPalindrome(word) {

    word = word.toLowerCase();

    const reversedWord = word.split('').reverse().join('');

    return word === reversedWord;
}


const userInput = prompt("Inserisci una parola:");
const resultMessage = isPalindrome(userInput)
    ? "La parola inserita è palindroma."
    : "La parola inserita non è palindroma.";

console.log(resultMessage);
document.getElementById("result").innerHTML = `Parola inserita: ${userInput}<br>${resultMessage}`;
