function verificaNumeroInformado (numeroInformado) {

  const arrayFibonacci = [0, 1];
  let soma = 0;

  for(let i = 0; soma < numeroInformado; i++){
    soma = arrayFibonacci[i] + arrayFibonacci[i+1];
    arrayFibonacci.push(soma);
  }

  const verificador = arrayFibonacci.includes(numeroInformado)
  verificador ? 
  console.log("Número informado pertence a sequência de Fibonacci") :
  console.log("Número informado NÃO pertence a sequência de Fibonacci");

}

verificaNumeroInformado(21)