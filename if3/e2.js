//EJERCICIO 2 VERSION FUNCIONES
// Función para determinar si un número es par o impar
function determinarParidad() {
    let numero;
    
    // Solicitar un número válido al usuario
    do {
        numero = parseInt(prompt("Ingrese un número entero positivo:"));
    } while (isNaN(numero) || numero < 0);
    
    // Determinar si el número es par o impar
    if (numero % 2 === 0) {
        alert(`El número ${numero} es par.`);
    } else {
        alert(`El número ${numero} es impar.`);
    }
}

// Llamar a la función para ejecutarla
determinarParidad();
