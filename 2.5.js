let nbrUser = prompt("Entrez votre nombre préferer : ");

while (nbrUser != 42) {
    if (confirm("Etes vous sur?" === true)) {
        nbrUser = prompt("Vous avez peut etre un autre nombre préferer : ");
    } else {
        nbrUser = prompt("Essayer à nouveau : ");
    }
}
alert("C'est aussi mon nombre préférer, quel coincidence !");