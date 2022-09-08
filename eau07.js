// mettre en majuscule la premiere lettre de chaque mot d'une string
const str = process.argv[2];
//separe la string dans un tableau à chaque espace rencontré
const arr = str.split(' ');

//tourne dans chaque element du tableau et met en majuscule la premiere lettre.
for (let i = 0; arr[i]; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

// assemble les elements du tableau dans une string avec un espace pour separer
const str2 = arr.join(' ');
console.log(str2);
