function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2) {
    //somar dois valores
    const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2);
    //fazer a média
    const resultadoDaMediaDeDoisValores = resultadoSomaDeDoisValores/2;
    //Retornar resultado
    return resultadoDaMediaDeDoisValores
}


module.exports = { //significa mostrar para o mundo
    somarDoisNumeros
}