// Calcula la media de los valores en un array de números

let myArr = [12, 21, 31, 49, 5, 16, 7, 18, 91, 10];

let suma = 0;

for (let i=0; i<myArr.length; i++){

    suma += myArr[i];

    resultado = suma / myArr.length;
}

console.log(resultado);