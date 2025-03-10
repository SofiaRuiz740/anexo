//EJERCICIO 8 VERSION CICLOS
let dias;
let costo;

// Validación de la cantidad de días
while (isNaN(dias) || dias <= 0) {
    dias = parseInt(prompt("Ingrese la cantidad de días:"));
    if (isNaN(dias) || dias <= 0) {
        alert("Por favor ingrese una cantidad de días válida.");
    }
}

switch (dias) {
    case 1:
        costo = 18000;
        break;
    case 2:
        costo = 35000;
        break;
    case 3:
        costo = 86000;
        break;
    default:
        alert("Por favor, ingrese una opción válida.");
        costo = 0;
        break;
}

alert(`El costo de la mensualidad es: ${costo}.`);
