let dividir = require("./division")
let multiplicar = require("./multiplicacion")
let sumar = require("./sumar.js")
let restar = require("./restar.js")

console.log(process.argv);

let operacion = process.argv[2]
let num1 = process.argv[3]
let num2 = process.argv[4]

num1 = Number(num1)
num2 = Number(num2)

switch (operacion) {
    case 'sumar':
        let resultadoSuma = sumar(num1,num2)
        console.log(resultadoSuma);
        break;
    case 'restar':
        let resultadoResta = restar(num1,num2)
        console.log(resultadoResta);
        break;
    case 'multiplicar':
        let resultadoMultiplicar = multiplicar(num1,num2)
        console.log(resultadoMultiplicar);
        break;
    case 'dividir':
        let resultadoDividir = dividir(num1,num2)
        console.log(resultadoDividir);
        break;
    default:
        console.log('Las operaciones disponibles son: sumar , restar, multiplicar y dividir');
        break;
}