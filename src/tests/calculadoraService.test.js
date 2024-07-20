import Calculadora from "../service/calculadoraService.js";

describe('Testes da Calculadora', () => {
  it('Deve somar dois números naturais quando utilizar o método soma', async () => {
    // Arrange
    const calculadora = new Calculadora();
    const numero1 = 1;
    const numero2 = 2;
    const mockResult = numero1 + numero2;

    // Act
    const methodResult = calculadora.soma(numero1, numero2);

    // Assert
    expect(methodResult).toBe(mockResult);
  });

  it('Deve subtrair dois números naturais quando utilizar o método subtracao', async () => {
    // Arrange
    const calculadora = new Calculadora();
    const numero1 = 5;
    const numero2 = 3;
    const mockResult = numero1 - numero2;

    // Act
    const methodResult = calculadora.subtracao(numero1, numero2);

    // Assert
    expect(methodResult).toBe(mockResult);
  });

  it('Deve multiplicar dois números naturais quando utilizar o método multiplicacao', async () => {
    // Arrange
    const calculadora = new Calculadora();
    const numero1 = 2;
    const numero2 = 6;
    const mockResult = numero1 * numero2;
  
    // Act
    const methodResult = calculadora.multiplicacao(numero1, numero2);

    // Assert
    expect(methodResult).toBe(mockResult);
  });

  it('Deve dividir dois números naturais com denominador não nulo quando utilizar o método divisao', async () => {
    // Arrange
    const calculadora = new Calculadora();
    const numero1 = 2;
    const numero2 = 6;
    const mockResult = numero1 / numero2;
  
    // Act
    const methodResult = calculadora.divisao(numero1, numero2);

    // Assert
    expect(methodResult).toBe(mockResult);
  });
});