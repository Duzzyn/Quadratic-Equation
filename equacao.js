// equação do segundo grau = ax² + bx + c = 0
// delta: b² - 4 . a . c
// x: -b +- Raiz de Delta / 2.a
const readline = require("node:readline");

const rl = readline.createInterface({ // cria uma interface com entrada e saida de dados.
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite um valor: ", (valor1) => { // pergunta 3 valores no console para o usuario e guarda essas informações na função calculaSegundoGrau()
    rl.question("Digite mais um valor: ", (valor2) => {
        rl.question("Digite um ultimo valor pra calcular a equação: ", (valor3) => {
            calculaSegundoGrau(valor1, valor2, valor3) // armazena os valores pra ser utilizada na função
            rl.close(); // fim das perguntas
        }) 
    })
})

function calculaSegundoGrau (a, b, c) {
    const equacao = a*a + b + c; // Formula da equação do segundo grau (ax² + bx + c = 0)
    const delta = b*b - 4 * a * c; // Formula de delta (b² - 4 * a * c)
    const raiz = Math.sqrt(delta) // faz o calculo da raiz quadrada utilizando a função Math.sqrt()
    // obs: a função não calcula a raiz quadrada, ela chega em um valor aproximado da raiz utilizando um algoritmo e metodos chamado "Babylonian Method"(método babilônico)

    console.log("Equação: " + equacao) // mostra o resultado da equacao
    console.log("Delta: " + delta) // resultado de delta

    if(delta < 0) { // se o delta for um número negativo irá aparecer o console respectivo:
        console.log("O resultado é:", delta + " não é possivel calcular raiz negativa")
    } else {
        const x1 = -b + raiz / 2*a; // faz o bhaskara (X = -B +- Raiz De Delta / 2*a)
        const x2 = -b - raiz / 2*a;
        console.log("Resultado Final:\n", "x1: " + x1 + "\n", "x2: " + x2)
    }
}