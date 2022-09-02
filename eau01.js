let combinaison1 = 00;
let combinaison2 = 01;
let chiffre = 1;
let stringNumbers = '';

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      for (let l = 0; l < 10; l++) {
        if (i == 9 && j == 9 && k == 9 && l == 9) {
          stringNumbers += `${i}${j} ${k}${l}`;
        } else {
          stringNumbers += `${i}${j} ${k}${l}, `;
        }
      }
    }
  }
}

console.log(stringNumbers);
