// Dado un array, crea uno nuevo con solo los números pares 

let myArr = [1, 2, 4, 7, 8, 9, 11, 22, 34, 56, 33, 17];  

let pares = [];

for (let i=0; i<myArr.length; i++){

    if (myArr[i] % 2 === 0){

      pares.push(myArr[i]);

    }

}

console.log(pares);