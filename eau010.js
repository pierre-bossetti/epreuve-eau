// affiche le numéro du premier element d'un tableau qui est égal au dernier paramètre
let listeArguments = [];
let i = 2;
let y = 0;
let nbreArguments = process.argv.length - 2;

// ajoute les arguments à la liste sauf le dernier
while (i < nbreArguments + 1) {
  listeArguments[y] = process.argv[i];
  y++;
  i++;
}
// stocke le dernier argument dans a
let a = process.argv[i];

// controle si le dernier argument est présent dans la liste
function indexElement(l, a) {
  index = -1;
  for (let i = 0; process.argv[i]; i++) {
    if (l[i] == a) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(indexElement(listeArguments, a));
