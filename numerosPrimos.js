// Números primos entre 1 y 50

for (let i=2; i<=50; i++){

let esPrimo = true;

    for (let x=2; x <= i-1; x++){ // Esta linea es true o false

        if (i % x === 0){ // Esta linea es true o false

        esPrimo = false;

        break;

    }

}

if (esPrimo){

    console.log(`Número Primo: ${i}`);

}

}