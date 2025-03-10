//EJERCICIO 10 VERSION CICLOS
let copias;
let precioPorCopia;
let precioTotal;
let categoria;

// Validación del número de copias
while (isNaN(copias) || copias < 0) {
    copias = parseInt(prompt("Ingrese el número de copias que desea imprimir:"));
    if (isNaN(copias) || copias < 0) {
        alert("Por favor, ingrese un número válido de copias (mayor o igual a 0).");
    }
}

if (copias >= 0 && copias <= 499) {
    categoria = 1;
} else if (copias >= 500 && copias <= 749) {
    categoria = 2;
} else if (copias >= 750 && copias <= 999) {
    categoria = 3;
} else if (copias >= 1000) {
    categoria = 4;
} else {
    categoria = 0;
}

switch (categoria) {
    case 1:
        precioPorCopia = 120;
        break;
    case 2:
        precioPorCopia = 100;
        break;
    case 3:
        precioPorCopia = 80;
        break;
    case 4:
        precioPorCopia = 50;
        break;
    default:
        alert("Por favor, ingrese un número válido de copias.");
        precioPorCopia = 0;
        break;
}

precioTotal = copias * precioPorCopia;

if (precioPorCopia > 0) {
    alert(`Total a pagar: ${precioTotal}`);
}
