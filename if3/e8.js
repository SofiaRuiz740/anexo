//EJERCICIO 9 VERSION FUNCIONES
// Función para solicitar un ángulo con validación
function solicitarAngulo(numero) {
    let angulo;
    do {
        angulo = parseInt(prompt(`Ingrese el ángulo ${numero} del triángulo (mayor a 0 y menor a 180):`));
        if (isNaN(angulo) || angulo <= 0 || angulo >= 180) {
            alert("Por favor, ingrese un ángulo válido (mayor a 0 y menor a 180).");
        }
    } while (isNaN(angulo) || angulo <= 0 || angulo >= 180);
    return angulo;
}

// Función para verificar si los ángulos forman un triángulo válido
function esTrianguloValido(a1, a2, a3) {
    return a1 + a2 + a3 === 180;
}

// Obtener los tres ángulos
let angulo1 = solicitarAngulo(1);
let angulo2 = solicitarAngulo(2);
let angulo3 = solicitarAngulo(3);

// Verificar si forman un triángulo válido
if (esTrianguloValido(angulo1, angulo2, angulo3)) {
    alert("El triángulo es válido.");
} else {
    alert("El triángulo no es válido.");
}
