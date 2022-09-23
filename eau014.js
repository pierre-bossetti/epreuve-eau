// tri par ordre ascii d'une liste de lettres rentrées en arguments
let listeLettres = [];
let i = 2;
let y = 0;
let nbreArguments = process.argv.length - 2;
let string = '';

// ajoute les arguments dans le tableau et les transforme en chiffres
while (i < nbreArguments + 2) {
  listeLettres[y] = process.argv[i];
  y++;
  i++;
}

listeLettres.sort();

// imprime la string de output
for (let i = 0; listeLettres[i]; i++) {
  string += listeLettres[i] + ' ';
}
console.log(string);
