// Crea un bucle que sume solo los números impares del 1 al 50

let result = 0;

for (let i=1; i<=50; i++){

    if (i % 2 != 0){

        result += i;

        console.log(result);
        
    }
}