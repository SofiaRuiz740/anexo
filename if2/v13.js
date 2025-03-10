//EJERCICIO 14 VERSION CICLOS
let tamaño;
let costoTotal = 0;

// Validación del tamaño del sándwich
while (tamaño !== "pequeño" && tamaño !== "grande") {
    tamaño = prompt("Ingrese el tamaño del sándwich (pequeño o grande):").toLowerCase();
    if (tamaño !== "pequeño" && tamaño !== "grande") {
        alert("Por favor ingrese un tamaño válido (pequeño o grande).");
    }
}

switch (tamaño) {
    case "pequeño":
        costoTotal = 6000;
        break;
    case "grande":
        costoTotal = 12000;
        break;
    default:
        alert("Tamaño no válido.");
        break;
}

// Si el tamaño es válido, preguntar por los ingredientes
if (costoTotal > 0) {
    let tocineta = prompt("¿Desea agregar tocineta? (si o no)").toLowerCase();
    let jalapeño = prompt("¿Desea agregar jalapeño? (si o no)").toLowerCase();
    let pavo = prompt("¿Desea agregar pavo? (si o no)").toLowerCase();
    let queso = prompt("¿Desea agregar queso? (si o no)").toLowerCase();

    // Validación y aplicación del costo adicional para los ingredientes
    while (tocineta !== "si" && tocineta !== "no") {
        tocineta = prompt("¿Desea agregar tocineta? (si o no)").toLowerCase();
        if (tocineta !== "si" && tocineta !== "no") {
            alert("Por favor ingrese 'si' o 'no' para la tocineta.");
        }
    }

    while (jalapeño !== "si" && jalapeño !== "no") {
        jalapeño = prompt("¿Desea agregar jalapeño? (si o no)").toLowerCase();
        if (jalapeño !== "si" && jalapeño !== "no") {
            alert("Por favor ingrese 'si' o 'no' para el jalapeño.");
        }
    }

    while (pavo !== "si" && pavo !== "no") {
        pavo = prompt("¿Desea agregar pavo? (si o no)").toLowerCase();
        if (pavo !== "si" && pavo !== "no") {
            alert("Por favor ingrese 'si' o 'no' para el pavo.");
        }
    }

    while (queso !== "si" && queso !== "no") {
        queso = prompt("¿Desea agregar queso? (si o no)").toLowerCase();
        if (queso !== "si" && queso !== "no") {
            alert("Por favor ingrese 'si' o 'no' para el queso.");
        }
    }

    // Agregar el costo según los ingredientes seleccionados
    if (tocineta === "si") {
        costoTotal += 3000;
    }
    if (pavo === "si") {
        costoTotal += 3000;
    }
    if (queso === "si") {
        costoTotal += 2500;
    }

    alert(`El costo total del sándwich es: $${costoTotal}`);
}
