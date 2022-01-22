function verificaNumeroInformado(numeroInformado) {

    numeroInformado = document.getElementById('insercao-numero').value;

    const verificaCarecteres = (string) => /\D/g.test(string);

    if (verificaCarecteres(numeroInformado) || numeroInformado == '') {
      alert('Por favor, digite apenas um número inteiro positivo e sem espaços');
      document.location.reload(true);
      return;
    } else {
      numeroInformado = Number(numeroInformado);

      const arrayFibonacci = [0, 1];
      let soma = 0;

      for (let i = 0; soma < numeroInformado; i++) {
        soma = arrayFibonacci[i] + arrayFibonacci[i + 1];
        arrayFibonacci.push(soma);
      }
      
      const resultadoTexto = document.getElementById('resultado-texto');
      const resultadoSequencia = document.getElementById('resultado-sequencia');
      const verificador = arrayFibonacci.includes(numeroInformado);
  
      if(verificador){
        resultadoTexto.value = "Número informado pertence a sequência de Fibonacci";
        resultadoSequencia.value = arrayFibonacci;
      }else {
        resultadoTexto.value = "Número informado NÃO pertence a sequência de Fibonacci";
        resultadoSequencia.value = '--';
      }
    }
}

const botaoResultado = document.querySelector('.submit');
botaoResultado.addEventListener('click', () => verificaNumeroInformado());
