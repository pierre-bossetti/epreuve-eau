// Ecrire une string avec une lettre majuscule sur deux
const inputString = process.argv[2];
let newString = '';
let i = 0;
let compteur = 0;

let maj1_2 = function (string) {
  while (string[i]) {
    // controle si c'est une lettre miniscule à changer en majuscule
    if (compteur % 2 == 0 && string[i] >= 'a') {
      newString += String.fromCharCode(string[i].charCodeAt(0) - 32);
      compteur++;
      // controle si c'est une lettre à laisser identique (valeurs ASCII)
    } else if (
      (string[i] > 'A' && string[i] <= 'z') ||
      (string[i] >= '!' && string[i] <= '/')
    ) {
      newString += string[i];
      compteur++;
      // controle si c'est un espace et ne le compte pas
    } else if (string[i] == ' ') {
      newString += string[i];
    } else {
      return 'error';
    }
    i++;
  }
  return newString;
};

console.log(maj1_2(inputString));
