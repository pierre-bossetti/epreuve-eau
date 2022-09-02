let a = 0;
let b = 0;
let c = 0;
let numbersString = '';

while (a <= 7) {
  b = a + 1;
  while (b <= 8) {
    c = b + 1;
    while (c <= 9) {
      if (a == 7 && b == 8 && c == 9) {
        numbersString += `${a}${b}${c}`;
      } else {
        numbersString += `${a}${b}${c}, `;
      }
      c++;
    }
    b++;
  }
  a++;
}

console.log(numbersString);
