//EJERCICIO 5 VERSION FUNCIONES
// Función para solicitar calificaciones con validación
function solicitarCalificacion(materia) {
    let calificacion;
    do {
        calificacion = parseFloat(prompt(`Ingrese su calificación en ${materia} (0-10):`));
        if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
            alert("Por favor ingresa un número válido entre 0 y 10.");
        }
    } while (isNaN(calificacion) || calificacion < 0 || calificacion > 10);
    return calificacion;
}

// Lista de materias
let materias = ["Física", "Química", "Biología", "Matemáticas", "Informática"];
let sumaCalificaciones = 0;

// Pedir calificaciones para cada materia
for (let i = 0; i < materias.length; i++) {
    sumaCalificaciones += solicitarCalificacion(materias[i]);
}

// Cálculo del porcentaje y asignación de calificación
let porcentaje = (sumaCalificaciones / 50) * 100;
let calificacion;

if (porcentaje < 60) {
    calificacion = "Mala";
} else if (porcentaje <= 80) {
    calificacion = "Buena";
} else {
    calificacion = "Excelente";
}

// Mostrar resultado
alert(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}`);


