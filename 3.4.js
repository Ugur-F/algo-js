let array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

let min = array[0];
let max = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }

    if (array[i] > max) {
        max = array[i];
    }
}

console.log("Minimum :", minimum);
console.log("Maximum :", maximum);