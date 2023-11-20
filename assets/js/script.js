let nombre;
let renta;
let tipoContrato;

function solicitarDatos() {
    nombre = prompt("Por favor ingresa tu nombre");
    renta = prompt("Por favor ingresa tu renta");
    document.getElementById("datos").innerHTML = `Nombre: ${nombre}<br>Renta: ${renta}`;
}

function seleccionarContrato(tipo) {
    tipoContrato = tipo;
}

function calcularRenta() {
    let rentaLiquida;
    if (tipoContrato === "Honorario") {
        rentaLiquida = renta - (renta * 0.10);
    } else {
        rentaLiquida = renta * 0.80;
    }
    document.getElementById("resultado").innerHTML = `Hola ${nombre}, tu renta líquida es ${rentaLiquida}`;
}

function limpiar() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("datos").innerHTML = "";
    nombre = "";
    renta = "";
    tipoContrato = "";
}
