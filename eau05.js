// Controle si une String est dans une autre string
const string1 = process.argv[2];
const string2 = process.argv[3];

const stringIncludes = function (string1, string2) {};

if (typeof string1 == 'undefined' || typeof string2 == 'undefined') {
  console.log('error.');
} else if (string1.includes(string2) || string2.includes(string1)) {
  console.log('true');
} else {
  console.log('false');
}

/*
let similar = false;
let i = 0;
let j = 0;
while (string1[i] != string2[j]) {
  // similar = false;
  for (let j = i + j; string1[j] == string2[j]; j++) {
    similar = true;
  }
  i++;
}
console.log(similar);
*/
