//EJERCICIO 3 VERSION CICLOS
let tipoLavadora, cantidad, horas, costoTotal;
do {
    tipoLavadora = parseInt(prompt("Ingrese el tipo de lavadora (1 para grande, 2 para pequeña):"));
    if (isNaN(tipoLavadora) || (tipoLavadora !== 1 && tipoLavadora !== 2)) {
        alert("Ingrese una opción válida (1 o 2).");
    }
} while (isNaN(tipoLavadora) || (tipoLavadora !== 1 && tipoLavadora !== 2));

do {
    cantidad = parseInt(prompt("Ingrese la cantidad de lavadoras alquiladas:"));
    if (isNaN(cantidad) || cantidad <= 0) alert("Ingrese una cantidad válida.");
} while (isNaN(cantidad) || cantidad <= 0);

do {
    horas = parseInt(prompt("Ingrese las horas de alquiler:"));
    if (isNaN(horas) || horas <= 0) alert("Ingrese un número válido de horas.");
} while (isNaN(horas) || horas <= 0);

switch (tipoLavadora) {
    case 1:
        costoTotal = horas * cantidad * 4000;
        break;
    case 2:
        costoTotal = horas * cantidad * 3000;
        break;
}

if (cantidad > 3) {
    costoTotal *= 0.03; // Aplicar descuento del 3%
}
alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${costoTotal}.`);
