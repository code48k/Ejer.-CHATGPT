// Sacame los números primos y compuestos entre 1 y 13

for (let i=2; i<=13; i++) {
    
    let esPrimo = true;

    for (let x=2; x<i-1; x++) { 

        if (i % x === 0) { 

            esPrimo = false;

            console.log(`Número Compuesto: ${i}`);

            break;

        }

    }

    if (esPrimo) {
        
        console.log(`Número Primo: ${i}`);
    }

}