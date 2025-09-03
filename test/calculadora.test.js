const { somarDoisNumeros, calcularMediaDeDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da Função de Soma', function () {
    it('A função deve ser capaz de somar dois números positivos', function () {
        
        const resultadoDaSoma = somarDoisNumeros(5, 3);

        expect(resultadoDaSoma).to.equal(8);
    });

    it('A função deve ser capaz de somar um número positivo e um negativo', function () {
        
        const resultadoDaSoma = somarDoisNumeros(50, -15);

        expect(resultadoDaSoma).to.equal(35);
    });

    it('A função deve ser capaz de somar dois números zero', function () {
        
        const resultadoDaSoma = somarDoisNumeros(0, 0);

        expect(resultadoDaSoma).to.equal(0);
    });
    it('A função deve ser capaz de somar dois números negativos', function () {
        const resultadoDaSoma = somarDoisNumeros(-2, -3);

        expect(resultadoDaSoma).to.equal(-5);
    });
});

describe('Testes da Função Calcular Média de Dois Valores', function () {
    it('A função deve ser capaz de realizar a média dois números positivos', function () {
        
        const resultadoDaMediaDeDoisValores = calcularMediaDeDoisNumeros(5, 3);

        const mediaDeDoisNumeros = resultadoDaMediaDeDoisValores/2;

        expect(resultadoDaMediaDeDoisValores).to.equal(4);
    });

    it('A função deve ser capaz de realizar a média de um número positivo e um negativo', function () {
        
        const resultadoDaMediaDeDoisValores = calcularMediaDeDoisNumeros(50, -10);

        expect(resultadoDaMediaDeDoisValores).to.equal(20);
    });

    it('A função deve ser capaz de realizar a média entre dois zeros', function () {
        const resultadoDaMediaDeDoisValores = calcularMediaDeDoisNumeros(0, 0);

        expect(resultadoDaMediaDeDoisValores).to.equal(0);
    });

    it('A função deve ser capaz de realizar a média entre dois números negativos', function () {
        const resultadoDaMediaDeDoisValores = calcularMediaDeDoisNumeros(-10, -2);

        expect(resultadoDaMediaDeDoisValores).to.equal(-6)
    });
});
