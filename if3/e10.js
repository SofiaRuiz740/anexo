//EJERCICIO 11 VERSION FUNCIONES
// Función para solicitar respuesta sí/no con validación
function solicitarRespuesta(pregunta) {
    let respuesta;
    do {
        respuesta = prompt(pregunta).toLowerCase();
        if (respuesta !== "si" && respuesta !== "no") {
            alert("Por favor, ingrese 'si' o 'no'.");
        }
    } while (respuesta !== "si" && respuesta !== "no");
    return respuesta;
}

// Función para diagnosticar el problema
function diagnosticarProblema(pitido, unidadGira) {
    switch (pitido) {
        case "si":
            switch (unidadGira) {
                case "si":
                    return "Póngase en contacto con el técnico de apoyo.";
                case "no":
                    return "Verificar contactos de la unidad.";
            }
            break;
        case "no":
            switch (unidadGira) {
                case "si":
                    return "Compruebe las conexiones de altavoces.";
                case "no":
                    return "Traiga la computadora para repararla en la central.";
            }
            break;
    }
    return "Error en la entrada de datos.";
}

// Lógica principal
let pitido = solicitarRespuesta("¿La computadora emite un pitido al iniciar? (si/no):");
let unidadGira = solicitarRespuesta("¿El disco duro gira? (si/no):");
let mensaje = diagnosticarProblema(pitido, unidadGira);

alert(mensaje);
