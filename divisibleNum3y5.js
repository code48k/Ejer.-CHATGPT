// Quiero un programa que genere numeros del 1 al 1000 , y que me diga cuales de estos números son divisibles entre 3 y 5 a la vez, y que me lo saque por consola

for (let i=0; i<1000; i++){

    if (i % 3 == 0 && i % 5 == 0 && i != 2){

    console.log(`El número ${i} es divisible entre 3 y 5 y los impares`);

    } 

}