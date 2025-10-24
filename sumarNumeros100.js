// Sumar los números del 1 al 100

    let resultado = 0;

    let segundoOperador;
    
    for (let primerOperador=1; primerOperador<=100; primerOperador++){

    segundoOperador = resultado;

    resultado = primerOperador + segundoOperador;
    
    console.log(`${primerOperador} + ${segundoOperador} = ${resultado}`);

    }