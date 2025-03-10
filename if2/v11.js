//EJERCICIO 12 VERSION CICLOS
let modelo;
let mensaje;

// Validación del número de modelo
while (isNaN(modelo) || modelo <= 0) {
    modelo = parseInt(prompt("Ingrese el número de modelo de su automóvil:"));
    if (isNaN(modelo) || modelo <= 0) {
        alert("Por favor, ingrese un número de modelo válido.");
    }
}

switch (modelo) {
    case 119:
    case 179:
    case 189:
    case 190:
    case 191:
    case 192:
    case 193:
    case 194:
    case 195:
    case 221:
    case 780:
        mensaje = "El automóvil está defectuoso, llevar a garantía.";
        break;
    default:
        mensaje = "Su automóvil no está defectuoso.";
        break;
}

alert(mensaje);
