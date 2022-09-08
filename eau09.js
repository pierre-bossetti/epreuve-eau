// imprime des chiffres entre deux valeurs minimum et maximum (max pas compris)
let number1 = process.argv[2];
let number2 = process.argv[3];
let stringNumbers = '';

// permet de savoir combien de chiffres seront imprimes
const numbersToPrint = function (number1, number2) {
  if (number1 - number2 > 0) {
    return number1 - number2;
  } else {
    return number2 - number1;
  }
};

// avoir que des chiffres en input
const onlyNumbers = function (string) {
  for (let i = 0; string[i]; i++) {
    if (string[i] >= '0' && string[i] <= '9') {
      return true;
    } else {
      return false;
    }
  }
};

//ajoute uniquement les chiffres dans une string
if (onlyNumbers(number1) && onlyNumbers(number2)) {
  for (let i = numbersToPrint(number1, number2); i != 0; i--) {
    if (number1 < number2) {
      stringNumbers += number1 + ' ';
      number1++;
    } else {
      stringNumbers += number2 + ' ';
      number2++;
    }
  }
}

// imprime uniquement deux chiffres
if (process.argv.length == 4 && stringNumbers) {
  console.log(stringNumbers);
} else {
  console.log('error');
}
