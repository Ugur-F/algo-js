let array1 = [1, 2, 3, 4, 5];
let array2 = [];

//affichage du 1e tableau
console.log("Tableau 1 : " + "(" + array1 + ")");


//calcul
for (let i = 0; i < array1.length; i++) {
    // array2[i] === array1[i];
    array2.push(array1[i]);
}

//affichage du 2e tableau
console.log("Tableau 2 : " + "(" + array2 + ")");

