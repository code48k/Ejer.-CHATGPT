// Dado un array, crea uno nuevo con solo los números pares

let myArrPares = [1, 2, 4, 7, 9, 11, 22, 34, 56, 32, 3, 6];

let pares = [];

for (let i=0; i<myArrPares.length; i++){

    if (myArrPares[i] % 2 === 0){

      pares.push(myArrPares[i]);

    }

}

console.log(pares);