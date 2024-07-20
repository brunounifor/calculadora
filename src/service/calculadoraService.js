class Calculadora {
  constructor() {}

  soma(a,b) {
    let c = parseFloat(a)
    let d = parseFloat(b)
    let result = c + d
    return result;
  }

  divisao(a, b) {
    let c = parseFloat(a)
    let d = parseFloat(b)
    let result = c / d
    return result;
  }

  multiplicacao(a,b) {
    let c = parseFloat(a)
    let d = parseFloat(b)
    let result = c * d
    return result;
  }

  subtracao (a, b) {
    let c = parseFloat(a)
    let d = parseFloat(b)
    let result = c - d
    return result;
  }

  potencia(a, b) {
    let c = parseFloat(a)
    let d = parseFloat(b)
    let result = c ** d
    return result;
  }

  raiz(a) {
    let b = parseFloat(a)
    let result = b ** 0.5
    return result;
  }

  fatorial(a) {
    let b = parseFloat(a)
    let result = 1;

    if(b !== 0) {
      for (let index = b; index >= 1; index--) {
        result = result * index
      }
    }
    
    return result;
  }
}

export default Calculadora;