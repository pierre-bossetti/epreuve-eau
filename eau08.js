// detecte si une string contient que des chiffres
const string = process.argv[2];

//valeurs ASCII pour détecter chaque chiffre de 0 à 9
const onlyNumbers = function (string) {
  for (let i = 0; string[i]; i++) {
    if (string[i] >= '0' && string[i] <= '9') {
      return true;
    } else {
      return false;
    }
  }
};

if (process.argv.length == 3) {
  console.log(onlyNumbers(string));
} else {
  console.log('saisir un seul argument svp.');
}
