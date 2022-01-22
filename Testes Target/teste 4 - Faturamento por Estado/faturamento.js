let faturamentoMes = [
  {Estado: 'SP', valor: 67836.43, percentual: ''},
  {Estado: 'RJ', valor: 36678.66, percentual: ''},
  {Estado: 'MG', valor: 29229.88, percentual: ''},
  {Estado: 'ES', valor: 27165.48, percentual: ''},
  {Estado: 'Outros', valor: 19849.53, percentual: ''}
]

function calculaFaturamento() {
  let acumulador = 0;
  const arrayPercentualValores = [];

  faturamentoMes.map(item => acumulador = acumulador + item.valor);

  faturamentoMes.map(item => {
    var percentual = (item.valor/acumulador * 100).toFixed(2)
    arrayPercentualValores.push(Number(percentual))
  });

  for(let i = 0; i < faturamentoMes.length; i++){
    faturamentoMes[i].percentual = arrayPercentualValores[i];
  } 
  
  console.log(faturamentoMes)

  //console.log(arrayPercentualValores)
}

calculaFaturamento()