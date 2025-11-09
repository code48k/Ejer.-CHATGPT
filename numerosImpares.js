// Dado un array, crea uno nuevo con solo los números impares

let myArr = [1, 2, 4, 7, 9, 11, 22, 34, 56, 32, 3, 6];

let impar = [];

for (let i=0; i<myArr.length; i++){

    if (myArr[i] % 2 !== 0){

      impar.push(myArr[i]);

    }

}

console.log(impar);