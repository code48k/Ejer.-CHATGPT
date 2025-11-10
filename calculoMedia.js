// Calcula la media de los valores en un array de números

// 1º Hacer un bucle for de la posicion 0 hasta longitud total del array

let myArr = [12, 21, 31, 49, 5, 16, 7, 18, 91, 10];

// 2º Guardo una variable la suma acumulada de los valores de los elementos

let suma = 0;

// 3º Declaro una varible para sacar ña media total de los elementos.

let resultado;

// 4º Hago un bucle para recorrer el array

for (let i=0; i<myArr.length; i++){

// 5º Acumulo la suma de todos los elementos del array    

    suma += myArr[i];

// 6º Crear una variable media que saque la media de los elementos.

    resultado = suma / myArr.length;
}

// 7º Imprimir resultado

console.log(resultado);