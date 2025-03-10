//EJERCICIO 2 VERSION CICLOS
let numero, residuo;

do {
    numero = parseInt(prompt("Ingresa un número:"));
    if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
    }
} while (isNaN(numero));

residuo = numero % 2;

switch (residuo) {
    case 0:
        alert("El número es par.");
        break;
    case 1:
        alert("El número es impar.");
        break;
    default:
        alert("Error en el cálculo.");
}

