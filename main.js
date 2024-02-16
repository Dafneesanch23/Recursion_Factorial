/*Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe calcular el factorial del número recibido utilizando recursión.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
Entrada: 5
Salida:120.
Entrada: 6
Salida:720.

Pruébalo con los números que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub y adjuntar el link.*/




//Validar que el dato es un número

let number = parseInt(prompt("Ingrese un número:"));

    if (!isNaN(number)) {
        let factorial = factorialNumber(number);
        console.log(`El factorial del número es: ${factorial}`);
    } else { 
        alert("Por favor, ingrese un número válido");
    }


function factorialNumber (number) {
   return (number <=1) ? 1 : number * factorialNumber (number - 1);
}


