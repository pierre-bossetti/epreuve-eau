let a = process.argv[2] / 1;

let isPrime = function (n) {
  for (let m = 2; m <= Math.sqrt(n); m++) {
    if (n % m === 0) {
      return false;
    } else {
      return true;
    }
  }
};

for (let b = a + 1; ; b++)
  if (b === 2 || isPrime(b)) {
    console.log(b);
    break;
  }
