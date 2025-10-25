// Imprimir solo los números impares de un array

let myArr = [1, 10, 21, 323, 411, 50, 6, 73, 81, 90, 100, 111, 122, 113, 147, 15];

let vacioArr = [];

for (let i=0; i<myArr.length; i++){

    if (myArr[i] %2 !== 0){

        vacioArr = myArr[i];

        console.log(vacioArr);

    }

}