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
}

export default Calculadora;