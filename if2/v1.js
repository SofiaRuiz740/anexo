//EJERCICIO 1 VERSION 2 CICLOS
let nombre;
do {
    nombre = prompt("Ingrese su nombre:").trim(); // Elimina espacios en blanco
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
    }
} while (nombre === ""); // Evita que el usuario ingrese solo espacios

let horas;
do {
    horas = parseInt(prompt("¿Cuántas horas has trabajado en la semana?"));
    if (isNaN(horas) || horas <= 0) {
        alert("Ingrese un número válido de horas.");
    }
} while (isNaN(horas) || horas <= 0);

let salario;
switch (true) {
    case (horas > 0 && horas <= 10):
        salario = horas * 30000;
        break;
    case (horas > 10):
        salario = horas * 33000;
        break;
    default:
        salario = 0;
        break;
}

alert(`Señor/a ${nombre}, el número de horas trabajadas es ${horas} y su salario equivale a $${salario}.`);