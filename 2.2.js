let min = prompt("Entrez un nombre : ");
let max = prompt("Entrez un second nombre : ");
let current = prompt("Entrez un dernier nombre : ");

if (min > max) {
    alert("Erreur ! Tu n'as rien compris a l'exercice..");
} else if (min < current && max > current) {
    alert("Votre nombre " + current + " est bien entre " + min + " et " + max);
} else {
    alert("Bien joué");
}

