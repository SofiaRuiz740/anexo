//EJERCICIO 6 VERSION FUNCIONES
// Función para solicitar un número con validación
function solicitarNumero(mensaje) {
    let numero;
    while (true) {
        numero = parseFloat(prompt(mensaje));
        if (!isNaN(numero)) {
            return numero; // Si es un número válido, lo retorna
        }
        alert("Por favor ingresa un número válido.");
    }
}

// Función para determinar el número mayor usando switch
function determinarMayor(num1, num2, num3) {
    let caso = 
        (num1 > num2 && num1 > num3 ? "1" : "") +
        (num2 > num1 && num2 > num3 ? "2" : "") +
        (num3 > num1 && num3 > num2 ? "3" : "");

    switch (caso) {
        case "1":
            return `El número mayor es: ${num1}`;
        case "2":
            return `El número mayor es: ${num2}`;
        case "3":
            return `El número mayor es: ${num3}`;
        default:
            return "Hay números iguales.";
    }
}

// Solicitar los tres números
let num1 = solicitarNumero("Ingrese el primer número:");
let num2 = solicitarNumero("Ingrese el segundo número:");
let num3 = solicitarNumero("Ingrese el tercer número:");

// Mostrar el
