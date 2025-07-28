function salute(params) {
    return console.log('Hola Mundo');
}

function presentacion(nombre) {
    return console.log(`Hola ${nombre}`);
}

function duplicar(numero) {
    return numero *2;
}

function promedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3
}

function comparacion(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

function cuadrado(numero) {
    return numero * numero
}

salute();
presentacion('Andrey');
duplicar(5);
promedio(4,5,7);
comparacion(3,2);
cuadrado(8);