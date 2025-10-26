// Calcula el factorial de un número (n! = n × (n-1) × ... × 1) usando un for

let numFactorial = 5;

let resultado = 1;

for (let i=numFactorial; i>=1; i--){

    resultado *= i;
    
}

console.log(`Número factorial de ${numFactorial} es: ${resultado}`);