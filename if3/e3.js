//EJERCICIO 3 VERSION FUNCIONES
function solicitarNumero(mensaje) {
    let numero;
    do {
        numero = parseInt(prompt(mensaje));
        if (isNaN(numero) || numero <= 0) {
            alert("Ingrese un número válido.");
        }
    } while (isNaN(numero) || numero <= 0);
    return numero;
}

function calcularCosto(tipo, cantidad, horas) {
    let costoPorHora = tipo === 1 ? 4000 : 3000;
    let costoTotal = horas * cantidad * costoPorHora;

    // Aplicar descuento del 3% si se alquilan más de 3 lavadoras
    if (cantidad > 3) {
        costoTotal *= 0.03;
    }
    return costoTotal;
}

function main() {
    let tipoLavadora;
    do {
        tipoLavadora = parseInt(prompt("Ingrese el tipo de lavadora (1 para grande, 2 para pequeña):"));
        if (isNaN(tipoLavadora) || (tipoLavadora !== 1 && tipoLavadora !== 2)) {
            alert("Ingrese una opción válida (1 o 2).");
        }
    } while (isNaN(tipoLavadora) || (tipoLavadora !== 1 && tipoLavadora !== 2));

    let cantidad = solicitarNumero("Ingrese la cantidad de lavadoras alquiladas:");
    let horas = solicitarNumero("Ingrese las horas de alquiler:");

    let costoTotal = calcularCosto(tipoLavadora, cantidad, horas);

    alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${costoTotal}.`);
}

main();


