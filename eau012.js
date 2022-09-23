// algo de tri à bulles
let listeNombres = [];
let i = 2;
let y = 0;
let nbreArguments = process.argv.length - 2;

// controle qu'au minimum 1 chiffre soit rentre en argument
if (nbreArguments < 1) {
  process.exit(console.log('error'));
}

// ajoute les arguments dans le tableau
while (i < nbreArguments + 2) {
  listeNombres[y] = process.argv[i];
  y++;
  i++;
}

// tri à bulle les valeurs du tableau dans ordre croissant
function sort(tab) {
  let changed;
  do {
    changed = false;
    for (let i = 0; i < tab.length - 1; i++) {
      if (tab[i] > tab[i + 1]) {
        let tmp = tab[i];
        tab[i] = tab[i + 1];
        tab[i + 1] = tmp;
        changed = true;
      }
    }
  } while (changed);
}
sort(listeNombres);
console.log(listeNombres);
