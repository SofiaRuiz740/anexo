//EJERCICIO 6 VERSION CICLOS
let num1, num2, num3;

// Validación del primer número
while (isNaN(num1)) {
    num1 = parseFloat(prompt("Ingrese el primer número:"));
    if (isNaN(num1)) {
        alert("Por favor ingresa un número válido.");
    }
}

// Validación del segundo número
while (isNaN(num2)) {
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    if (isNaN(num2)) {
        alert("Por favor ingresa un número válido.");
    }
}

// Validación del tercer número
while (isNaN(num3)) {
    num3 = parseFloat(prompt("Ingrese el tercer número:"));
    if (isNaN(num3)) {
        alert("Por favor ingresa un número válido.");
    }
}

let caso = 
    (num1 > num2 && num1 > num3 ? "1" : "") +
    (num2 > num1 && num2 > num3 ? "2" : "") +
    (num3 > num1 && num3 > num2 ? "3" : "");

switch (caso) {
    case "1":
        alert(`El número mayor es: ${num1}`);
        break;
    case "2":
        alert(`El número mayor es: ${num2}`);
        break;
    case "3":
        alert(`El número mayor es: ${num3}`);
        break;
    default:
        alert("Hay números iguales");
}
