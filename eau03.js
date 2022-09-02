const inputNumber = process.argv[2];

function fibonacci(n) {
  return n < 1
    ? 0
    : n <= 2
    ? 1
    : n > 45
    ? 'chiffre trop grand dsl.'
    : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(inputNumber));
