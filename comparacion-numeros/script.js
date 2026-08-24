import PromptSync from "prompt-sync";
const prompt = PromptSync();


function numberOrder(a, b, c) {

    let numeros = [a, b, c];

    if (a === b && a === c) console.log("Los numeros son iguales!");

    numeros.sort((a, b) => a - b);

    console.log(numeros);

}

let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let num3 = Number(prompt("Ingresa el tercer número:"));

numberOrder(num1, num2, num3);