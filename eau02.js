let i = 0;

while (process.argv[i]) {
  i++;
}
i--;

if (i <= 1) {
  return console.log('error');
} else {
  while (i > 1) {
    console.log(process.argv[i]);
    i--;
  }
}
