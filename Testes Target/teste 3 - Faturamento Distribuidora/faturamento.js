
fetch('valoresFaturamento.json')
  .then(resposta => resposta.json())
  .then(json => {
    valoresFaturamento(json),
    menorEMaiorValorFaturamento(json),
    superiorMediaMensal(json)
  });

function menorEMaiorValorFaturamento(json){

  const arrayValores = [];
  const arrayDias = [];

  for(let faturamento of json){
    let valor = faturamento.valor;
    let dia = faturamento.dia;
    arrayValores.push(valor);
    arrayDias.push(dia);
  }

  // *** MENOR VALOR *** //
  let menorValor = arrayValores[0];
  let diaOcorrencia;
  for(let i = 0; i < arrayValores.length; i++){
    if(arrayValores[i] <= menorValor && arrayValores[i] != 0){
      menorValor = arrayValores[i];
      diaOcorrencia = arrayDias[i];
    }
  }
  menorValor = menorValor.toFixed(2).split('.');
  menorValor[0] = menorValor[0].split(/(?=(?:...)*$)/).join('.');

  document.getElementById('resultado1').textContent = `R$ ${menorValor}`;
  document.getElementById('info-extra1').textContent = `Este resultado ocorreu no dia ${diaOcorrencia}`;

  // *** MAIOR VALOR *** //
  let maiorValor = arrayValores[0];
  for(let i = 0; i < arrayValores.length; i++){
    if(arrayValores[i] >= maiorValor && arrayValores[i] != 0){
      maiorValor = arrayValores[i];
      diaOcorrencia = arrayDias[i];
    }
  }
  maiorValor = maiorValor.toFixed(2).split('.');
  maiorValor[0] = maiorValor[0].split(/(?=(?:...)*$)/).join('.');

  document.getElementById('resultado2').textContent = `R$ ${maiorValor}`;
  document.getElementById('info-extra2').textContent = `Este resultado ocorreu no dia ${diaOcorrencia}`;
}

function superiorMediaMensal(json){
  
  const arrayValores = [];
  const arrayDias = [];

  for(let faturamento of json){

    let valor = faturamento.valor;
    arrayValores.push(valor);
  }

  let somaValores = arrayValores.reduce((acum, valAtual) => {
    if(valAtual != 0) acum = acum + valAtual;
    return acum
  },0);

  let nElementosMaiorQueZero = 0;
  for(let i = 0; i < arrayValores.length ; i++){
    if(arrayValores[i]){
      nElementosMaiorQueZero++;
      arrayDias.push(i + 1)
    }
  }

  let mediaValores = somaValores/nElementosMaiorQueZero;

  let contadorDeDias = 0;
  arrayValores.forEach(valor => {
    if(valor > mediaValores) contadorDeDias++; 
  });

  document.getElementById('resultado3').textContent = `${contadorDeDias} dias`;

  mediaValores = mediaValores.toFixed(2).split('.');
  mediaValores[0] = mediaValores[0].split(/(?=(?:...)*$)/).join('.');
  document.getElementById('info-extra3').textContent = `Ignorando os dias sem faturamento, a média dos valores foi de R$ ${mediaValores} e o(s) dia(s) que isto ocorreu: ${arrayDias}`;
}

function valoresFaturamento(json) {
  
  const tbodyFaturamento = document.getElementById('tbodyFaturamento');

    for (let faturamento of json) {

      let valor = faturamento.valor;
      valor = valor.toFixed(2).split('.');
      valor[0] = valor[0].split(/(?=(?:...)*$)/).join('.');

      let tr = document.createElement('tr');
      let td = document.createElement('td');
      td.textContent = faturamento.dia;
      tr.appendChild(td)

      td = document.createElement('td');
      td.textContent = `R$ ${valor.join(',')}`;
      tr.appendChild(td)
  
      tbodyFaturamento.appendChild(tr)

  }

}