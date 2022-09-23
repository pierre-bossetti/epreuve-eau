// tri par selection d'une liste de chiffre rentrés en arguments
let listeNombres = [];
let i = 2;
let y = 0;
let nbreArguments = process.argv.length - 2;

// ajoute les arguments dans le tableau et les transforme en chiffres
while (i < nbreArguments + 2) {
  listeNombres[y] = process.argv[i] / 1;
  y++;
  i++;
}

// fonction qui controle que seulement des chiffres soient rentrés
function seulementNombres(array) {
  for (let i = 0; array[i]; i++) {
    if (typeof array[i] === 'string') {
      return false;
    } else {
      return true;
    }
  }
}

// controle qu'au minimum 1 chiffre soit rentré en argument
if (nbreArguments < 1 || seulementNombres(listeNombres) == undefined) {
  process.exit(console.log('error'));
}

// trier les chiffres du tableau dans ordre croissant
function sort(tab) {
  for (let i = 0; i < tab.length; i++) {
    //stocker l'index de l'élément minimum
    let min = i;
    for (let j = i + 1; j < tab.length; j++) {
      if (tab[j] < tab[min]) {
        // mettre à jour l'index de l'élément minimum
        min = j;
      }
    }
    let tmp = tab[i];
    tab[i] = tab[min];
    tab[min] = tmp;
  }
  return tab;
}
sort(listeNombres);
console.log(listeNombres);
