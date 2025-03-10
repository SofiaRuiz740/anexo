//EJERCICIO 14 VERSION FUNCIONES
// Función para solicitar y validar el tamaño del sándwich
function solicitarTamaño() {
    let tamaño;
    do {
        tamaño = prompt("Ingrese el tamaño del sándwich (pequeño o grande):").toLowerCase();
        if (tamaño !== "pequeño" && tamaño !== "grande") {
            alert("Por favor, ingrese un tamaño válido (pequeño o grande).");
        }
    } while (tamaño !== "pequeño" && tamaño !== "grande");
    return tamaño === "pequeño" ? 6000 : 12000;
}

// Función para preguntar si se desea un ingrediente y sumar su costo
function solicitarIngrediente(nombre, costo) {
    let respuesta;
    do {
        respuesta = prompt(`¿Desea agregar ${nombre}? (si o no)`).toLowerCase();
        if (respuesta !== "si" && respuesta !== "no") {
            alert(`Por favor, ingrese 'si' o 'no' para el ${nombre}.`);
        }
    } while (respuesta !== "si" && respuesta !== "no");
    
    return respuesta === "si" ? costo : 0;
}

// Lógica principal
let costoTotal = solicitarTamaño();

costoTotal += solicitarIngrediente("tocineta", 3000);
costoTotal += solicitarIngrediente("pavo", 3000);
costoTotal += solicitarIngrediente("queso", 2500);

alert(`El costo total del sándwich es: $${costoTotal}`);
