//EJERCICIO 10 VERSION FUNCIONES
// Función para solicitar la cantidad de copias con validación
function solicitarCopias() {
    let copias;
    do {
        copias = parseInt(prompt("Ingrese el número de copias que desea imprimir:"));
        if (isNaN(copias) || copias < 0) {
            alert("Por favor, ingrese un número válido de copias (mayor o igual a 0).");
        }
    } while (isNaN(copias) || copias < 0);
    return copias;
}

// Función para determinar la categoría según el número de copias
function determinarCategoria(copias) {
    if (copias <= 499) return 1;
    if (copias <= 749) return 2;
    if (copias <= 999) return 3;
    return 4; // Si son 1000 o más
}

// Función para obtener el precio por copia según la categoría
function obtenerPrecioPorCopia(categoria) {
    switch (categoria) {
        case 1: return 120;
        case 2: return 100;
        case 3: return 80;
        case 4: return 50;
        default: return 0; // Caso no válido
    }
}

// Lógica principal
let copias = solicitarCopias();
let categoria = determinarCategoria(copias);
let precioPorCopia = obtenerPrecioPorCopia(categoria);
let precioTotal = copias * precioPorCopia;

alert(`Total a pagar por ${copias} copias: $${precioTotal}`);
