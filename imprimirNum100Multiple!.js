// Imprime los números del 1 al 100, pero:

// * si es múltiplo de 3 → imprime "Fizz"

// * si es múltiplo de 5 → "Buzz"

// * si es múltiplo de ambos → "FizzBuzz"

for (let i=1; i<100; i++){

    if (i % 3 == 0 && i % 5 == 0){

        console.log(`${i} - FizzBuzz`);

    }

    else if (i % 3 == 0){

        console.log(`${i} - Fizz`);
        
    }

    else if (i % 5 == 0){

        console.log(`${i} - Buzz`);

    }

}