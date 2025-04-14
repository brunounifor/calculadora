import Calculadora from "../service/calculadoraService.js";

describe('Testes da Calculadora', () => {
  it('Deve somar 1 + 2 e dar igual a 3', async () => {
    const calculadora = new Calculadora();
    expect(calculadora.soma(1, 2)).toBe(3);
  });

  it('Deve subtrair 5 - 3 e dar igual a 2', async () => {
    const calculadora = new Calculadora();
    expect(calculadora.subtracao(5, 3)).toBe(2);
  });

  it('Deve multiplicar 2 x 6 e dar igual a 12', async () => {
    const calculadora = new Calculadora();
    expect(calculadora.multiplicacao(2, 6)).toBe(12);
  });

  it('Deve dividir 6 / 2 e dar igual a 3', async () => {
    const calculadora = new Calculadora();
    expect(calculadora.divisao(6, 2)).toBe(3);
  });

   it('Deve somar 2 + 4 e dar igual a 6', async () => {
    const calculadora = new Calculadora();
    expect(calculadora.soma(2, 4)).toBe(9);
  });
});