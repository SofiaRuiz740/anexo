//EJERCICIO 7 VERSION CICLOS
let genero, edad;
let caso;
let ayuda;

// Validación del género
while (genero !== "femenino" && genero !== "masculino") {
    genero = prompt("Ingrese su género (femenino/masculino):").toLowerCase();
    if (genero !== "femenino" && genero !== "masculino") {
        alert("Por favor ingrese un género válido: femenino o masculino.");
    }
}

// Validación de la edad
while (isNaN(edad) || edad <= 0) {
    edad = parseInt(prompt("Ingrese su edad:"));
    if (isNaN(edad) || edad <= 0) {
        alert("Por favor ingrese una edad válida.");
    }
}

switch (genero) {
    case "femenino":
        if (edad > 50) {
            caso = "femenino_mayor50";
        } else if (edad >= 30 && edad <= 50) {
            caso = "femenino_30a50";
        } else if (edad < 30) {
            caso = "femenino_menor30";
        }
        break;
    case "masculino":
        caso = "masculino";
        break;
    default:
        caso = "genero_invalido";
        break;
}

switch (caso) {
    case "femenino_mayor50":
        ayuda = 120000;
        break;
    case "femenino_30a50":
        ayuda = 100000;
        break;
    case "femenino_menor30":
        ayuda = 0;
        break;
    case "masculino":
        ayuda = 40000;
        break;
    case "genero_invalido":
        alert("Género no válido.");
        ayuda = 0;
        break;
    default:
        ayuda = 0;
}

alert(`El valor de ayuda mensual es: ${ayuda}.`);
