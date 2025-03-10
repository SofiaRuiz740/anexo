//EJERCICIO 11 VERSION CICLOS
let pitido, unidadGira, mensaje;

// Validación de la respuesta sobre el pitido
while (pitido !== "si" && pitido !== "no") {
    pitido = prompt("¿La computadora emite un pitido al iniciar? (si/no):").toLowerCase();
    if (pitido !== "si" && pitido !== "no") {
        alert("Por favor ingrese 'si' o 'no' para el pitido.");
    }
}

// Validación de la respuesta sobre si la unidad gira
while (unidadGira !== "si" && unidadGira !== "no") {
    unidadGira = prompt("¿El disco duro gira? (si/no):").toLowerCase();
    if (unidadGira !== "si" && unidadGira !== "no") {
        alert("Por favor ingrese 'si' o 'no' para el disco duro.");
    }
}

switch (pitido) {
    case "si":
        switch (unidadGira) {
            case "si":
                mensaje = "Póngase en contacto con el técnico de apoyo.";
                break;
            case "no":
                mensaje = "Verificar contactos de la unidad.";
                break;
            default:
                mensaje = "Respuesta inválida sobre el disco duro.";
                break;
        }
        break;
    case "no":
        switch (unidadGira) {
            case "si":
                mensaje = "Compruebe las conexiones de altavoces.";
                break;
            case "no":
                mensaje = "Traiga la computadora para repararla en la central.";
                break;
            default:
                mensaje = "Respuesta inválida sobre el disco duro.";
                break;
        }
        break;
    default:
        mensaje = "Respuesta inválida sobre el pitido.";
        break;
}

alert(mensaje);
