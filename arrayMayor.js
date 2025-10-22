// Detectar el número mayor en un array

let myArray = [12, 34, -14, 43, -35, -85, 97, 125, -137, 999];

let numeroMayor = myArray[0]; // o: let numeroMayor = -Infinity;

for (let i=0; i<myArray.length; i++) {

    if (myArray[i] > numeroMayor) {

    numeroMayor = myArray[i];

    }

}

console.log(numeroMayor); // 97