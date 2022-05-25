const inputNumero1 = document.getElementById("input-numero-1")
const inputNumero2 = document.getElementById("input-numero-2")
const mostrarResultado = document.getElementById("resultado")

function calculo(operador){
    const numero1 = Number(inputNumero1.value);
    const numero2 = Number(inputNumero2.value);

    let resultado = 0;
    if(operador == '+'){
        resultado = somar(numero1, numero2)
    }
    if(operador == '-'){
        resultado = subtrair(numero1, numero2)
    }
    if(operador == '*'){
        resultado = multiplicar(numero1, numero2)
    }
    if(operador == '/'){
        resultado = dividir(numero1, numero2)
    }
    mostrarResultado.innerText = resultado
}

function somar(numero1, numero2){
    const resultado = numero1 + numero2;
    return resultado;
}

function subtrair(numero1, numero2){
    const resultado = numero1 - numero2;
    return resultado;
}

function multiplicar(numero1, numero2){
    const resultado = numero1 * numero2;
    return resultado;
}

function dividir(numero1, numero2){
    const resultado = numero1 / numero2;
    return resultado;
}