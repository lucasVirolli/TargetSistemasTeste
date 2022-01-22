let faturamentoMes = [
  {Estado: 'SP', valor: 67836.43, percentual: ''},
  {Estado: 'RJ', valor: 36678.66, percentual: ''},
  {Estado: 'MG', valor: 29229.88, percentual: ''},
  {Estado: 'ES', valor: 27165.48, percentual: ''},
  {Estado: 'Outros', valor: 19849.53, percentual: ''}
]

var somaDosValores;
var somaPercentual;

var arrayPercentualValores = [];

function calculaFaturamento() {
  let acumulador = 0;

  let somatorio = faturamentoMes.map(item => {
    acumulador = acumulador + item.valor
    return acumulador
  });

  somaDosValores = somatorio[somatorio.length - 1]

  faturamentoMes.map(item => {
    let percentual = (item.valor/acumulador * 100).toFixed(2)
    arrayPercentualValores.push(Number(percentual))
  });

  for(let i = 0; i < faturamentoMes.length; i++){
    faturamentoMes[i].percentual = arrayPercentualValores[i];
  }
  
  mostraResultado()

}

function mostraResultado() {
  const tbodyFaturamento = document.getElementById('tbodyFaturamento');
  const somaFaturamento = document.getElementById('somaFaturamento');
  const somaPercentualFaturamento = document.getElementById('somaPercentualFaturamento');

  const somaPorcentagens = arrayPercentualValores.reduce((acum, valAtual) => {
    acum = acum + valAtual;
    return acum
  });

  console.log(somaPorcentagens)

  somaDosValores = somaDosValores.toFixed(2).split('.');
  somaDosValores[0] = somaDosValores[0].split(/(?=(?:...)*$)/).join('.');

  for (let faturamento of faturamentoMes) {

    let Estado = faturamento.Estado;
    let valor = faturamento.valor;
    let percentual = faturamento.percentual;

    valor = valor.toFixed(2).split('.');
    valor[0] = valor[0].split(/(?=(?:...)*$)/).join('.');

    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = Estado;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = `R$ ${valor.join(',')}`;
    somaFaturamento.textContent = somaDosValores.join('.');
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = `${percentual}%`;
    somaPercentualFaturamento.textContent = somaPorcentagens.toFixed(2)
    tr.appendChild(td);

    tbodyFaturamento.appendChild(tr);
    

    console.log(faturamento);
  }
}

calculaFaturamento()