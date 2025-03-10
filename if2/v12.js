//EJERCICIO 13 VERSION CICLOS
let operador;
let minutosInternacionales;
let costoTotal = 0;

// Validación del operador
while (operador !== "claro" && operador !== "tigo" && operador !== "movistar") {
    operador = prompt("Ingrese su operador (claro, tigo o movistar):").toLowerCase();
    if (operador !== "claro" && operador !== "tigo" && operador !== "movistar") {
        alert("Por favor ingrese un operador válido (claro, tigo o movistar).");
    }
}

// Validación de los minutos internacionales
while (isNaN(minutosInternacionales) || minutosInternacionales < 0) {
    minutosInternacionales = parseInt(prompt("Ingrese la cantidad de minutos internacionales:"));
    if (isNaN(minutosInternacionales) || minutosInternacionales < 0) {
        alert("Por favor ingrese una cantidad válida de minutos internacionales.");
    }
}

switch (operador) {
    case "tigo":
        costoTotal = 45000 + (minutosInternacionales * 200) + 12000;
        break;
    case "claro":
        costoTotal = 30000 + (minutosInternacionales * 100) + 18000;
        break;
    case "movistar":
        costoTotal = 40000 + (minutosInternacionales * 250) + 8000;
        break;
    default:
        alert("Operador no válido.");
        break;
}

if (costoTotal > 0) {
    alert(`El costo total es: $${costoTotal}`);
}
