let nbr = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("pair : " + nbr + " = " +  nbr / 2);
    } else {
        console.log("impair : " + nbr + " = " + nbr * 3);
    }    
    nbr++;
}