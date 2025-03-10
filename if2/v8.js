//EJERCICIO 9 VERSION CICLOS
let angulo1, angulo2, angulo3;

// Validación del primer ángulo
while (isNaN(angulo1) || angulo1 <= 0 || angulo1 >= 180) {
    angulo1 = parseInt(prompt("Ingrese el primer ángulo del triángulo (mayor a 0 y menor a 180):"));
    if (isNaN(angulo1) || angulo1 <= 0 || angulo1 >= 180) {
        alert("Por favor, ingrese un ángulo válido (mayor a 0 y menor a 180).");
    }
}

// Validación del segundo ángulo
while (isNaN(angulo2) || angulo2 <= 0 || angulo2 >= 180) {
    angulo2 = parseInt(prompt("Ingrese el segundo ángulo del triángulo (mayor a 0 y menor a 180):"));
    if (isNaN(angulo2) || angulo2 <= 0 || angulo2 >= 180) {
        alert("Por favor, ingrese un ángulo válido (mayor a 0 y menor a 180).");
    }
}

// Validación del tercer ángulo
while (isNaN(angulo3) || angulo3 <= 0 || angulo3 >= 180) {
    angulo3 = parseInt(prompt("Ingrese el tercer ángulo del triángulo (mayor a 0 y menor a 180):"));
    if (isNaN(angulo3) || angulo3 <= 0 || angulo3 >= 180) {
        alert("Por favor, ingrese un ángulo válido (mayor a 0 y menor a 180).");
    }
}

let suma = angulo1 + angulo2 + angulo3;

switch (suma) {
    case 180:
        alert("El triángulo es válido.");
        break;
    default:
        alert("El triángulo no es válido.");
        break;
}

