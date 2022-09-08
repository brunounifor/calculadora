import {addition} from './addition.js';
import {subtraction} from './subtraction.js';
import {multiplication} from './multiplication.js';
import {division} from './division.js';

export function operationExecutor(operator, a, b) {
    switch(operator) {
        case '+':
            return addition(a,b)
        case '-':
            return subtraction(a, b);
        case '*':
            return multiplication(a, b);
        case '/':
            if(b == '0') {
                return 'It\'s not possible to divide by 0'
            } else {
                return division(a, b);
            }
    }
    return '';
}