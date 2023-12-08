let array = [1, 2, 3, 4, 5];

let total = 0;

for (let elem of array) {
    total = total + elem;
}

console.log("Moyenne du tableau : " + total / array.length);