// Controle si une String est dans une autre string
const string1 = process.argv[2];
const string2 = process.argv[3];

if (typeof string1 == 'undefined' || typeof string2 == 'undefined') {
  console.log('error.');
} else if (string1.includes(string2) || string2.includes(string1)) {
  console.log('true');
} else {
  console.log('false');
}
