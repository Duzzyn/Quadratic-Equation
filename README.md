# Calculadora de Função do Segundo Grau

## Sobre
 Essa calculadora basicamente calcula uma função do segundo grau [(Saiba Mais)](https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_quadr%C3%A1tica). Ao rodar o comando ``node equacao.js`` o programa faz 3 perguntas sobre quais são os valores que o usuário quer inserir na função.
 a fórmula precisa receber 3 valores, A, B e C, e assim ser calculada. Após inserir os valores desejados, o programa exibe no console o resultado.

 ## Como Usar
 Faça o clone do do repositório ``https://github.com/Duzzyn1/Quadratic-Equation.git``. Em seguida abra o terminal na pasta do projeto e digite o comando ``node equacao.js``.

 ### Fórmulas
 Equação: ``ax² + bx + c = 0``
 Delta: ``b² - 4 * a * c``
 Bhaskara: ``x = -b +- √Δ / 2*a``

### Pontos:
```javascript
 const raiz = Math.sqrt(delta)
```
A função ``Math.sqrt()`` é utilizada pra calcular a raiz quadradada de um número, mas como ela calcula? Ela utiliza métodos e algoritmos, tais conhecidos como; Método de Newton-Raphson [Saiba Mais](https://pt.wikipedia.org/wiki/M%C3%A9todo_de_Newton%E2%80%93Raphson) e o Algoritmo de Babilônia [Babylonian Method](https://en.wikipedia.org/wiki/Methods_of_computing_square_roots). O resultado fornecido pela função, na verdade é uma aproximação do valor real da raiz quadradada, o computador não calcula a raiz quadrada exata no sentido matemático rigoroso, ele nos dá um valor muito próximo do valor real da raiz quadrada.
