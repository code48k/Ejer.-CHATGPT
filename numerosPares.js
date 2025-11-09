// Dado un array, crea uno nuevo con solo los números pares

let myArrPares = [1, 2, 4, 7, 9, 11, 22, 34, 56, 32, 3, 6];

let pares = [];

for (let i=0; i<myArrPares.length; i++){

    if (myArrPares[i] % 2 === 0){

      pares.push(myArrPares[i]);

    }

}

console.log(`Números pares: ${pares}`);

// -------------------------------------------------------------------------------------------------------------------------------------------------

let myArrImpares = [1, 2, 4, 7, 9, 11, 22, 34, 56, 32, 3, 6];

let impares = [];

for (let i=0; i<myArrImpares.length; i++){

    if (myArrImpares[i] % 2 !== 0){

      impares.push(myArrImpares[i]);

    }

}

console.log(`Números pares: ${impares}`);










































































































































// let myArr1 = [2, 4, 1, 3, 6, 9, 10, 11, 21, 12, 8, 22];

// let pares = [];

// for (let i=0; i<myArr1.length; i++) {

//   if (myArr1[i] % 2 == 0) {

//     pares.push(myArr1[i]);


//   }

// }
//       console.log(pares);

// let myArr2 = [2, 4, 1, 3, 6, 9, 10, 11, 21, 12, 8, 22];

// let impares = [];

// for (let i = 0; i < myArr2.length; i++) {

//   if (myArr2[i] % 2 !== 0) { // 👈 acá está la magia

//     impares.push(myArr2[i]);

//   }

// }

// console.log(impares);
