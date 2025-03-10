//EJERCICIO 8 VERSION FUNCIONES
// Función para solicitar el género con validación
function solicitarGenero() {
    let genero;
    do {
        genero = prompt("Ingrese su género (femenino o masculino):").toLowerCase();
    } while (genero !== "femenino" && genero !== "masculino");
    return genero;
}

// Función para solicitar la edad con validación
function solicitarEdad() {
    let edad;
    do {
        edad = parseInt(prompt("Ingrese su edad:", "0"));
    } while (isNaN(edad) || edad <= 0);
    return edad;
}

// Función para calcular la ayuda mensual
function calcularAyuda(genero, edad) {
    if (genero === "femenino") {
        if (edad > 50) return 120000;
        if (edad >= 30 && edad <= 50) return 100000;
        return 0;
    } else if (genero === "masculino") {
        return 40000;
    }
}

// Obtener los datos del usuario
let genero = solicitarGenero();
let edad = solicitarEdad();
let ayuda = calcularAyuda(genero, edad);

// Mostrar el resultado
alert(`El valor de ayuda mensual es: $${ayuda}`);

