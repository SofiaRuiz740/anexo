//EJERCICIO 5 VERSION CICLOS
let fisica, quimica, biologia, matematicas, informatica;

// Validación de la calificación de Física
while (isNaN(fisica) || fisica < 0 || fisica > 10) {
    fisica = parseFloat(prompt("Ingrese su calificación en Física (0-10):"));
    if (isNaN(fisica) || fisica < 0 || fisica > 10) {
        alert("Por favor ingresa un número válido entre 0 y 10.");
    }
}

// Validación de la calificación de Química
while (isNaN(quimica) || quimica < 0 || quimica > 10) {
    quimica = parseFloat(prompt("Ingrese su calificación en Química (0-10):"));
    if (isNaN(quimica) || quimica < 0 || quimica > 10) {
        alert("Por favor ingresa un número válido entre 0 y 10.");
    }
}

// Validación de la calificación de Biología
while (isNaN(biologia) || biologia < 0 || biologia > 10) {
    biologia = parseFloat(prompt("Ingrese su calificación en Biología (0-10):"));
    if (isNaN(biologia) || biologia < 0 || biologia > 10) {
        alert("Por favor ingresa un número válido entre 0 y 10.");
    }
}

// Validación de la calificación de Matemáticas
while (isNaN(matematicas) || matematicas < 0 || matematicas > 10) {
    matematicas = parseFloat(prompt("Ingrese su calificación en Matemáticas (0-10):"));
    if (isNaN(matematicas) || matematicas < 0 || matematicas > 10) {
        alert("Por favor ingresa un número válido entre 0 y 10.");
    }
}

// Validación de la calificación de Informática
while (isNaN(informatica) || informatica < 0 || informatica > 10) {
    informatica = parseFloat(prompt("Ingrese su calificación en Informática (0-10):"));
    if (isNaN(informatica) || informatica < 0 || informatica > 10) {
        alert("Por favor ingresa un número válido entre 0 y 10.");
    }
}

let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;
let porcentaje = (sumaCalificaciones / 50) * 100;
let calificacion;

if (porcentaje >= 0 && porcentaje < 60) {
    calificacion = "Mala";
} else if (porcentaje >= 60 && porcentaje <= 80) {
    calificacion = "Buena";
} else if (porcentaje > 80) {
    calificacion = "Excelente";
} else {
    calificacion = "Revisa tus calificaciones, algo no está bien";
}

alert(`Tu porcentaje es ${porcentaje} y tu calificación es ${calificacion}`);
