//EJERCICIO 12 VERSION FUNCIONES
// Función para solicitar el número de modelo con validación
function solicitarModelo() {
    let modelo;
    do {
        modelo = parseInt(prompt("Ingrese el número de modelo de su automóvil:"));
        if (isNaN(modelo) || modelo <= 0) {
            alert("Por favor, ingrese un número de modelo válido.");
        }
    } while (isNaN(modelo) || modelo <= 0);
    return modelo;
}

// Función para verificar si el automóvil está defectuoso
function verificarDefecto(modelo) {
    const modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
    return modelosDefectuosos.includes(modelo)
        ? "El automóvil está defectuoso, llevar a garantía."
        : "Su automóvil no está defectuoso.";
}

// Lógica principal
let modelo = solicitarModelo();
let mensaje = verificarDefecto(modelo);
alert(mensaje);
