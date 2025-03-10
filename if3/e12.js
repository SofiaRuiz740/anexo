//EJERCICIO 13 VERSION FUNCIONES// Función para solicitar un operador válido
function solicitarOperador() {
    let operador;
    do {
        operador = prompt("Ingrese su operador (claro, tigo o movistar):").toLowerCase();
        if (operador !== "claro" && operador !== "tigo" && operador !== "movistar") {
            alert("Por favor, ingrese un operador válido (claro, tigo o movistar).");
        }
    } while (operador !== "claro" && operador !== "tigo" && operador !== "movistar");
    return operador;
}

// Función para solicitar los minutos internacionales
function solicitarMinutos() {
    let minutos;
    do {
        minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales:"));
        if (isNaN(minutos) || minutos < 0) {
            alert("Por favor, ingrese una cantidad válida de minutos internacionales.");
        }
    } while (isNaN(minutos) || minutos < 0);
    return minutos;
}

// Función para calcular el costo total
function calcularCosto(operador, minutos) {
    const tarifas = {
        "tigo": { base: 45000, porMinuto: 200, adicional: 12000 },
        "claro": { base: 30000, porMinuto: 100, adicional: 18000 },
        "movistar": { base: 40000, porMinuto: 250, adicional: 8000 }
    };

    let tarifa = tarifas[operador];
    return tarifa.base + (minutos * tarifa.porMinuto) + tarifa.adicional;
}

// Lógica principal
let operador = solicitarOperador();
let minutosInternacionales = solicitarMinutos();
let costoTotal = calcularCosto(operador, minutosInternacionales);

alert(`El costo total es: $${costoTotal}`);
