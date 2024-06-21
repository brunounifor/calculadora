import Calculadora from "../service/calculuadoraService.js";

const calculadora = new Calculadora();

export function operationExecutor(operator, a, b) {
    switch(operator) {
        case '+':
            return calculadora.soma(a,b)
        case '-':
            return calculadora.subtracao(a, b);
        case '*':
            return calculadora.multiplicacao(a, b);
        case '/':
            if(b == '0') {
                return 'It\'s not possible to divide by 0'
            } else {
                return calculadora.divisao(a, b);
            }
    }
    return '';
}