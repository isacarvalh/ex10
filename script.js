let num1 = document.querySelector ("#num1")
let num2 = document.querySelector ("#num2")


const BotaoCalcular = document.querySelector("div button")
BotaoCalcular.addEventListener('click', Calcular )

function Calcular() {
    const p = document.querySelector(".resultado")
    const valor1 = Number(num1.value)
    const valor2 = Number(num2.value)
    p.innerHTML = `A soma de ${valor1} + ${valor2} é ${valor1+valor2}`
}