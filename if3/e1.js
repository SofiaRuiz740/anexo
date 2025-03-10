//EJERCICIO 1 VERSION FUNCIONES
// Función para ingresar las calificaciones y calcular el porcentaje
function calcularSalario() {
    let horasTrabajadas;
    let tarifaPorHora;
    do {
        horasTrabajadas = parseFloat(prompt("Ingrese el número de horas trabajadas (mayor a 0):"));
    } while (isNaN(horasTrabajadas) || horasTrabajadas <= 0);
    
    do {
        tarifaPorHora = parseFloat(prompt("Ingrese la tarifa por hora (mayor a 0):"));
    } while (isNaN(tarifaPorHora) || tarifaPorHora <= 0);
    
    let salario;
    if (horasTrabajadas > 40) {
        let horasExtras = horasTrabajadas - 40;
        salario = (40 * tarifaPorHora) + (horasExtras * tarifaPorHora * 2);
    } else {
        salario = horasTrabajadas * tarifaPorHora;
    }
    alert(`El salario total es: $${salario}`);
}
calcularSalario();

