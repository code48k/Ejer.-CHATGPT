// Quiero un programa que me analice el array dado y me diga si es divisible entre 3 y 5 cada uno de sus elementos

numArr = [8, 11, 90, 233, 17546, 225, 24, 12, 50, 100];

for (let x=0; x<numArr.length; x++){

    if(numArr[x] % 3 == 0){

        console.log("El número " + numArr[x] + " es divisible entre 3");

    }

    else if (numArr[x] % 5){

        console.log("El número " + numArr[x] + " es divisible entre 5");

    }

}