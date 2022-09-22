/* programme qui affiche la valeur minimale
 entre les différentes valeurs d'un tableau
créer un nouveau tableau avec données dans l'ordre croisant
diminuer dernier element avec avant dernier
 */
const listeNombres = [];
let listeTri = [];
let i = 2;
let y = 0;
let nbreArguments = process.argv.length - 2;

// controle qu'au minimum 2 chiffres soient rentres en arguments
if (nbreArguments < 2) {
  process.exit(console.log('error'));
}

// ajoute les arguments dans le tableau
while (i < nbreArguments + 2) {
  listeNombres[y] = process.argv[i];
  y++;
  i++;
}

// creer un tableau trié dans ordre numérique
listeTri = listeNombres.sort((a, b) => a - b);

// imprime la différence minimum absolue
if (
  listeTri[listeTri.length - 1] - listeTri[listeTri.length - 2] <
  listeTri[1] - listeTri[0]
) {
  console.log(listeTri[listeTri.length - 1] - listeTri[listeTri.length - 2]);
} else {
  console.log(listeTri[1] - listeTri[0]);
}
